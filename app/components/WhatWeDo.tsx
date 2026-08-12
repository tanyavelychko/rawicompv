import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section id="about" className="bg-frost py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-10">
        <h2 className="font-heading text-2xl font-bold text-navy md:text-4xl">
          Committed to sustainable energy solutions
        </h2>
        <div className="mt-10 flex flex-col items-center gap-10 md:mt-16 md:flex-row md:gap-16">
          <div className="relative aspect-[4/3] w-full shrink-0 md:w-1/2">
            <Image
              src="/assets/what_we_do.png"
              alt="Solar panels on a commercial rooftop"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6 font-sans text-base leading-relaxed text-charcoal md:text-lg">
            <p>
              At RAWICOM PV LTD, we specialise in the installation and
              maintenance of solar panels tailored specifically for UK
              businesses. Our commitment to sustainability ensures that we
              deliver effective solar energy solutions that benefit both our
              clients and the environment.
            </p>
            <p>
              We focus on building solar power plants designed to meet the
              unique needs of each business. Our expertise allows us to provide
              comprehensive services that support a greener future for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
