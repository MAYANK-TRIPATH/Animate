import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="absolute bottom-0 left-0 right-0 h-35 bg-gradient-to-r text-white font-semibold text-2xl">
        <Image src="/Background.webp" alt="Background" className="ml-12" width={1170} height={1000} />
        </div>
        
      </div>
      
    </div>
  );
}
