import Image from "next/image";

import Logo from "@/assets/images/logo.svg";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="flex w-full justify-between pr-60 mt-32">
                    <div className="">
                        <div className="flex gap-3 items-center">
                            <Image src={Logo} alt="logo" width={0} height={0} style={{ width: "50px", height: "50px" }} />
                            <h3 className="font-[600] text-xl">QuickMed</h3>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[#060A23] text-base font-[600] mb-5">Company</h4>
                        <ul className="flex flex-col gap-5">
                            <li>
                                <Link className="text-base font-[500]" href="">About</Link>
                            </li>
                            <li>
                                <Link className="text-base font-[500]" href="">Career</Link>
                            </li>
                            <li>
                                <Link className="text-base font-[500]" href="">How It Works</Link>
                            </li>
                            <li>
                                <Link className="text-base font-[500]" href="">Features</Link>
                            </li>
                            <li>
                                <Link className="text-base font-[500]" href="">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[#060A23] text-base font-[600] mb-5">Support</h4>
                        <ul className="flex flex-col gap-5">
                            <li>
                                <Link className="text-base font-[500]" href="">FAQ</Link>
                            </li>
                            <li>
                                <Link className="text-base font-[500]" href="">Contact Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between border-solid border-[#EAECF0] border-t py-14 mt-16">
                    <p>Quick Med. All right reserved. © 2024</p>
                    <div>
                        <div className="flex gap-6">
                            <FaXTwitter className="text-xl" />
                            <FaLinkedin className="text-xl" />
                            <FaFacebook className="text-xl" />
                            <FaInstagram className="text-xl" />
                            <FaYoutube className="text-xl" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
