import React from "react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Mother, Portland",
    quote:
      "My home feels different now, lighter somehow, like I'm finally doing right by my kids.",
  },
  {
    name: "James Chen",
    role: "Architect, Seattle",
    quote:
      "The quality is there, the conscience is clear, and the costs don't break the bank.",
  },
  {
    name: "Elena Rodriguez",
    role: "Teacher, Austin",
    quote:
      "I stopped feeling guilty about what I'm leaving behind for the next generation.",
  },
];

const services = () => {
  return (
    <section
      id="services"
      className="min-h-[calc(100vh-4rem)] px-4 pt-0 pb-10 sm:px-8 flex flex-col items-center justify-center bg-white"
    >
      <div className="w-full max-w-6xl rounded-none px-6 sm:px-12 py-12 bg-white">
        <div className="flex flex-col gap-10">
          <header className="flex flex-col gap-2 sm:gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Real voices
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              People who chose better and never looked back.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <Card
                key={item.name}
                className="h-full border-none shadow-none bg-transparent p-0"
              >
                <div className="flex flex-col justify-between h-full text-gray-900">
                  {/* Stars */}
                  <div className="flex gap-1 text-lg text-gray-900">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>

                  {/* Quote */}
                  <p className="mt-4 text-base leading-relaxed text-gray-800">
                    “{item.quote}”
                  </p>

                  {/* Person */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        {item.name}
                      </span>
                      <span className="text-xs text-gray-600">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {/* Brand mark */}
                  <div className="mt-6 text-xs font-semibold tracking-wide text-gray-800 uppercase">
                    GreenNest
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;

