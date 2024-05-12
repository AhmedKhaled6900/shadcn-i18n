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
import  {SendEmails}  from '@/lib/mail';

 export const Schema =
 z.object({ 
    email: z.string().email({
    message: "invalid email"
}),
 name: z.string().min(3 ,{message:"Name is required"}),
 subject: z.string().min(10 ,{message:"Subject is required"}),
});
// const sendEmail = async (
//   values: z.infer<typeof Schema>
// )=>{
//     const validatedFields = Schema.parse(values)
// const {email, name, subject} = validatedFields
// }

export const SendEmailForm=()=>{
    const form =useForm<z.infer<typeof Schema>>({
        resolver: zodResolver(Schema),
        defaultValues: {
            email: "",
            name: "",
            subject: "",
        }
    })
    const onSubmit = async (values: z.infer<typeof Schema>) => {
      const {email, name, subject} = values
 SendEmails(email, name, subject)    }
    return(
        <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)}>
<FormField control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
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
                          <Input
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
                          <Input
                            {...field}
                            // disabled={ispending}
                            placeholder="enter your message"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />  
                    
                    <Button type='submit' >
send

                    </Button>

</form>
        </Form>
    )
}



