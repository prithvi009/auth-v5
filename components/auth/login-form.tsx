"use client";

import { CardWrapper } from '@/components/auth/card-wrapper'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from "react";
import * as z from 'zod'

import { LoginSchema } from '@/schemas'
import {Input} from '@/components/ui/input'
import {
    Form, 
    FormField,
    FormControl,
    FormLabel,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/auth/form-error';
import { FormSuccess } from './form-success';
import {register} from '@/actions/register'

export const LoginForm = () => {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

    }

  return (
    <CardWrapper
        headerLabel="Login"
        backButtonLabel="Don't have an account? Register here."
        backButtonHref="/auth/register"
        showSocial
    >
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
            >
                <div>
                    <FormField control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} type="email" placeholder="rahul@example.com" />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control}
                        name="password"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} type="password" placeholder="******" />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <FormSuccess message=""/>
                <FormError message=""/>
                <Button
                    type="submit"
                    className='w-full'
                >
                    Login
                </Button>
            </form>
        </Form>
    </CardWrapper>
  )
}

export default LoginForm