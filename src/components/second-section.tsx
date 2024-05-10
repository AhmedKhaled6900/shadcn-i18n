"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image"
import img2 from  "../../public/65ffd374-9c9f-486a-80af-d8333371817d-removebg.png"
import { useEffect } from 'react';
// import 'animate.css';

const SecondSection =()=>{
    useEffect(() => {
        AOS.init({
          // AOS options (optional)
        });
      }, [])
    return (
        <div className=  'w-full h-full mt-10 relative w-full h-full grid grid-cols-1' data-aos="fade-up" data-aos-duration="1000" >
        <Image layout='fill' src={img2} alt=''/>
          </div>
    )

}
export default SecondSection