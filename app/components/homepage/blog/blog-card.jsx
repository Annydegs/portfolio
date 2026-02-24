// @flow strict
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

function BlogCard({ blog }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer border border-[#1d293a] hover:border-indigo-500 transition-all duration-500 bg-[#1b203e] rounded-lg group overflow-hidden"
      >
        <div className="relative h-44 lg:h-52 overflow-hidden">
          <Image
            src={blog?.cover_image}
            height={1080}
            width={1920}
            alt={blog.title}
            className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-semibold tracking-wide">Voir les détails</span>
          </div>
        </div>
        <div className="p-4">
          <p className="text-white font-semibold text-base mb-1 line-clamp-1">{blog.title}</p>
          <p className="text-indigo-400 text-xs line-clamp-2">{blog.description}</p>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-[#0d1224] border border-[#1b2c68a0] rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fermer */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 text-white bg-[#1a1443] hover:bg-indigo-600 transition-colors duration-200 rounded-full p-2"
            >
              <FaTimes size={14} />
            </button>

            {/* Image */}
            <div className="h-72 md:h-120 overflow-hidden">
              <Image
                src={blog?.cover_image}
                height={1080}
                width={1920}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Infos */}
            <div className="p-6 flex flex-col gap-4">
              <h2 className="text-white text-xl font-bold">{blog.title}</h2>
              <p className="text-[#d3d8e8] text-sm leading-relaxed">{blog.description}</p>

              {blog.url && (
                <Link
                  href={blog.url}
                  target="_blank"
                  className="flex items-center gap-2 hover:gap-4 w-fit rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-all duration-200 hover:from-violet-600 hover:to-indigo-500"
                >
                  <span>Voir le site</span>
                  <FaArrowRight size={14} />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogCard;