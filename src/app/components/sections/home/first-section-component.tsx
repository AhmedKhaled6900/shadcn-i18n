
"use client"
import Image from "next/image"
interface props {
    lng: string
    t: any
}
import img from "../../../../../public/fca5f2db-8779-4a2d-a783-7e76c9c32df9.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { t } from 'i18next'
import { useEffect } from "react";
export const FirstSectionComponent = ({ t, lng }: props) => {
    useEffect(() => {
        AOS.init({
            // AOS options (optional)
        });
    }, [])
    return (

        <>
            <div className='  mt-10 justify-center text-start items-center grid grid-cols-1 lg:grid-cols-2 '>
                {lng === "en" ?
                    <div className='  pt-0 lg:pt-20  h-full bg-gradient-to-b from-b to-black lg:rounded-br-[150px] lg:rounded-tr-[150px]'>
                        <h3 data-aos="fade-up" data-aos-duration="2000"
                            className=' p-5  font-semibold text-xl'>
                            {t('heading')}
                        </h3>
                        <h3
                            data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800"
                            className=' p-5 font-semibold text-xl'>
                            {t('heading1')}

                        </h3>
                        <h3
                            data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800"
                            className=' p-5 font-semibold text-xl'>
                            {t('heading2')}

                        </h3>
                        {/* <h3>{t("heading")}</h3> */}
                    </div> :
                     <div className='  pt-0 lg:pt-20  h-full  bg-gradient-to-b   from-b to-black lg:rounded-tl-[150px] lg:rounded-bl-[150px] '>
                        <h3 data-aos="fade-up" data-aos-duration="1000" style={{ lineHeight: "1.3" }} className='p-5 text-xl'> {t('heading')}</h3>
                        <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800"
                            style={{ lineHeight: "1.3" }} className='p-5 text-xl'> {t('heading1')}

                        </h3>
                        <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800"
                            style={{ lineHeight: "1.3" }} className='p-5 text-xl'> {t('heading2')}

                        </h3>
                    </div>}
                {
                    lng === "en" ? <div className=' relative   '>
                        <Image className='lg:rounded-tl-[150px] lg:rounded-bl-[150px] '  alt='' src={img} />
                    </div> : <div className=' relative '>
                        <Image className='lg:rounded-tr-[150px] lg:rounded-br-[150px] '  alt='' src={img} />
                    </div>
                }
            </div>
        </>
    )
}












