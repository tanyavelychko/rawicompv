"use client";

import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact us" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-navy px-4 py-3 md:px-10 md:py-4">
      <div className="flex items-center justify-between">
        <Image
          src="/rawicom_logo.png"
          alt="Rawicom PV Ltd"
          width={180}
          height={51}
          className="h-auto w-32 invert md:w-44"
          priority
        />
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium tracking-widest text-frost/75 uppercase transition-colors hover:text-frost"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="text-frost md:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav className="flex flex-col overflow-hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-t border-frost/10 py-4 font-sans text-xs font-medium tracking-widest text-frost/75 uppercase transition-colors hover:text-frost"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
