
"use client"
import * as z from 'zod'

import img from "../../public/wired-outline-177-envelope-send.gif"
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
import Image from 'next/image'

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
      <>
      <div className='flex flex-col items-center justify-center text-center p-10 p-5   '>
<h3 className='text-xl '>
Have a question? <br />
We would love to hear from you .
</h3>
<div>
<Image src={img} alt="" width={100} height={100}/>

</div>

</div>
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
                            type="textarea"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />  
                    <div className='  flex justify-center items-center '>
                    <Button type='submit' className=' mt-10 w-full lg:w-1/3  rounded bg-gradient-to-b p-5 from-b to-black font-semibold' >
                        Send
                    </Button>
                    </div>


</form>
        </Form>
      </>

    )
}



