// @flow strict
function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-[#d3d8e8]">
            © 2026 — <span className="text-indigo-400 font-medium">An-Jong Degbey</span>
          </p>
          <p className="text-xs text-[#555e7a]">
            Développeuse Web Full Stack · Bénin
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;