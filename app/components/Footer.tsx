import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Image
            src="/rawicom_logo.png"
            alt="Rawicom PV Ltd"
            width={160}
            height={45}
            className="h-auto w-32 invert md:w-40"
          />
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            <a
              href="#about"
              className="font-sans text-xs font-medium tracking-widest text-frost/75 uppercase transition-colors hover:text-frost md:text-sm"
            >
              About Us
            </a>
            <a
              href="#services"
              className="font-sans text-xs font-medium tracking-widest text-frost/75 uppercase transition-colors hover:text-frost md:text-sm"
            >
              Services
            </a>
            <a
              href="#contact"
              className="font-sans text-xs font-medium tracking-widest text-frost/75 uppercase transition-colors hover:text-frost md:text-sm"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="h-px w-full bg-frost/15" />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-sm text-frost/75">
            11 Newton Way, Newport, NP20 6FY
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-frost/75">
            <a
              href="tel:+447754218033"
              className="transition-colors hover:text-frost"
            >
              +44 7754 218033
            </a>
            <a
              href="mailto:contact@rawicompv.co.uk"
              className="transition-colors hover:text-frost"
            >
              contact@rawicompv.co.uk
            </a>
          </div>
        </div>
        <p className="font-sans text-xs text-frost/50">
          &copy; {new Date().getFullYear()} RAWICOM PV LTD. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
