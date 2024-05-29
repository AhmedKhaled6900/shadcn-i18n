
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
import { Button } from "@/components/ui/button"
export const FirstSectionComponent = ({ t, lng }: props) => {
    useEffect(() => {
        AOS.init({
            // AOS options (optional)
        });
    }, [])
    return (

        <>
            <div className='justify-center text-start grid grid-cols-1 lg:grid-cols-2 '>
                {lng === "en" ?
                    <div  className=' flex justify-center flex-col h-full bg-gradient-to-b from-b to-black lg:rounded-br-[150px] lg:rounded-tr-[150px]'>
                        <h3 style={{ lineHeight: "1.3" }}
                         data-aos="fade-up"  data-aos-duration="1000" 
                            className=' m-5 font-semibold text-xl'>
                            {t('heading')}
                        </h3>
                        <h3 style={{ lineHeight: "1.3" }}
                            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800"
                            className='m-5  font-semibold text-xl'>
                            {t('heading1')}
                        </h3>
                        <h3 style={{ lineHeight: "1.3" }}
                            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"
                            className=' m-5 font-semibold text-xl'>
                            {t('heading2')}
                        </h3>
                        <div className="flex justify-center">
                        <Button variant="outline" size="lg" className="m-5 text-black hover:border-black font-semibold bg-[#c297dc]" >
                            Get in touch
                        </Button>
                        </div>
                    </div> :
                     <div className='flex justify-center flex-col  h-full bg-gradient-to-b from-b to-black lg:rounded-tl-[150px] lg:rounded-bl-[150px] '>
                        <h3 data-aos="fade-up" data-aos-duration="1000" 
                        style={{ lineHeight: "1.3" }}
                         className='m-5 font-semibold text-xl'> {t('heading')}</h3>
                        <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800"
                            style={{ lineHeight: "1.3" }} className='m-5 font-semibold text-xl'> {t('heading1')}

                        </h3>
                        <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800"
                            style={{ lineHeight: "1.3" }}
                             className='m-5 font-semibold text-xl'> {t('heading2')}

                        </h3>
                        <div className="flex justify-center">
                        <Button variant="outline" size="lg" className="m-5 text-black hover:border-black font-semibold bg-[#c297dc]" >
                            Get in touch
                        </Button>
                        </div>
                    </div>}


                {
                    lng === "en" ? <div className=''>
                        <Image className='lg:rounded-tl-[150px] lg:rounded-bl-[150px] w-[100%]  '     alt='' src={img} />
                    </div> : <div className=' relative w-[100%] h-[100%] '>
                        <Image className='lg:rounded-tr-[150px] lg:rounded-br-[150px] w-[100%]'   alt='' src={img} />
                    </div>
                }
            </div>
        </>
    )
}












