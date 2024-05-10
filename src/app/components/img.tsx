// import Image from "next/image";
// import { Image } from '@nextui-org/react';
import Image from 'next/image';
import bgImage from '../../../public/44db938c4d86a7ea3ae51a511304a117.gif';

export default function AppBgImg() {
  return <Image
  alt = ""
    src={bgImage}
    // placeholder="blur"
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
      zIndex: -1
    }}
  />
}