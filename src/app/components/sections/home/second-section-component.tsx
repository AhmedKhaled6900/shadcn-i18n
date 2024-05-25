
"use client"
import Image from "next/image"
interface props {
    lng: string
    t: any
}
import img from "../../../../../public/i-need-background-img-for-my-website-and-i-want-t.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { t } from 'i18next'
import { useEffect } from "react";
export const SecondSectionComponent = ({ t, lng }: props) => {
    useEffect(() => {
        AOS.init({
            // AOS options (optional)
        });
    }, [])
    return (

        <>
            <div className=' justify-center text-start items-center grid grid-cols-1 lg:grid-cols-2 '>
                {lng === "en" ?
                    <div className=' h-full pt-0 lg:pt-10 bg-gradient-to-b from-b to-black lg:rounded-br-[150px] lg:rounded-tr-[150px]'>
                        <h1 data-aos="fade-up" data-aos-duration="2000"
                            className='m-5  lg:m-10 font-semibold text-xl'>
                            {t('heading')}
                        </h1>
                        <h1
                            data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800"
                            className=' m-5 lg:m-10 font-semibold text-xl'>
                            {t('heading1')}

                        </h1>
                        <h1
                            data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800"
                            className=' m-5 lg:m-10 font-semibold text-xl'>
                            {t('heading2')}

                        </h1>
                        <h1
                            data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800"
                            className=' m-5 lg:m-10 font-semibold text-xl'>
                            {t('heading2')}

                        </h1>
                        <h1
                            data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800"
                            className=' m-5 lg:m-10 font-semibold text-xl'>
                            {t('heading2')}

                        </h1>
                        <h1
                            data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800"
                            className=' m-5 lg:m-10 font-semibold text-xl'>
                            {t('heading2')}

                        </h1>
                        {/* <h3>{t("heading")}</h3> */}
                    </div> : <div className=' h-full pt-0 lg:pt-10 bg-gradient-to-b   from-b to-black lg:rounded-tl-[150px] lg:rounded-bl-[150px] '>
                        <h3 data-aos="fade-up" data-aos-duration="1000" style={{ lineHeight: "1.3" }} className='m-5 lg:m-10  text-xl'> {t('heading')}</h3>
                        <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800"
                            style={{ lineHeight: "1.3" }} className='m-5 lg:m-10  text-xl'> {t('heading1')}

                        </h3>
                        <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800"
                            style={{ lineHeight: "1.3" }} className='m-5 lg:m-10 text-xl'> {t('heading2')}

                        </h3>
                    </div>}
                {
                    lng === "en" ? <div className='   '>
                        <Image className='lg:rounded-tl-[150px] lg:rounded-bl-[150px] w-[100%] h-[100%] '   alt='' src={img} />
                    </div> : <div className='  '>
                        <Image className='lg:rounded-tr-[150px] lg:rounded-br-[150px] w-[100%] h-[100%] '  alt='' src={img} />
                    </div>
                }
            </div>
        </>
    )
}












