"use client";

import { CardWrapper } from '@/components/auth/card-wrapper'
import {useForm} from 'react-hook-form'
import { useState, useTransition } from "react";
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { register } from '@/actions/register'
import { RegisterSchema } from '@/schemas'
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

interface RegisterResponse {
    error?: string; 
    success?: string;
  }

export const RegisterForm = () => {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            register(values)
              .then((data: any) => {
                if(data.error) {
                  setError(data.error);
                } else {
                  setSuccess(data.success);
                }
              });
        });

    }

  return (
    <CardWrapper
        headerLabel="Create an account"
        backButtonLabel="Already have an account? Login here."
        backButtonHref="/auth/login"
        showSocial
    >
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
            >
                <div>
                <FormField control={form.control}
                        name="name"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Prithviraj" />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
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
                <FormError message={error}/>
                <FormSuccess message={success}/>
                <Button
                    type="submit"
                    className='w-full'
                >
                    Create an Account
                </Button>
            </form>
        </Form>
    </CardWrapper>
  )
}

export default RegisterForm;