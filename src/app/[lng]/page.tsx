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
interface RootLayoutProps {
  params: {
    lng: string
  }
}
export default async function Page({ params: { lng } } : RootLayoutProps) {
// const {t} = await useTranslation(lng ,"translation")
const {t} = await useTranslation(lng ,"third-page")
  return (
  
  <>
 {/* <div className=' mt-10 h-[100%] w-[100%] justify-center text-center items-center grid grid-cols-1 lg:grid-cols-2 '>   
  {lng==="en"?
  <div className=' pt-0 lg:pt-10 bg-gradient-to-b w-full h-full from-b to-black lg:rounded-br-[150px]  lg:rounded-tr-[150px] ] '>
  <h1 className='m-10 lg:m-10 font-semibold text-5xl'> {t('title')}</h1>
  </div>:<div className=' pt-0 lg:pt-10 bg-gradient-to-b w-full h-full from-b to-black lg:rounded-tl-[150px] lg:rounded-bl-[150px] '>
  <h1 className='m-10 lg:m-10 font-semibold text-5xl'> {t('title')}</h1>
  </div> }
  {
  lng==="en" ?<div className=' relative w-full h-[100vh] '>
  <Image className='lg:rounded-tl-[150px] lg:rounded-bl-[150px]' layout="fill" alt=''src={img}/>
     </div>: <div className=' relative w-full h-[100vh] '>
<Image className='lg:rounded-tr-[150px] lg:rounded-br-[150px]' layout="fill" alt=''src={img}/>
   </div>
  }
  </div> */}
  
  <FirstSection lng={lng} ></FirstSection>


  <Separator/>


  <SecondSection lng={lng}></SecondSection>

 
  <div className='w-full h-[500px] relative ' style={{backgroundImage:`${bg}`}}>
    <div>
    <Image src={bg} alt='' fill/>
    </div>
    {
      lng==="en"?    <div data-aos="fade-right" className=' bg-gradient-to-b p-10 from-b to-black absolute top-20 left-20 overflow-hidden'>
      <h3 data-aos="fade-right"> {t("first")} </h3>
      <h3 data-aos="fade-right"> {t("second")} </h3>
      <h3 data-aos="fade-right">{t("third")} </h3>
    </div>:    <div className='absolute top-20 right-20 overflow-hidden'>
      <h3 data-aos="fade-left"> {t("first")} </h3>
      <h3 data-aos="fade-left"> {t("second")} </h3>
      <h3 data-aos="fade-left">{t("third")} </h3>
    </div>
    }
    {
      lng==="en"?    <div data-aos="fade-right" className=' bg-gradient-to-b p-10 from-b to-black absolute top-60 left-20 overflow-hidden'>
      <h3 data-aos="fade-right"> {t("first")} </h3>
      <h3 data-aos="fade-right"> {t("second")} </h3>
      <h3 data-aos="fade-right">{t("third")} </h3>
    </div>:    <div className='absolute top-20 right-20 overflow-hidden'>
      <h3 data-aos="fade-left"> {t("first")} </h3>
      <h3 data-aos="fade-left"> {t("second")} </h3>
      <h3 data-aos="fade-left">{t("third")} </h3>
    </div>
    }


  </div>
</>
  )
}