import Image from "next/image"
import img from "../../../../public/wired-outline-981-consultation.gif"
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";




export const FooterComponent =({ t, lng }: any)=>{
  const rrr =[
    {
      icon: <FaFacebookF className="h-[30px] w-[30px]" />,
      url: "https://www.facebook.com/",
    },{
      icon: <FaGithub className="h-[30px] w-[30px]"/>,
      url: "https://github.com/",
    },
    {
      icon: <FaWhatsapp className="h-[30px] w-[30px]"/>,
      url: "https://wa.me/",
    },
    {
      icon: <IoLogoLinkedin className="h-[30px] w-[30px]"/>,
      url: "https://www.linkedin.com/",
    }

]
    return(<>
        <div className="flex flex-col items-center justify-center text-center p-5">
    
            <h3 className="text-xl">
                another text <br />
                another text
            </h3>


            <Image alt = "" src={img} width={50} height={50}/>
        </div>
        <div className="flex flex-col gap-3 h-[400px] bg-gradient-to-b  from-b to-black">
        <div className="p-5  bg-gradient-to-b flex gap-10 from-b to-black">
          {
            rrr.map((item,index)=><Link href={item.url} key={index}>
            <div className=" bg-gradient-to-b  from-b to-black h-[40px] w-[40px] flex justify-center items-center rounded-full" >
              {item.icon}
            </div>
            </Link>)
          }
      {/* <div>
      <FaFacebookF className="h-[30px] w-[30px]" />
        </div>   */}
      {/* <div className=" bg-gradient-to-b  from-b to-black h-[40px] w-[40px] flex justify-center items-center rounded-full" > 
       <FaGithub className="h-[30px] w-[30px] "/></div> */}
      {/* <div>  <FaWhatsapp className="h-[25px] w-[25px]"/></div>
      <div>  <IoLogoLinkedin className="h-[30px] w-[30px]"/></div> */}
        
        </div>
        <div className="p-5  bg-gradient-to-b  from-b to-black">
          <h3> Lorem, ipsum. ispum.lorem</h3>
        </div>
        <div className="p-5  bg-gradient-to-b  from-b to-black">
          <h3> Lorem, ipsum. ispum.lorem</h3>
        </div>
        <div className="p-5  bg-gradient-to-b  from-b to-black">
          <h3> Lorem, ipsum. ispum.lorem</h3>
        </div>
       
        </div>

        </>
    )
}