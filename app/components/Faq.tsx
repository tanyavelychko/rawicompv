"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How long does a typical commercial solar installation take?",
    answer:
      "Most commercial installations are completed within a few weeks of the agreed start date, depending on the size of the system and site access. We'll give you a clear timeline during the consultation stage.",
  },
  {
    question: "Do I need planning permission for a commercial solar installation?",
    answer:
      "Many commercial rooftop installations fall under permitted development rights in the UK, meaning formal planning permission usually isn't required. We'll confirm the specifics for your site as part of our consultation.",
  },
  {
    question: "How much can my business save on energy costs?",
    answer:
      "Savings depend on your current usage, roof space, and system size, but most businesses see a significant reduction in their energy bills. We'll provide a tailored cost and savings estimate before any work begins.",
  },
  {
    question: "What maintenance does a solar PV system require?",
    answer:
      "Solar panel systems are low maintenance, but regular inspections help maximise performance and lifespan. Our maintenance plans cover routine checks, cleaning, and prompt repairs if any issues arise.",
  },
  {
    question: "Do you offer financing or leasing options?",
    answer:
      "We can discuss a range of funding options during your consultation to help make the transition to solar more manageable for your business's budget and cash flow.",
  },
  {
    question: "What happens if a panel gets damaged or stops working?",
    answer:
      "Our maintenance plans include prompt diagnostics and repairs. Most components are also covered by manufacturer warranties, and our team will handle any claims on your behalf.",
  },
];

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
      >
        <span className="font-heading text-base font-semibold text-navy md:text-lg">
          {question}
        </span>
        <ChevronDownIcon
          className={`h-5 w-5 shrink-0 text-navy transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 font-sans text-sm leading-relaxed text-charcoal md:px-8 md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-10">
        <h2 className="font-heading text-2xl font-bold text-navy md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 divide-y divide-navy/15 rounded-lg border border-navy/20 bg-white md:mt-16">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
