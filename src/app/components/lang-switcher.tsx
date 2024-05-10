
// import React from "react";


//  const LangSwitcher = ({t, lng}: props)  => {
//   const router = useRouter()

// console.log(t)


// // console.log(lng)
// console.log(languages)
// console.log(router)

// return (
//   <div className="w-36">

//     <Select
//       isRequired
//       // label="language"
//       placeholder={ t(lng)  }
//       defaultSelectedKeys={[lng]}
//       className="max-w-xs w-full  "
      
//     >
//       {languages.map((language) => (
        
//         <SelectItem  key={language}  value={language}  onClick={()=> {router.replace(`/${language}`)}} >
//           {t(language) }
//         </SelectItem>
//       ))}
//     </Select>
//   </div>                                                                                                                    

//   )}

// export default LangSwitcher

 "use client"
import { languages } from "../i18n/settings";
import { redirect, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface props {
  t : any
  lng : string
  }
export function SelectDemo({ t, lng } : props) {
  const router =useRouter()
  console.log(t)
  console.log(languages)
  console.log(lng)
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t(lng)} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        {/* <SelectLabel>Fruits</SelectLabel> */}
          {
            languages.map((language) => (
              <SelectItem onClick={()=>{router.push(`/${language}`)}} key={language} value={language} >
             
                  {t(language)}

              </SelectItem>
            ))

          }
          {/* <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


