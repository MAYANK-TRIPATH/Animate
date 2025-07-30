import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Accelerator from "./Components/Accelerator";
import Carosel from "./Components/Carosel";


export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="absolute bottom-0 left-0 right-0 h-35 bg-gradient-to-r text-white font-semibold text-2xl z-0">
        <Image src="/Background.webp" alt="Background" className="ml-12" width={1170} height={1000} />
        
        </div>
      </div>
      <div className="relative z-10 mt-30">
      <Accelerator />
      </div>
      <Carosel />
      
    </div>
  );
}
