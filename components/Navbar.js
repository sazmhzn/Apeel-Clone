import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-100">
      <nav className=" mx-16 px-8 py-6 rounded-b-xl bg-offWhite flex justify-between items-center font-bold text-my-green text-xs">
        <ul className="flex gap-12">
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

        <ul className="flex gap-12">
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
