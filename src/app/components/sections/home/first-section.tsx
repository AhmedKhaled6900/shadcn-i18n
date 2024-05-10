"use client"


'use client'
import  {useTranslation}  from '@/app/i18n/client'
import { FirstSectionComponent } from './first-section-component'
interface props {
  lng: string
}
export const FirstSection = ({ lng } : props) => {
  const  { t}  = useTranslation(lng, 'first-section')
  
  return (
    <div>
  <FirstSectionComponent lng={lng} t={t}  ></FirstSectionComponent>
    </div>
  )
}