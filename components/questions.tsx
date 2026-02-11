import React from "react";
import { Button } from "./ui/button";
import Link from "next/dist/client/link";
const faqs = [
  {
    title: "Are your products truly biodegradable?",
    body: "Yes. Every item we sell breaks down naturally within two to five years.",
  },
  {
    title: "How long does shipping take?",
    body: "Standard delivery arrives within seven to ten business days across the United States.",
  },
  {
    title: "What if I'm not satisfied?",
    body: "We offer a full refund within thirty days of purchase, no questions asked.",
  },
  {
    title: "Do you ship internationally?",
    body: "We currently deliver to Canada and select European countries with the same care.",
  },
  {
    title: "How do you source materials?",
    body: "We partner directly with suppliers who meet our strict environmental and ethical standards.",
  },
  {
    title: "Can I track my order?",
    body: "Absolutely. You'll receive tracking information via email the moment your package ships.",
  },
];

const Questions = () => {
  return (
    <section
      id="questions"
      className="min-h-[calc(100vh-4rem)] bg-[#fdf5f2] px-4 pt-24 pb-16 sm:px-8 md:pt-24 md:pb-20 flex flex-col items-center scroll-mt-16"
    >
      <div className="w-full max-w-5xl flex flex-col items-center text-center gap-10">
        {/* Header */}
        <header className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Questions
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
            Find answers about our products, ordering, and commitment to the
            environment.
          </p>
        </header>

        {/* FAQ grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-x-12 md:gap-y-12 w-full text-left">
          {faqs.map((faq) => (
            <div
              key={faq.title}
              className="flex flex-col items-center text-center gap-3"
            >
              {/* Simple icon circle */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 text-gray-800 mb-1">
                <span className="text-lg">?</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900">
                {faq.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-700 max-w-xs">
                {faq.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom help section */}
        <div className="mt-6 md:mt-10 space-y-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">
            Need more help?
          </h3>
          <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto">
            Reach out to our team anytime for personalized guidance on your
            purchase.
          </p>

          <Link href="#contact">
            <Button
              variant="outline"
              className="mt-2 rounded-none px-6 py-2 border-gray-900 text-gray-900 bg-white"
            >
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Questions;
