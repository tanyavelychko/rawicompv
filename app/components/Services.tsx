const services = [
  {
    title: "Expert Installation of Solar Panels",
    description:
      "Our team specialises in the expert installation of solar panels, ensuring efficient and effective energy solutions for businesses across the UK, promoting sustainability and reducing overall energy costs.",
  },
  {
    title: "Ongoing Maintenance Services Offered",
    description:
      "We provide dedicated maintenance services to ensure that your solar panels operate at peak performance, extending their lifespan and maximising energy output, ultimately benefiting your business's bottom line.",
  },
  {
    title: "Tailored Consultation for Your Needs",
    description:
      "Our tailored consultation services help design customised solar projects that meet the specific energy needs of your business, ensuring optimal efficiency and return on investment for every client we serve.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-frost py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-10">
        <h2 className="font-heading text-2xl font-bold text-navy md:text-4xl">
          Our Services
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-lg border border-navy/20 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-bold text-navy md:text-xl">
                {service.title}
              </h3>
              <div className="mt-3 h-0.5 w-10 bg-gold" />
              <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
