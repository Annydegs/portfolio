// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from '../../../assets/lottie/code.json';

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8">

        {/* Texte gauche */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">

          {/* Badge */}
          <div className="mb-4 flex items-center gap-2 bg-indigo-900/40 border border-indigo-700 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="text-indigo-300 text-xs uppercase tracking-widest">Disponible pour des projets</span>
          </div>

          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Bonjour, je suis <br />
            <span className="text-indigo-400">An-Jong Degbey</span>
            <br />
            <span className=" bg-clip-text text-white">
              Développeuse Web Full Stack
            </span>
          </h1>

         

          {/* Réseaux */}
        <div className="my-8 flex items-center gap-4">
  <Link href={personalData.github || '#'} target='_blank'
    className="bg-indigo-900/50 border border-indigo-700 p-2.5 rounded-xl hover:bg-indigo-600 hover:scale-110 transition-all duration-300">
    <BsGithub className="text-indigo-300" size={20} />
  </Link>
  <Link href={personalData.linkedIn || '#'} target='_blank'
    className="bg-indigo-900/50 border border-indigo-700 p-2.5 rounded-xl hover:bg-indigo-600 hover:scale-110 transition-all duration-300">
    <BsLinkedin className="text-indigo-300" size={20} />
  </Link>
  <Link href={personalData.facebook || '#'} target='_blank'
    className="bg-indigo-900/50 border border-indigo-700 p-2.5 rounded-xl hover:bg-indigo-600 hover:scale-110 transition-all duration-300">
    <FaFacebook className="text-indigo-300" size={20} />
  </Link>
  <Link href={personalData.instagram || '#'} target='_blank'
    className="bg-indigo-900/50 border border-indigo-700 p-2.5 rounded-xl hover:bg-indigo-600 hover:scale-110 transition-all duration-300">
    <FaInstagram className="text-indigo-300" size={20} />
  </Link>
</div>

          {/* Boutons */}
          <div className="flex items-center gap-4">
            <Link href="#contact" className="bg-gradient-to-r from-indigo-500 to-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-violet-600 hover:to-indigo-500">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2 hover:gap-4 transition-all duration-200">
                <span>Me contacter</span>
                <RiContactsFill size={16} />
              </button>
            </Link>
            <Link
              className="flex items-center gap-2 hover:gap-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-semibold uppercase tracking-wider text-white no-underline transition-all duration-200 hover:from-violet-600 hover:to-indigo-500"
              role="button"
              target="_blank"
              href={personalData.resume || '#'}
            >
              <span>Mon CV</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Animation Lottie droite */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
<div className="w-full drop-shadow-[0_0_40px_rgba(99,102,241,0.3)]">
<AnimationLottie animationPath={lottieFile} width="100%" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;