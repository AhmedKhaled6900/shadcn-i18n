
"use client"

import { cn } from "@/lib/utils";
import React from "react";
import logo from "../../../../public/feather-7977327_640.webp"
import {Navbar,
   NavbarBrand,
    NavbarMenuToggle,
     NavbarMenuItem,
      NavbarMenu,
       NavbarContent,
        NavbarItem} from "@nextui-org/navbar";
import Link from "next/link";
import Image from "next/image";
import Container from "../container";
import { usePathname,useRouter } from "next/navigation";
import {  } from "next/router";
import { Button } from "@/components/ui/button";
export default function NavbarComponent ({ t, lng }: any) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
const patheName= usePathname()
// console.log(patheName[0][1])
const router = useRouter()
const s=patheName.slice(3)
console.log(s)
const onClick=()=>{
  if(patheName.startsWith("/en"))
   router.replace(`/ar${s}`)
  if(patheName.startsWith("/ar"))
   router.replace(`/en${s}`)
}

// if(patheName.startsWith("/ar")){
// router.replace(`/en`)
// }

 const menuItems = [
{
  name: t("Home"),
  link: "home",
  href: `/${lng}`,
},
{
  name: t("Services"),
  link: "services",
  href: `/${lng}/services`,
},
{
  name: t("About"),
  link: "about",
  href: `/${lng}/about`,
}  
  ];
  return (
    <>
    <nav className="  relative z-50 py-4 z-10 justify-between flex bg-gradient-to-b w-full from-b to-black items-center "
>
{/* <div>
<Image src={logo} alt="logo" width={35} height={35}/>
</div> */}
{/* <div className="backdrop-blur-lg bg-white" > */}
<div>
{menuItems.map((route) => (
  <Link
    key={route.href}
    href={route.href}
    className={cn(
      ' pb-5 lg:p-5 font-medium text-lg m-2 transition-colors text-white hover:border-b-2 hover:border-white',
      // route.link ? 'text-black dark:text-white' : 'text-muted-foreground'
    )}
  >
    { t(route.name)}
</Link>
))}
</div>
<div className="texl-2xl font-medium ">
<Button  onClick={onClick}  >
  {patheName==="/ar" ? t("lang") : t("lang")}
</Button>
</div>

{/* <Link href={} ></Link> */}
</nav>
  </>
  );
}
