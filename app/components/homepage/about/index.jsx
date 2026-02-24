// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          À PROPOS
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#E8857A] text-xl uppercase">
            Qui suis-je ?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            Je suis <span className="text-indigo-400 font-semibold">An-Jong Degbey</span>, développeuse web Full Stack passionnée, avec une forte spécialisation en <span className="text-indigo-400 font-semibold">Laravel</span>. J&apos;aime concevoir des applications web robustes et élégantes, en combinant la puissance du backend avec des interfaces modernes côté frontend. Je travaille principalement avec <span className="text-indigo-400 font-semibold">React, Laravel</span> et d&apos;autres technologies selon les besoins du projet. Pour moi, coder c&apos;est avant tout résoudre des problèmes concrets avec créativité et rigueur.
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={380}
            height={400}
            alt="An-Jong Degbey"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;  