import Autoplay from "embla-carousel-autoplay"
// import AutoScroll from "embla-carousel-autoplay"

import AutoScroll from "embla-carousel-auto-scroll"

import Container from "@/app/components/container"
import img from "../../../../public/a216a26a-8110-45f8-8362-4b4530777e79.svg"
// import img from "../../../../public/65ffd374-9c9f-486a-80af-d8333371817d-removebg.png"
import img1 from "../../../../public/65ffd374-9c9f-486a-80af-d8333371817d-removebg.png"
import img2 from "../../../../public/fca5f2db-8779-4a2d-a783-7e76c9c32df9.jpeg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import Image from "next/image"
interface props {
    lng: string
    t: any
}
export function CarouselSize( { t, lng } : props) {
    const carouselItems =[
        { img: img,
        heading: t("header"),
        description: t("titlee")},
        { img: img1,
            heading: t("header"),
            description: t("titlee")},
        { img: img2,
            heading: t("header"),
            description: t("titlee")}
]
  return (
    <> 
    <div className=" rounded-2xl">
     <Container >
    <div className= " mt-10   ">
    <Carousel dir="ltr"
    
      plugins={[ 
    
     Autoplay({
     //   delay:500,
     }),
    //  AutoScroll({ speed: 2 , loop : true}),
     
 ]}
    className="rounded-2xl overflow-hidden">
<CarouselContent>
 {
     carouselItems.map((item)=>(
         <CarouselItem className="bg-gradient-to-b from-b to-black flex justify-between items-center  p-5 ">
         <div className=" grid grid-cols-3 ">
          <div className="col-span-2">
          <h3 className=" text-start p-5 text-xl font-semibold">
            {item.heading}
          </h3>
          <h6 className="text-start p-5 ">
            {item.description}</h6>
         </div>
         </div>
         <div className=" p-10" >
         <Image src={item.img} alt="" width={200} height={200} ></Image>
         </div>
        </CarouselItem>
     ))
 }
</CarouselContent>
{/* <CarouselPrevious className="left-0"/>
<CarouselNext className="right-0" /> */}
</Carousel> 
   </div> 
     </Container>
     </div> 

     </>
    // <Carousel
    // plugins={[
    //     // playOnInit({ autoplay: false }),
    //     // Autoplay({
    //     // //   delay:500,
    //     // }),
    //     AutoScroll({ speed: 2 , loop : true
    //         , continuous: true 
    //       }  ),
    //   ]}
    //   opts={{
    //     align: "start",
    //   }}
    //   className="w-full max-w-sm"
    // >
    //   <CarouselContent>
    //     {Array.from({ length: 5 }).map((_, index) => (
    //       <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
    //         <div className="p-1">
    //           <Card>
    //             <CardContent className="flex aspect-square items-center justify-center p-6">
    //               <span className="text-3xl font-semibold">{index + 1}</span>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>
  )
}
