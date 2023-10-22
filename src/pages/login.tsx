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
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {useState } from "react"
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Login() {
  let router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [error, setError] = useState<string>("")

 async  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    let res = await signIn('credentials', {
      ...values,
      redirect:false
    })
    if (res?.error){
      setError(res.error)
    }else{
      setError("")
      router.push('/dashboard')
    }


  }
  return (
    <div className="flex h-[100vh] w-full items-center justify-center text-white">
      <div className="flex h-[400px] w-[400px] flex-col items-center">
        <div className="w-10/12">
          <h1 className="text-[30px]">Login</h1>
          <p className="mt-[5px]">Welcome back!</p>
        </div>
        <div className="flex w-full justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-[10px] w-10/12 space-y-3 pb-2"
            >
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
              <Link href="/signup" className="focus:underline hover:underline text-white block">Don't have an account?</Link>
              <Button type="submit">Log In</Button>
              {error && (
                <div style={{color:"red"}}>{error}</div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
