import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WhyRawicom from "./components/WhyRawicom";
import Services from "./components/Services";
import OurProcess from "./components/OurProcess";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <WhyRawicom />
        <Services />
        <OurProcess />
        <Reviews />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
