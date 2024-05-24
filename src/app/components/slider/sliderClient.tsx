'use client'
import  {useTranslation}  from '../../i18n/client'

import { CarouselSize } from './slider'
interface props {
  lng: string
}
export const Slider = ({ lng } : props) => {
  const  { t}  = useTranslation(lng,`services`);
  return <CarouselSize t ={t} lng={lng}></CarouselSize> 
}