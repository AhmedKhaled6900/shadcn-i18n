
'use client'
// import  NavbarComponent  from './nav'
// import { FooterBase } from './FooterBase'
import  {useTranslation}  from '../../i18n/client'
import  { SelectDemo } from '../lang-switcher'
interface props {
  lng: string,
  t : any
}
export const Langswtitch = ({ lng  } : props) => {
  const  { t }  = useTranslation( lng ,"lang")
  return <SelectDemo t={t} lng={lng} />
}
