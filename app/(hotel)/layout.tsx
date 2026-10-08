import { Navbar } from '@/components/sections/navbar';
import { BrandFooter } from '@/components/sections/brand-footer';

// Shared chrome for every hotel page. Al-Quds (app/alquds) has its own layout.
export default function HotelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F0E8] text-[#1D161F] selection:bg-[#481454] selection:text-white">
      <Navbar />
      {children}
      <BrandFooter />
    </div>
  );
}
