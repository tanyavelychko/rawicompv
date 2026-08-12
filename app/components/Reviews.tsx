import { StarIcon } from "@heroicons/react/24/solid";

const reviews = [
  {
    name: "James Whitfield",
    role: "Operations Director, Whitfield Logistics",
    quote:
      "RAWICOM PV managed our installation from start to finish with minimal disruption to our warehouse operations. Our energy costs have dropped noticeably since going live.",
  },
  {
    name: "Sarah Ahmed",
    role: "Facilities Manager, Meridian Retail Group",
    quote:
      "The team took the time to understand our sites before proposing anything. The consultation felt genuinely tailored rather than a standard package.",
  },
  {
    name: "Tom Bennett",
    role: "Managing Director, Bennett Manufacturing",
    quote:
      "Professional, responsive, and clearly experienced with commercial-scale projects. Their maintenance plan gives us real peace of mind.",
  },
];

const Reviews = () => {
  return (
    <section className="bg-frost py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-10">
        <h2 className="font-heading text-2xl font-bold text-navy md:text-4xl">
          What Our Clients Say
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-lg border border-navy/20 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-lg"
            >
              <p className="font-sans text-sm leading-relaxed text-charcoal md:h-40 md:overflow-hidden md:text-base">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-gold" />
                ))}
              </div>
              <div className="mt-6 flex flex-col">
                <span className="font-heading text-sm font-bold text-navy">
                  {review.name}
                </span>
                <span className="font-sans text-xs text-charcoal/70">
                  {review.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
