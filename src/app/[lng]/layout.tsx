
"use client"
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
const font = Poppins({
  subsets: ['latin'],
  weight:["400"]
}
)
// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }))
// }
// import AOS from 'aos';
// import 'aos/dist/aos.css';
interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lng: string
  }
}
export default  function RootLayout({
  children,
  params: {
    lng
  }
} : RootLayoutProps) {
  // const {t} = await useTranslation(lng , "lang")
  
  
  return (
    <html lang={lng} dir={dir(lng) } 
    className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-a to-b text-slate-200  ' 
    >
      <head />
      <body className={font.className} > 
      <Header lng={lng} /> 
      <div >
      {children}

      </div>
<Footer  lng={lng}></Footer>      </body>
    </html>
  )
}