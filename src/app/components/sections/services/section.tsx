import Container from "../../container"
import img from "../../../../../public/05076a5e-5142-4626-bf73-b2ed0d28ebc9.jpeg"
import Image from "next/image"
export const ServicesSections = () => {


    return (
<>
<Container>

        <div className="grid grid-cols-1 lg:grid-cols-2  mt-10 bg-gradient-to-b from-b to-black">

            <div>
              <Image src={img} alt="image"/>

            </div>
            <div className="bg-gradient-to-b from-b to-black">
          <h3>
            UX / Ui 
          </h3>
          <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
            </div>
            <div className="bg-gradient-to-b from-b to-black">
            another text 
            </div>
            <div>
              <Image src={img} alt="image"/>
            </div>
        </div>
        </Container>

</>

    )
}