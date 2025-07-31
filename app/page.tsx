import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Accelerator from "./Components/Accelerator";
import Carosel from "./Components/Carosel";
import Agent from "./Components/Agent";
import Review from "./Components/Review";
import Footer from "./Components/Footer";
import Frame from "./Components/Frame";
import ProcessFlow from "./Components/ProcessFlow";



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
      <ProcessFlow />
      <Agent />
      <div className="mt-16 sm:mt-[200px] lg:mt-48 2xl:mt-64 3xl:mt-80">
      <Review />
      </div>
      
      <Frame />
      <Footer />
      
      
    </div>
  );
}
