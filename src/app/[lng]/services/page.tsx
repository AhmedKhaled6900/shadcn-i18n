
"use client"
import Autoplay from "embla-carousel-autoplay"
// import AutoScroll from "embla-carousel-autoplay"

import AutoScroll from "embla-carousel-auto-scroll"

import Container from "@/app/components/container"
import img from "../../../../public/9ce1e81706022ba81b7207446e16da1f.jpg"
import img1 from "../../../../public/65ffd374-9c9f-486a-80af-d8333371817d-removebg.png"
import img2 from "../../../../public/fca5f2db-8779-4a2d-a783-7e76c9c32df9.jpeg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import Image from "next/image"
import { useRef, useEffect, useState } from 'react';
import { CarouselSize } from "@/app/components/slider/slider"
import { useTranslation } from "@/app/i18n"
import { Slider } from "@/app/components/slider/sliderClient"
import { ServicesSections } from "@/app/components/sections/services/section"

interface ServicesPageprops {
    params: {
      lng: string
    }}
export default function ServicesPage({ params: { lng } } : ServicesPageprops) {
    const carouselItems =[
        { img: img,
        heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam!"},
        { img: img1,
        heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam!"},
        { img: img2,
        heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam!"},
            
    
]
// const t = useTranslation(lng,`services`)
    return (
        <> 
      

        <Slider lng={lng}></Slider>
    
<ServicesSections>

</ServicesSections>
        </>
    )
}