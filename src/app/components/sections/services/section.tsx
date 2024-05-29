import Container from "../../container"
import img from "../../../../../public/05076a5e-5142-4626-bf73-b2ed0d28ebc9.jpeg"
import img2 from "../../../../../public/nvnn1v19miftcw8krm1qfull.png"
import Image from "next/image"
export const ServicesSections = () => {


    return (
<>
<Container>

        <div className="grid grid-cols-1 lg:grid-cols-2  mt-10 bg-gradient-to-b from-b to-black">

            <div className=" w-full h-full">
              <Image className=" w-full h-full" src={img}   alt="image"/>

            </div>
            <div className="bg-gradient-to-b from-b to-black">
          <h3 className="m-5 lg:m-10 text-center  font-semibold text-xl">
            UX / Ui 
          </h3>
          <h5 className="m-5 lg:m-10  text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
          <h5 className="m-5 lg:m-10  text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
          <h5 className="m-5 lg:m-10  text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
          <h5 className="m-5 lg:m-10  text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
          <h5 className="m-5 lg:m-10  text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
          <h5 className="m-5 lg:m-10  text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
            </div>


            <div className="bg-gradient-to-b from-b to-black">

            <div className="">
            another text 
            </div>
            <div className="">
            another text 
            </div>
            <div className="">
            another text 
            </div>
            <div className="">
            another text 
            </div>
            <div className="">
            another text 
            </div>
            <div className="">
            another text 
            </div>
            </div>

            <div >
              <Image className=" w-full h-full"  src={img2}  alt="image"/>
            </div>
        </div>
        </Container>

</>

    )
}