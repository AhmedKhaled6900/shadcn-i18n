import Link from 'next/link'
import { useTranslation } from '../i18n'
import img from  "../../../public/fca5f2db-8779-4a2d-a783-7e76c9c32df9.jpeg"
import AppBgImg from '../components/img'
import Container from '../components/container'
import Image from 'next/image'
import SecondSection from '@/components/second-section'
import { FirstSection } from '../components/sections/home/first-section'
interface RootLayoutProps {
  params: {
    lng: string
  }
}
export default async function Page({ params: { lng } } : RootLayoutProps) {
const {t} = await useTranslation(lng ,"translation")
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
  <SecondSection></SecondSection>
</>
  )
}