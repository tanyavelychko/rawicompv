"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-md border border-navy/20 bg-white px-4 py-3 font-sans text-sm text-charcoal outline-none transition-colors focus:border-gold md:text-base";

const labelClasses =
  "font-sans text-xs font-semibold uppercase tracking-widest text-navy";

type Status = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setFormState({ name: "", company: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClasses}>
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formState.name}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="company" className={labelClasses}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formState.company}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClasses}>
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formState.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClasses}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 cursor-pointer bg-gold px-8 py-3 font-sans text-sm font-semibold tracking-widest text-charcoal uppercase transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="font-sans text-sm text-navy">
          Thanks for reaching out — we&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="font-sans text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
