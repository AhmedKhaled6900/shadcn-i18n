"use server"

// import { Schema } from "@/components/form"
import { SendEmails } from "@/lib/mail";
import * as z from "zod";

 const Schema =
z.object({ 
   email: z.string().email({
   message: "invalid email"
}),
name: z.string().min(3 ,{message:"Name is required"}),
subject: z.string().min(10 ,{message:"Subject is required"}),
});
export const sendMail = async (values: z.infer<typeof Schema>) => {
    const validatedFields = Schema.safeParse(values)
    if (!validatedFields.success) {
        return {error:"Invalid fields"};    }
    const {email, name, subject} = validatedFields.data
    await SendEmails(email, name, subject)
return {success: "Message sent"}
}