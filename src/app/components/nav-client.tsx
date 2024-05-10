'use client'

import { useTranslation } from '../i18n'
// import { FooterBase } from './FooterBase'
// import { useTranslation } from '../../../i18n/client'


import NavbarComponent from './nav/nav'
interface props{
    lng: string
}
export const NavClient = ({ lng }: props) => {
  const  t = useTranslation(lng ,"navbar")
  return <NavbarComponent t={t} lng={lng} />
}