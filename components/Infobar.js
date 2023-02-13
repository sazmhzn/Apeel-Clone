import Image from "next/image";
import svg5 from "images/svg/svgexport-5.svg"
import MyImage from "@/components/MyImages"
import videoImage from "images/video-background.webp";

export default function Infobar() {
  return (
    <div className="relative z-20 mx-auto p-12 bg-banana text-my-green drop-shadow-lg sm:w-[90vw] lg:w-full min-h-screen rounded-3xl overflow-hidden">
      <Image className="absolute left-0 top-0 -z-10" src={svg5} width={'100%'} height={"100vh"} />
      <div className=" py-6 h-screen flex justify-between gap-10 z-10">
        <div className="flex-1 flex flex-col justify-between">
          <p className="w-36">It started with a simple question.</p>
          <h1 className="text-5xl w-100 font-extrabold">
            Why do some fruits <br /> and vegetables last longer than
            <br /> others?
          </h1>
        </div>
        <div className="relative flex-1 rounded-xl flex items-center justify-center overflow-hidden">
          <Image className="absolute -z-10 object-cover" fill src={videoImage} />
          <button className="bg-banana-400 px-8 py-3 rounded-full">
            watch
          </button>
        </div>
      </div>
    </div>
  );
}
