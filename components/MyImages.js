import Image from "next/image";
import { getImageUrl } from './utils.js';

export default function MyImage(img) {

  const {src} = img;
  console.log(props.src)
  return (
    <div className="absolute -top-20 -z-10 w-100 min-h-screen bg-gray-50 ">
      <img src={getImageUrl(img)} alt="Picture of the author" />
    </div>
  );
}
