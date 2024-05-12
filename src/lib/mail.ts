import { Schema } from "@/components/form"
import  {Resend} from "resend"
import * as z from 'zod'
const resend = new Resend("re_53xq7M2c_HiozALpCsR7w5Fe1wqnE91fj")
resend.apiKeys.create({ name: 'Production' });

// const Schema =
// z.object({ 
//    email: z.string().email({
//    message: "invalid email"
// }),
// name: z.string().min(3 ,{message:"Name is required"}),
// subject: z.string().min(10 ,{message:"Subject is required"}),


// });
export const SendEmails = async (
    // values: z.infer<typeof Schema>
email : string,
name : string,
subject : string
)=>{
  // console.log(token)
// const {email, name, subject} = values
await resend.emails.send({
  from: email,
  to: "ahmedkha6900@gmail.com",
  subject: "Two Factor Authentication",
  html: `
  <p> Hi ${name},${subject} </p>
  `
})
}