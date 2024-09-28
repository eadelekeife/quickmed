import Image from "next/image";

import Logo from "@/assets/images/logo.svg";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <nav className="flex w-full justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="logo" width={0} height={0} style={{ width: "50px", height: "50px" }} />
          <h3 className="font-[600] text-xl">QuickMed</h3>
        </div>
        <div>
          <ul className="flex items-center gap-8">
            <li>
              <Link className="text-base font-[500]" href="">Home</Link>
            </li>
            <li>
              <Link className="text-base font-[500]" href="">Features</Link>
            </li>
            <li>
              <Link className="text-base font-[500]" href="">How It Works</Link>
            </li>
            <li>
              <Link className="text-base font-[500]" href="">Pricing</Link>
            </li>
            <li>
              <Link className="text-base font-[500]" href="">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-8">
            <li>
              <Link className="text-base font-[500]" href="">Log In</Link>
            </li>
            <li>
              <Link className="text-base font-[500] py-4 px-10 block main-bg text-white rounded-full" href="">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
