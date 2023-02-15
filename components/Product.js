import Image from "next/image";
import avacado from "/images/Avacado.webp";

export default function Product(props) {
  console.log(props.src);
  return (
    <div>
      <div className="imageContainer">
        <Image src={props.src} width={1000} height={100} />
      </div>
      <div className="name">
        <h1>{props.name}</h1>
      </div>
      <div className="country">
        <p>{props.country}</p>
      </div>
    </div>
  );
}
