
// "use client"
import Link from 'next/link'
import { useTranslation } from '../i18n'
import img from  "../../../public/fca5f2db-8779-4a2d-a783-7e76c9c32df9.jpeg"
import AppBgImg from '../components/img'
import Container from '../components/container'
import Image from 'next/image'
import {SecondSection} from '../components/sections/home/second-section'
import { FirstSection } from '../components/sections/home/first-section'
import { Separator } from '@/components/ui/separator'
import bg from "../../../public/traffic-7200606__340.jpg"
import  {SendEmailForm}  from '@/components/form'
interface RootLayoutProps {
  params: {
    lng: string
  }
}
export default async  function Page({ params: { lng } } : RootLayoutProps) {
// const {t} = await useTranslation(lng ,"translation")
const {t} = await useTranslation(lng ,"third-page")
  return (
  
  <>
  <FirstSection lng={lng} ></FirstSection>
  <Separator/>
  <SecondSection lng={lng}></SecondSection>
  <div className='mt-10 w-full h-[500px] relative flex justify-center items-center  ' style={{backgroundImage:`${bg}`}}>
    <div>
    <Image src={bg} alt='' fill/>
    </div>
   {
      lng==="en"?<div data-aos="fade-right" className=' space-x-4  flex justify-center items-center '>
        <div className=' bg-gradient-to-b p-5 from-b to-black '>
        <h3 data-aos="fade-right"> {t("first")} </h3>
      <h3 data-aos="fade-right"> {t("second")} </h3>
      <h3 data-aos="fade-right">{t("third")} </h3>
        </div>
        <div className=' bg-gradient-to-b p-5 from-b to-black'>
        <h3 data-aos="fade-right"> {t("first")} </h3>
      <h3 data-aos="fade-right"> {t("second")} </h3>
      <h3 data-aos="fade-right">{t("third")} </h3>
        </div>
    </div>:
    <div data-aos="fade-left" className=' gap-4 flex justify-center items-center  '>
      <div className='bg-gradient-to-b p-5 from-b to-black  '>
      <h3 data-aos="fade-left"> {t("first")} </h3>
      <h3 data-aos="fade-left"> {t("second")} </h3>
      <h3 data-aos="fade-left">{t("third")} </h3>
      </div>
      <div className='bg-gradient-to-b p-5 from-b to-black '>
      <h3 data-aos="fade-left"> {t("first")} </h3>
      <h3 data-aos="fade-left"> {t("second")} </h3>
      <h3 data-aos="fade-left">{t("third")} </h3>
      </div>
   
    </div>
    } 
     {/* {
      lng==="en"?    <div data-aos="fade-right" className=' bg-gradient-to-b p-10 from-b to-black absolute top-60 left-20 overflow-hidden'>
      <h3 data-aos="fade-right"> {t("first")} </h3>
      <h3 data-aos="fade-right"> {t("second")} </h3>
      <h3 data-aos="fade-right">{t("third")} </h3>
    </div>:    <div className='absolute top-20 right-20 overflow-hidden'>
      <h3 data-aos="fade-left"> {t("first")} </h3>
      <h3 data-aos="fade-left"> {t("second")} </h3>
      <h3 data-aos="fade-left">{t("third")} </h3>
    </div>
    }  */}
  </div>
  <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10'
  // className='w-[100%] h-[300px] flex justify-center items-center mt-10'
  >
  <SendEmailForm></SendEmailForm>

<div>
  <h3>{t("first")}</h3>
  <h3>{t("first")}</h3>
  <h3>{t("first")}</h3>
  <h3>{t("first")}</h3>
</div>
  </div>

</>
  )
}