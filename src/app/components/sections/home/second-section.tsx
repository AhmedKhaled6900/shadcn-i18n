"use client"


'use client'
import  {useTranslation}  from '@/app/i18n/client'
import { SecondSectionComponent } from './second-section-component'
interface props {
  lng: string
}
export const SecondSection = ({ lng } : props) => {
  const  { t}  = useTranslation(lng, 'first-section')
  
  return (
    <div>
  <SecondSectionComponent lng={lng} t={t}  ></SecondSectionComponent>
    </div>
  )
}