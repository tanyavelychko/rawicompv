import Image from "next/image";

const WhyRawicom = () => {
  return (
    <section className="bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-10">
        <h2 className="font-heading text-2xl font-bold text-navy md:text-4xl">
          Why Rawicom
        </h2>
        <div className="mt-10 flex flex-col items-center gap-10 md:mt-16 md:flex-row-reverse md:gap-16">
          <div className="relative aspect-[4/3] w-full shrink-0 md:w-1/2">
            <Image
              src="/assets/why_us.jpg"
              alt="RAWICOM PV team designing a tailored solar project"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6 font-sans text-base leading-relaxed text-charcoal md:text-lg">
            <p>
              At RAWICOM PV LTD, we specialize in creating tailored solar
              projects that meet the unique needs of UK businesses. Our team
              collaborates closely with clients to design and implement solar
              energy solutions that not only enhance sustainability but also
              optimize cost efficiency.
            </p>
            <p>
              We understand that every business is different. Therefore, we
              provide customized installations and maintenance plans that
              align with your specific operational requirements, ensuring a
              seamless transition to solar energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRawicom;
