import Image from "next/image"
import img from "../../../../public/wired-outline-981-consultation.gif"
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { GiCharacter } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

import Link from "next/link";




export const FooterComponent =({ t, lng }: any)=>{
  const social =[
    {
      icon: <FaFacebookF className="h-[30px] w-[30px] " />,
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

    },
    {
      icon: <FiTwitter className="h-[30px] w-[30px]"/>,
      url: "https://www.twitter.com/",
    }]
    const contact = [{
      icon: < GiCharacter className="h-[20px] w-[20px] "/>,
      info : t("name"),
    }
    ,{
icon: <  FaPhoneAlt className="h-[20px] w-[20px] "/>,
info : t("phone"),

    }
    ,{
      icon: < BsEnvelope className="h-[20px] w-[20px] "/>,
      info : t("mail"),
    }
    ,{
      icon: < IoLocationOutline className="h-[20px] w-[20px] "/>,
      info : t("country"),
    }
  ]
    return(<>
        <div className="flex flex-col items-center justify-center text-center p-5">
            <h3 className="text-xl">
                {t("contact")} <br />
                {t("avaliable")}
            </h3>
            <Image alt = "" src={img} width={50} height={50}/>
        </div>

        <div className="p-5  flex flex-col gap-3 h-[411px] bg-gradient-to-b  from-b to-black rounded-2xl">
        <div className="p-5  bg-gradient-to-b flex gap-5 lg:gap-10  justify-center hover:bg-black items-center from-b to-black">
          {
            social.map((item,index)=><Link href={item.url} key={index}>
            <div className=" bg-gradient-to-b  from-b to-black h-[40px] w-[40px]  flex justify-center items-center rounded-full" >
              {item.icon}
            </div>
            </Link>)
          }
        </div>

        <div className="p-5 gap-4 h-full  bg-gradient-to-b  flex-col flex justify-center items-start  from-b to-black">

<div className="flex flex-col gap-5 justify-center items-start h-[100%]  from-b to-black"> 
{contact.map((item)=>
<>
<div className=" flex justify-between gap-5 ">
{item.icon}
  {item.info}
</div>
  </>
)}
</div>

       </div>
       {/* <div className="  bg-gradient-to-b flex  from-b to-black p-5 " >
<h3 className="text-lg">
  made by {t("name")}
</h3>
</div> */}
        </div>
        </>
    )
}