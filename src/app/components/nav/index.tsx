import { useTranslation } from '@/app/i18n'
import NavbarComponent from './nav'
interface props {
  lng: string
}
export const Footer = async ({ lng } : props) => {
  const { t } = await useTranslation(lng, 'navbar')
  return < NavbarComponent t={t} lng={lng} />
}