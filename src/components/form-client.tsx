"use client"


import  {useTranslation}  from '@/app/i18n/client'
import { SendEmailForm } from './form'
interface props {
  lng: string
}
export const FormComponent = ({ lng } : props) => {
  const  { t}  = useTranslation(lng, 'form')
  
  return (
    <div>
<SendEmailForm t={t} lng={lng} ></SendEmailForm>
    </div>
  )
}