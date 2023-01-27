import Image from "next/image";

export default function MyImage() {
  return (
    <div className="absolute -top-20 -z-10 w-100 min-h-screen bg-gray-50 ">
      <img src="/fruitsBg.webp" alt="Picture of the author" />
    </div>
  );
}
