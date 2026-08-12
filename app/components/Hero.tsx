import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex min-h-[500px] items-center md:min-h-[680px]">
      <Image
        src="/assets/hero_image.jpg"
        alt="Commercial solar panels against a blue sky"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-20 text-center md:px-10">
        <h1 className="font-heading text-3xl font-bold leading-tight text-frost sm:text-4xl md:text-5xl lg:text-6xl">
          Bespoke Solar Solutions <br className="hidden sm:block" />
          for UK Businesses
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-frost/75 md:text-lg">
          We design, install and maintain commercial solar panel systems —
          helping businesses across the UK transition to clean, cost-effective
          renewable energy.
        </p>
        <a
          href="#contact"
          className="mt-10 bg-gold px-8 py-3 font-sans text-sm font-semibold tracking-widest text-charcoal uppercase transition-opacity hover:opacity-90"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Hero;
