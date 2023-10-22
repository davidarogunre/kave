import { z } from "zod";
import bcrypt from 'bcrypt'
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import {TRPCError} from '@trpc/server'
export const userRouter = createTRPCRouter({
  create: publicProcedure.input(z.object({name: z.string(), username:z.string(), email:z.string(), password:z.string()})).mutation(async ({ctx, input})=>{
       let hashPassword = await bcrypt.hash(input.password, 10)
       let existedUser = await ctx.prisma.user.findUnique({
        where:{
          email: input.email
        }
       })
       if(existedUser){
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'This user already exists, please try logging in instead'
          })
       }
       let createUser = await ctx.prisma.user.create({
        data:{
          name:input.name, 
          username: input.username,
          email:input.email,
          hashedPassword: hashPassword,
        }
       })
       if (!createUser){
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'There was an issue creating this user'
        })       }
       return createUser
  })
});
