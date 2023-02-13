import Link from "next/link";
import Image from "next/image";
import logo from "images/svg/svgexport-1.svg"

export default function Navbar() {
  return (
    <div className="w-100">
      <nav className=" mx-16 px-8 py-6 rounded-b-xl bg-offWhite flex justify-between items-center font-bold text-my-green text-xs">
        <ul className="lg:flex sm:hidden gap-12">
          <Link href={"/"}>
            <li>How Apeel Works</li>
          </Link>
          <Link href={"/"}>
            <li>Impact</li>
          </Link>
          <Link href={"/"}>
            <li>Retail</li>
          </Link>
        </ul>

        {/* <img src={Logo} alt="Your SVG" /> */}
        <Image src={logo}/>


        <ul className="lg:flex gap-12 sm:hidden">
          <Link href={"/"}>
            <li>Careers</li>
          </Link>
          <Link href={"/"}>
            <li>Products</li>
          </Link>
          <Link href={"/"}>
            <button>Find Apeel</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
