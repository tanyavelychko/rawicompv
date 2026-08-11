import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-navy flex items-center justify-between px-4 py-3 md:px-10 md:py-4">
      <Image
        src="/rawicom_logo.png"
        alt="Rawicom PV Ltd"
        width={180}
        height={51}
        className="invert w-32 h-auto md:w-44"
        priority
      />
      <nav className="flex items-center gap-6 md:gap-8">
        <a
          href="#services"
          className="font-sans text-xs font-medium tracking-widest text-frost/75 uppercase transition-colors hover:text-frost md:text-sm"
        >
          Services
        </a>
        <span className="font-sans text-xs font-medium tracking-widest text-frost uppercase md:text-sm">
          Contact us
        </span>
      </nav>
    </header>
  );
};

export default Header;
