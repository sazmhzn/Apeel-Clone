import Image from "next/image";

export default function MyImage(props) {
  const url = {
    src: props.src,
  };
  console.log(url);
  return (
    <div className="absolute -top-20 -z-10 w-full min-h-full">
      <Image src={props.src}
        width={props.width}
        height={'100%'}
      alt="backgruond"
      sizes="(max-width: 768px) 70vw,
              (max-width: 1200px) 50vw,
              33vw" 
              />
    </div>
  );
}
