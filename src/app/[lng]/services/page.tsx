import Container from "@/app/components/container"
import img from "../../../../public/9ce1e81706022ba81b7207446e16da1f.jpg"
import img1 from "../../../../public/65ffd374-9c9f-486a-80af-d8333371817d-removebg.png"
import img2 from "../../../../public/connection-teamwork-cohesion-concept-jigsaw-puzzle-pieces-disassemble-different-color-purple-background-collaboration-business-finance-development-3d-render-illustration_598821-664.avif"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image"
  
interface ServicesPageprops {
    params: {
      lng: string
    }}
export default function ServicesPage({ params: { lng } } : ServicesPageprops) {
    return (
        <> 
        <div className="h-[100vh]">

        <Container>
        <div className= "top-0 flex justify-center items-center  ">
      <Carousel>
  <CarouselContent>
    <CarouselItem className="bg-gradient-to-b from-b to-black flex justify-center items-center p-5">
       <div className=" grid grid-cols-2 gap-4"><div>
        <h3 className=" text-center p-5 text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <h6 className="text-center p-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam!
        </h6>
       </div>
       <div className="flex justify-end items-end p-10" >
       <Image src={img} alt="" width={150} height={100} ></Image>

       </div>

       </div>
      
      </CarouselItem>
    <CarouselItem className="bg-gradient-to-b from-b to-black flex justify-center items-center p-5">
       <div className=" grid grid-cols-2 gap-4"><div>
        <h3 className=" text-center p-5 text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <h6 className="text-center p-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam!
        </h6>
       </div>
       <div className="flex justify-end items-end p-10" >
       <Image src={img1} alt="" width={150} height={100} ></Image>

       </div>

       </div>
      
      </CarouselItem>
    <CarouselItem className="bg-gradient-to-b from-b to-black flex justify-center items-center p-5">
       <div className=" grid grid-cols-2 gap-4"><div>
        <h3 className=" text-center p-5 text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <h6 className="text-center p-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam!
        </h6>
       </div>
       <div className="flex justify-end items-end p-10" >
       <Image src={img} alt="" width={150} height={100} ></Image>

       </div>

       </div>
      
      </CarouselItem>

  </CarouselContent>
  <CarouselPrevious className="left-0"/>
  <CarouselNext className="right-0" />
</Carousel>

        </div>
        </Container>
        </div>

        </>

    )
}