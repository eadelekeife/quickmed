import Image from "next/image";

import Link from "next/link";
import PageLayout from "@/components/layouts/layout";

import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';


import { FaCheck } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

import HeroImg from "@/assets/images/hero.png";
import How_1 from "@/assets/images/how_1.svg";
import How_2 from "@/assets/images/how_2.png";
import How_3 from "@/assets/images/how_3.svg";
import How_4 from "@/assets/images/how_4.png";

import MedicalLeft from "@/assets/images/left.svg";
import MedicalRight from "@/assets/images/right.svg";

import Less_1 from "@/assets/images/less_1.svg";
import Less_2 from "@/assets/images/less_2.svg";
import Less_3 from "@/assets/images/less_3.svg";
import Less_4 from "@/assets/images/less_4.svg";

import Logo_1 from "@/assets/images/logo/logo_1.svg";
import Logo_2 from "@/assets/images/logo/logo_2.svg";
import Logo_3 from "@/assets/images/logo/logo_3.svg";
import Logo_4 from "@/assets/images/logo/logo_4.svg";
import Logo_5 from "@/assets/images/logo/logo_5.svg";
import Logo_6 from "@/assets/images/logo/logo_6.svg";

import FireImg from "@/assets/images/fire.png";

export default function Home() {

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'How do I enter patient information?',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'What if I don’t see a template that fits my needs?',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'Is my patient data secure?',
      children: <p>{text}</p>,
    },
    {
      key: '4',
      label: 'Can I make changes to the draft?',
      children: <p>{text}</p>,
    },
    {
      key: '5',
      label: 'How do I save the document to my EHR system?',
      children: <p>{text}</p>,
    },
  ];

  return (
    <div>
      <PageLayout>
        <div className="text-center mt-24">
          <div className="flex items-center justify-center gap-5 mb-8">
            <Image src={MedicalLeft} alt="medical icon on the left" width={0} height={0} style={{ width: "auto", height: "auto" }} />
            <h4 className="font-[500] text-lg">Trusted by leading healthcare providers</h4>
            <Image src={MedicalRight} alt="medical icon on the right" width={0} height={0} style={{ width: "auto", height: "auto" }} />
          </div>
          <h2 className="text-6xl font-[600] mb-4">Make clinical documentation easy</h2>
          <p className="w-[40%] mx-auto mb-10 leading-loose">Our easy-to-use clinical documentation tool helps you spend less time typing and more time with patients.</p>
          <div>
            <Link className="text-base font-[500] py-5 px-8 main-bg text-white rounded-full w-max mx-auto" href="">Book a Demo</Link>
          </div>
          <div>
            <Image src={HeroImg} alt="people in the hospital" className="mt-16" width={0} height={0} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-6 gap-20 mt-16">
            <Image src={Logo_1} alt="Odeaolabs" width={0} height={0} style={{ width: "auto", height: "auto" }} />
            <Image src={Logo_2} alt="Kintsugi" width={0} height={0} style={{ width: "auto", height: "auto" }} />
            <Image src={Logo_3} alt="Stacked lab" width={0} height={0} style={{ width: "auto", height: "auto" }} />
            <Image src={Logo_4} alt="magnolia" width={0} height={0} style={{ width: "auto", height: "auto" }} />
            <Image src={Logo_5} alt="warpspeed" width={0} height={0} style={{ width: "auto", height: "auto" }} />
            <Image src={Logo_6} alt="sisyphus" width={0} height={0} style={{ width: "auto", height: "auto" }} />
          </div>
        </div>
        <div className="w-[70%] mx-auto mt-36">
          <div className="text-center w-[55%] mx-auto">
            <h3 className="text-4xl font-[600] mb-4 leading-snug">Less time on paperwork, more time with patients</h3>
            <p>Discover the features that make clinical notes effortless</p>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-14">
            <div className="bg-[#F8F9FB] pt-8 px-8 rounded-[24px] overflow-hidden pb-5">
              <Image src={Less_1} alt="people in the hospital" width={0} height={0} style={{ width: "auto", height: "6rem" }} className="mb-5" />
              <h4 className="text-lg mb-3 font-[600]">Auto-Generate Notes</h4>
              <p className="text-sm">Create detailed clinical notes with just a few clicks. No more typing everything out manually.</p>
            </div>
            <div className="bg-[#F8F9FB] pt-8 px-8 rounded-[24px] overflow-hidden pb-5">
              <Image src={Less_2} alt="people in the hospital" width={0} height={0} style={{ width: "auto", height: "6rem" }} className="mb-5" />
              <h4 className="text-lg mb-3 font-[600]">Smart Templates</h4>
              <p className="text-sm">Pick from ready-to-use templates that fit your needs, making documentation a breeze.</p>
            </div>
            <div className="bg-[#F8F9FB] pt-8 px-8 rounded-[24px] overflow-hidden pb-5">
              <Image src={Less_3} alt="people in the hospital" width={0} height={0} style={{ width: "auto", height: "6rem" }} className="mb-5" />
              <h4 className="text-lg mb-3 font-[600]">Syncs with EHR</h4>
              <p className="text-sm">Connects with your electronic health records to pull in patient info automatically.</p>
            </div>
            <div className="bg-[#F8F9FB] pt-8 px-8 rounded-[24px] overflow-hidden pb-5">
              <Image src={Less_4} alt="people in the hospital" width={0} height={0} style={{ width: "auto", height: "6rem" }} className="mb-5" />
              <h4 className="text-lg mb-3 font-[600]">Voice to text</h4>
              <p className="text-sm">Dictate your notes and let our tool handle the typing.</p>
            </div>
          </div>
        </div>
        <div className="w-[70%] mx-auto mt-36">
          <div className="text-center w-[55%] mx-auto">
            <h3 className="text-4xl font-[600] mb-4 leading-snug">How It Works</h3>
            <p>Simple Steps to Create and Save Patient Documents in Minutes</p>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-14">
            <div className="bg-[#F8F9FB] pt-8 px-8 rounded-[30px] overflow-hidden">
              <h4 className="text-lg mb-3 font-[600]">Input Patient Data</h4>
              <p className="text-sm">Enter or import patient information into the system with ease</p>
              <Image src={How_1} alt="people in the hospital" width={0} height={0} style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="bg-[#F8F9FB] pt-8 px-8 rounded-[30px] overflow-hidden">
              <h4 className="text-lg mb-3 font-[600]">Select Template</h4>
              <p className="text-sm">Choose from a range of customizable templates.</p>
              <Image src={How_2} alt="people in the hospital" width={0} height={0} style={{ width: "80%", height: "auto" }} className="mx-auto mt-16" />
            </div>
            <div className="bg-[#F8F9FB] pt-8 px-8 rounded-[30px] overflow-hidden">
              <h4 className="text-lg mb-3 font-[600]">Review and Edit</h4>
              <p className="text-sm">The tool automatically generates a draft based on the input, which you can review and make adjustments to as necessary.</p>
              <Image src={How_3} alt="people in the hospital" width={0} height={0} style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="bg-[#F8F9FB] pt-8 px-8 rounded-[30px] overflow-hidden how-single">
              <h4 className="text-lg mb-3 font-[600]">Finalize and Save</h4>
              <p className="text-sm">Approve the final document and save it directly to your electronic health record system.</p>
              <Image src={How_4} alt="people in the hospital" width={0} height={0} style={{ width: "100%", height: "auto" }} />
              <div className="foot-action bg-[#F8F9FB] w-full flex items-center justify-center">
                <Link className="text-base font-[500] py-4 px-16 main-bg text-white rounded-full w-max" href="">Save</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center w-[55%] mx-auto mt-32">
            <h3 className="text-4xl font-[600] mb-4 leading-snug">Pricing</h3>
            <p>Find the right pricing option to suit your business or practice</p>
          </div>
          <div className="grid gap-8 grid-cols-3 mt-14">
            <div className="pricing-card">
              <div className="border-[#E0E2E6] border-solid border rounded-[32px] p-[32px]">
                <p className="text-lg font-[500] text-[#383540] mb-8">Basic</p>
                <h4 className="text-4xl mb-8 font-[500] text-[#383540]">Free</h4>
                <button className="py-4 w-full mb-8 font-[500] text-[#383540] bg-[#F2F2F2] rounded-full">Get Started</button>
                <div className="mt-4">
                  <ul>
                    <li>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> End-to-End Encryption</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> HIPAA Compliance</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> Email Support</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> 1,000 Patient Records</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#828B9C]"><FaX /> Priority Support</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#828B9C]"><FaX /> Advanced Analytics</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#828B9C]"><FaX /> 24/7 Dedicated Support</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#828B9C]"><FaX /> Custom Integrations</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing-card">
              <div className="border-primary border-solid border rounded-[32px] p-[32px]">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-lg font-[500] text-[#383540]">Professional</p>
                  <div>
                    <div className="border-primary border-solid border-2 bg-[#662FFF1A] px-5 py-1 rounded-full w-max flex items-center gap-2">
                      <h5 className="text-primary text-sm font-[500]">Most Popular</h5>
                      <Image src={FireImg} alt="burning fire" width={0} height={0} style={{ width: "auto", height: "1.6rem" }} />
                    </div>
                  </div>
                </div>
                <h4 className="text-4xl mb-8 font-[500] text-[#383540]">$299<small className="text-base">/month</small></h4>
                <button className="py-4 w-full mb-8 font-[500] text-white main-bg text-[#383540] bg-[#F2F2F2] rounded-full">Get Started</button>
                <div className="mt-4">
                  <ul>
                    <li>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> End-to-End Encryption</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> HIPAA Compliance</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> Email Support</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> 10,000 Patient Records</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> Priority Support</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> Advanced Analytics</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#828B9C]"><FaX /> 24/7 Dedicated Support</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#828B9C]"><FaX /> Custom Integrations</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing-card">
              <div className="border-[#E0E2E6] border-solid border rounded-[32px] p-[32px]">
                <p className="text-lg font-[500] text-[#383540] mb-8">Enterprise</p>
                <h4 className="text-4xl mb-8 font-[500] text-[#383540]">Custom</h4>
                <button className="py-4 w-full mb-8 font-[500] text-[#383540] bg-[#F2F2F2] rounded-full">Get Started</button>
                <div className="mt-4">
                  <ul>
                    <li>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> End-to-End Encryption</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> HIPAA Compliance</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> Email Support</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> Unlimited Patient Records</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> Priority Support</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> Advanced Analytics</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> 24/7 Dedicated Support</p>
                      <p className="flex items-center gap-4 mb-2 font-[500] leading-loose text-[#383540]"><FaCheck className="text-primary" /> Custom Integrations</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] mx-auto mt-36">
          <div className="text-center w-[80%] mx-auto">
            <h3 className="text-4xl font-[600] mb-4 leading-snug">Got Questions? We&apos;ve Got Answers!</h3>
            <p>Get the Information you need to use our tool.</p>
          </div>
          <div className="mt-14">
            <Collapse items={items} defaultActiveKey={['1']} ghost expandIconPosition="right" />
          </div>
        </div>
        <div className="final mt-28 py-20 rounded-[32px]">
          <div className="text-center">
            <h3 className="text-white font-[600] text-5xl w-[40%] mx-auto leading-normal mb-5">Ready to Secure Your Patient Data?</h3>
            <p className="text-[#828B9C] text-lg mb-8">Start your 30-day free trial today. No credit card required.</p>
            <Link className="text-base font-[500] py-4 px-8 block main-bg text-white rounded-full w-max mx-auto" href="">Book Now</Link>
          </div>
          <div className="star-icon"></div>
        </div>
      </PageLayout>
    </div>
  );
}
