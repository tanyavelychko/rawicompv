import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-frost py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-10">
        <h2 className="font-heading text-2xl font-bold text-navy md:text-4xl">
          Contact Us
        </h2>
        <div className="mt-10 flex flex-col gap-10 md:mt-16 md:flex-row md:gap-16">
          <div className="flex flex-col gap-6 md:w-72 md:shrink-0">
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-navy">
                Address
              </h3>
              <p className="mt-2 font-sans text-base leading-relaxed text-charcoal md:text-lg">
                11 Newton Way
                <br />
                Newport
                <br />
                NP20 6FY
              </p>
            </div>
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-navy">
                Telephone
              </h3>
              <a
                href="tel:+447754218033"
                className="mt-2 block font-sans text-base text-charcoal transition-colors hover:text-gold md:text-lg"
              >
                +44 7754 218033
              </a>
            </div>
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-navy">
                Email
              </h3>
              <a
                href="mailto:contact@rawicompv.co.uk"
                className="mt-2 block font-sans text-base text-charcoal transition-colors hover:text-gold md:text-lg"
              >
                contact@rawicompv.co.uk
              </a>
            </div>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
