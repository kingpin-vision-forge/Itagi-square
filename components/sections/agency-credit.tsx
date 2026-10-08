// Creative agency watermark bar (KINGPIN Vision Forge from Frame 42.png),
// shared by every page footer on the site.
export function AgencyCredit() {
  return (
    <div className="w-full bg-white py-8 px-4 flex flex-col items-center justify-center border-t border-gray-200 select-none">
      <div className="flex items-center font-material-rounded text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.25em] leading-none">
        <span className="text-[#E51924]">K</span>
        <span className="text-black">INGPI</span>
        <span className="text-[#001AFF]">N</span>
      </div>
      <span className="font-luxurious text-4xl sm:text-5xl md:text-6xl text-black tracking-[0.02em] -mt-2 sm:-mt-3 drop-shadow-[0_2px_8px_rgba(72,20,84,0.45)]">
        Vision Forge
      </span>
    </div>
  );
}
