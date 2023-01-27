import Image from "next/image";

export default function MyImage() {
  return (
    <div className="absolute top-0 z-20 h-100 w-10 bg-gray-50 ">
      <img src="/fruitsBg.webp" alt="Picture of the author" className="absolute z-50" />
    </div>
  );
}
