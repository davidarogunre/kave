"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { api } from "../utils/api";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/router";


const formSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must have at least 3 characters")
      .max(70, "Maximum character limit exceeded"),
    email: z.string().email(),
    username: z
      .string()
      .min(2, "Username must have at least 2 characters")
      .max(20, "Username must not exceed 20 characters"),
    password: z.string().min(6, "Password must be a mininum of 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password == data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default function Signup() {
  const router = useRouter()
  const [error, setError] = useState('')
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const {mutate} = api.user.create.useMutation({
    onError: (e)=>{
        setError(e.message)
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutate(values)
    if (!error){
      router.push('/login')
    }
  }

  return (
    <div className="flex h-[100vh] w-full items-center justify-center text-white">
      <div className="flex h-auto w-[400px] flex-col items-center">
        <div className="w-10/12">
          <h1 className="text-[30px]">Sign Up</h1>
          <p className="mt-[5px]">Create a new account on Kave now!</p>
        </div>
        <div className="flex w-full justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-[10px] w-10/12 space-y-2 pb-2.5"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        className="border-2 border-slate-800 bg-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="border-2 border-slate-800 bg-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Username"
                        {...field}
                        className="border-2 border-slate-800 bg-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                        className="border-2 border-slate-800 bg-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Confirm Password"
                        type="password"
                        {...field}
                        className="border-2 border-slate-800 bg-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link
                href="/login"
                className="block text-white hover:underline focus:underline"
              >
                Already have an account?
              </Link>
              <Button type="submit">Sign Up</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
