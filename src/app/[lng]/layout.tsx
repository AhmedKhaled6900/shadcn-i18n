
// "use client"
import logo from "../../../public/nvnn1v19miftcw8krm1q.png"

import { dir, t } from 'i18next'
import {NextUIProvider} from "@nextui-org/system";
// import {Providers} from '../provider'
import NavbarComponent from '../components/nav/nav'
const languages = ['en', 'ar']
import {  Header } from '../components/nav/client'
import  '../globals.css'
import { NavClient } from '../components/nav-client'
import { useTranslation } from '../i18n'
import { SelectDemo } from '../components/lang-switcher'
import { withTranslation } from 'react-i18next'
import Container from '../components/container';
import {Poppins} from "next/font/google"
import { DividerHorizontalIcon } from '@radix-ui/react-icons';
import { FooterComponent } from '../components/footer/footer';
import { Footer } from '../components/footer/footerclient';
import { Testcomponent } from '../components/test';
import { FormComponent } from '@/components/form-client';
import { SendEmailForm } from '@/components/form';
import Image from "next/image";
const font = Poppins({
  subsets: ['latin'],
  weight:["400"]
}
)
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}
// import AOS from 'aos';
// import 'aos/dist/aos.css';
interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lng: string
  }
}
export default async function RootLayout({
  children,
  params: {
    lng
  }
} : RootLayoutProps) {
  const {t} = await useTranslation(lng , "form")
  // const {tForm} =await useTranslation(lng ,"form")
  
  
  return (
    <html lang={lng} dir={dir(lng) } 
    className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-a to-b text-slate-200  ' 
    >
      <head />
      <body className={font.className} > 
      <Header lng={lng} /> 
      <div className='flex justify-center items-center my-5 flex-col w-full '>
<div className="rounded-xl">
<Image className="rounded-xl  " src={logo} alt="logo" width={75} height={75}/>
</div>
{/* <h3 className="text-3xl font-bold m-5">
  Divs Are Here 
</h3> */}
      </div>
      {/* <div > */}
      {children}

      {/* </div> */}

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10'>
    <FormComponent   lng={lng}></FormComponent>
<div className='h-[100%]'>
<Footer lng={lng}></Footer> 

</div>

      </div>



     </body>
    </html>
  )
}