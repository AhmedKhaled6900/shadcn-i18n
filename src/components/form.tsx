
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
import { useState, useTransition } from 'react'
import Image from 'next/image'
import { setInterval } from 'timers'
import { FormSuccess } from './form-success'
import { FormError } from './form-error'
interface props {
  lng: string
  t: any
}
 export const Schema =
 z.object({ 
    email: z.string().email({
    message: "Email is required"
}),
 name: z.string().min(3 ,{message:"Name is required"}),
 subject: z.string().min(10 ,{message:"Subject is required"}),
});

export const SendEmailForm=({ t, lng}:props )=>{
  const [ispending, starttransition] = useTransition()
  const [success, setSuccess] = useState<string | undefined>("")
  const [error, setError] = useState<string | undefined>("")

    const form =useForm<z.infer<typeof Schema>>({
        resolver: zodResolver(Schema),
        defaultValues: {
            email: "",
            name: "",
            subject: "",
        }
    })
    const onSubmit = async (values: z.infer<typeof Schema>) => {
      setSuccess("")
      setError("")
      console.log(values)
      starttransition(() => {
      sendMail( values )
    
      .then((data)=>{
        setSuccess(data.success)
        setError(data.error)
      })
    })
     
     setTimeout(()=>{form.reset()}, 3000)
   
    }

    return(
      <>
      <div className='flex flex-col items-center justify-center text-center p-10 p-5   '>
<h3 className='text-xl '>
{t("question")} <br />
{t("answer")}</h3>
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
                        <FormLabel>{t("email")}</FormLabel>
                        <FormControl>
                          <Input  className='rounded' 
                            {...field}
                            disabled={ispending}
                            placeholder="email@example.com"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage className='text-red-500' />
                      </FormItem>
                    )} />  
<FormField control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("name")}</FormLabel>
                        <FormControl>
                          <Input className='rounded'
                            {...field}
                            disabled={ispending}
                            placeholder="Email@example.com"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage  className='text-red-500'/>
                      </FormItem>
                    )} />  
<FormField control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("message")}</FormLabel>
                        <FormControl>
                          <Input className='rounded'
                            {...field}
                            disabled={ispending}
                            placeholder={t("yourmessage")}
                            type="textarea"
                          />
                        </FormControl>
                        <FormMessage className='text-red-500' />
                      </FormItem>
                    )} />  
                   <FormSuccess  message={success}></FormSuccess>
<FormError message={error} ></FormError>
                    <div className='  flex justify-center items-center '>
                    {/* <FormError message={"error"}></FormError> */}
                    <Button disabled={ispending} type='submit' className=' mt-10 w-full lg:w-1/3  rounded bg-gradient-to-b p-5 from-b to-black font-semibold' >
                       {t("send")}
                    </Button>
                    </div>


</form>
        </Form>
      </>

    )
}



