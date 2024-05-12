
'use client'
import  NavbarComponent  from './nav'
// import { FooterBase } from './FooterBase'
import  {useTranslation}  from '../../i18n/client'
interface props {
  lng: string
}
export const Header = ({ lng } : props) => {
  const  { t}  = useTranslation(lng, 'navbar', 'footer')
  return <NavbarComponent t={t} lng={lng} />
}
