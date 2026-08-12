import {
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Consultation",
    description: "We assess your site and energy needs.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Installation",
    description: "Our team fits and commissions your system.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Maintenance",
    description: "Ongoing checks keep performance at its peak.",
    icon: Cog6ToothIcon,
  },
];

const OurProcess = () => {
  return (
    <section className="bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-10">
        <h2 className="font-heading text-2xl font-bold text-navy md:text-4xl">
          Our Process
        </h2>
        <div className="mt-10 flex flex-col items-center gap-10 md:mt-16 md:flex-row md:items-stretch md:gap-16">
          <div className="w-full rounded-lg border border-navy/20 bg-white p-6 shadow-sm md:w-80 md:shrink-0 md:p-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <div key={step.title}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy">
                      <Icon className="h-6 w-6 text-frost" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-base font-bold text-navy">
                        {step.title}
                      </h3>
                      <p className="mt-1 font-sans text-sm text-charcoal/80">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {!isLast && (
                    <div className="flex w-12 justify-center">
                      <div className="h-8 w-0.5 bg-gold" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-center gap-6 font-sans text-base leading-relaxed text-charcoal md:text-lg">
            <p>
              From first enquiry to long-term upkeep, we guide every client
              through a clear, three-stage process. We start by understanding
              your site and energy goals, move swiftly into a professional
              installation, and stay on hand afterwards to keep your system
              performing at its best.
            </p>
            <p>
              Whether you&apos;re exploring solar for the first time or
              upgrading an existing setup, our team manages each stage so you
              always know what to expect next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
