// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from 'react-icons/fa';

import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-24 relative text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* Titre */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Illustration SVG */}
        <div className="flex justify-center">
          <svg viewBox="0 0 500 400" className="w-full max-w-md drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]" xmlns="http://www.w3.org/2000/svg">
            {/* Fond carte */}
            <rect x="60" y="60" width="380" height="280" rx="24" fill="#0d1224" stroke="#3730a3" strokeWidth="1.5" />
            <rect x="60" y="60" width="380" height="280" rx="24" fill="url(#cardGrad)" />

            {/* Dégradé */}
            <defs>
              <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0d1224" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>

            {/* Ligne décorative top */}
            <rect x="60" y="60" width="190" height="3" rx="2" fill="url(#lineGrad)" />
            <rect x="250" y="60" width="190" height="3" rx="2" fill="url(#lineGrad)" />

            {/* Avatar cercle */}
            <circle cx="250" cy="145" r="45" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
            <circle cx="250" cy="133" r="18" fill="#6366f1" opacity="0.8" />
            <ellipse cx="250" cy="168" rx="26" ry="14" fill="#6366f1" opacity="0.8" />

            {/* Nom */}
            <text x="250" y="215" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="sans-serif">An-Jong Degbey</text>
            <text x="250" y="235" textAnchor="middle" fill="#818cf8" fontSize="11" fontFamily="sans-serif">Développeuse Web Full Stack</text>

            {/* Ligne séparatrice */}
            <rect x="150" y="248" width="200" height="1" fill="url(#lineGrad)" opacity="0.5" />

            {/* Icônes contact */}
            {/* Email */}
            <circle cx="175" cy="285" r="18" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1" />
            <text x="175" y="290" textAnchor="middle" fill="#818cf8" fontSize="14" fontFamily="sans-serif">@</text>

            {/* Téléphone */}
            <circle cx="250" cy="285" r="18" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1" />
            <text x="250" y="291" textAnchor="middle" fill="#818cf8" fontSize="16" fontFamily="sans-serif">📞</text>

            {/* Location */}
            <circle cx="325" cy="285" r="18" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1" />
            <text x="325" y="291" textAnchor="middle" fill="#818cf8" fontSize="16" fontFamily="sans-serif">📍</text>

            {/* Décorations coins */}
            <circle cx="90" cy="90" r="6" fill="#6366f1" opacity="0.4" />
            <circle cx="410" cy="90" r="6" fill="#7c3aed" opacity="0.4" />
            <circle cx="90" cy="310" r="6" fill="#7c3aed" opacity="0.4" />
            <circle cx="410" cy="310" r="6" fill="#6366f1" opacity="0.4" />

            {/* Points décoratifs flottants */}
            <circle cx="130" cy="180" r="3" fill="#6366f1" opacity="0.5" />
            <circle cx="370" cy="200" r="3" fill="#7c3aed" opacity="0.5" />
            <circle cx="145" cy="250" r="2" fill="#818cf8" opacity="0.4" />
            <circle cx="360" cy="160" r="2" fill="#818cf8" opacity="0.4" />
          </svg>
        </div>

        {/* Carte infos */}
        <div className="w-full max-w-xl bg-[#0d1224] border border-[#1b2c68a0] rounded-2xl p-8 flex flex-col gap-8 shadow-2xl">
          <p className="text-center text-[#d3d8e8] text-sm md:text-base leading-relaxed">
            Vous avez un projet ou une opportunité ? N&apos;hésitez pas à me contacter, je serai ravie d&apos;échanger avec vous.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 group">
              <div className="bg-indigo-900/50 border border-indigo-700 p-3 rounded-xl group-hover:bg-indigo-600 transition-all duration-300">
                <MdAlternateEmail className="text-indigo-300" size={22} />
              </div>
              <div>
                <p className="text-xs text-indigo-400 uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm md:text-base text-white">{personalData.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="bg-indigo-900/50 border border-indigo-700 p-3 rounded-xl group-hover:bg-indigo-600 transition-all duration-300">
                <IoMdCall className="text-indigo-300" size={22} />
              </div>
              <div>
                <p className="text-xs text-indigo-400 uppercase tracking-wider mb-1">Téléphone</p>
                <p className="text-sm md:text-base text-white">{personalData.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="bg-indigo-900/50 border border-indigo-700 p-3 rounded-xl group-hover:bg-indigo-600 transition-all duration-300">
                <CiLocationOn className="text-indigo-300" size={22} />
              </div>
              <div>
                <p className="text-xs text-indigo-400 uppercase tracking-wider mb-1">Localisation</p>
                <p className="text-sm md:text-base text-white">{personalData.address}</p>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

          <div className="flex items-center justify-center gap-6">
            <Link target="_blank" href={personalData.github || '#'}
              className="bg-indigo-900/50 border border-indigo-700 p-3 rounded-xl hover:bg-indigo-600 hover:scale-110 transition-all duration-300"
            >
              <IoLogoGithub className="text-indigo-300" size={24} />
            </Link>
            <Link target="_blank" href={personalData.linkedIn || '#'}
              className="bg-indigo-900/50 border border-indigo-700 p-3 rounded-xl hover:bg-indigo-600 hover:scale-110 transition-all duration-300"
            >
              <BiLogoLinkedin className="text-indigo-300" size={24} />
            </Link>
            <Link target="_blank" href={personalData.facebook || '#'}
              className="bg-indigo-900/50 border border-indigo-700 p-3 rounded-xl hover:bg-indigo-600 hover:scale-110 transition-all duration-300"
            >
              <FaFacebook className="text-indigo-300" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;