
'use client'
import  {useTranslation}  from '../../i18n/client'
import { FooterComponent } from './footer'
interface props {
  lng: string
}
export const Footer = ({ lng } : props) => {
  const  { t}  = useTranslation(lng,`navbar`)
  return <FooterComponent t ={t} lng={lng} />
}
