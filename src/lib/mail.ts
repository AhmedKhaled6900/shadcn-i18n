import { Schema } from "@/components/form"
import  {Resend} from "resend"
import * as z from 'zod'
const resend = new Resend(process.env.RESEND_API_KEY)
// resend.apiKeys.create({ name: 'Production' });

// const Schema =
// z.object({ 
//    email: z.string().email({
//    message: "invalid email"
// }),
// name: z.string().min(3 ,{message:"Name is required"}),
// subject: z.string().min(10 ,{message:"Subject is required"}),


// });
export const SendEmails = async (
email : string,
name : string,
subject : string
)=>{

await resend.emails.send({
  from: "onboarding@resend.dev",
  to: "ahmedkha6900@gmail.com",
  subject: "Email",
  html: `
  <p> Hi ${name},${subject} ,${email} </p>
  `
})
}