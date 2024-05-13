
"use client"
import * as z from 'zod'


import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  
  
  } from "./ui/form"
import { Input } from './ui/input';
import { Button } from './ui/button';
import { sendMail } from '../../actions/sendmail';
import { useTransition } from 'react'

 export const Schema =
 z.object({ 
    email: z.string().email({
    message: "invalid email"
}),
 name: z.string().min(3 ,{message:"Name is required"}),
 subject: z.string().min(10 ,{message:"Subject is required"}),
});

export const SendEmailForm=()=>{
  const [ispending, starttransition] = useTransition()

    const form =useForm<z.infer<typeof Schema>>({
        resolver: zodResolver(Schema),
        defaultValues: {
            email: "",
            name: "",
            subject: "",
        }
    })
    const onSubmit = async (values: z.infer<typeof Schema>) => {
      console.log(values)
      starttransition(() => {
      sendMail( values ) })}

    return(
        <Form {...form}>
<form className="space-y-4 p-10 bg-gradient-to-b p-5 from-b to-black" onSubmit={form.handleSubmit(onSubmit)}>
<FormField control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input className='rounded' 
                            {...field}
                            // disabled={ispending}
                            placeholder="Email@example.com"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />  
<FormField control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input className='rounded'
                            {...field}
                            // disabled={ispending}
                            placeholder="Email@example.com"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />  
<FormField control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>subject</FormLabel>
                        <FormControl>
                          <Input className='rounded'
                            {...field}
                            // disabled={ispending}
                            placeholder="enter your message"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />  
                    
                    <Button type='submit' className='w-full bg-gradient-to-b p-5 from-b to-black font-semibold' >
send

                    </Button>

</form>
        </Form>
    )
}



