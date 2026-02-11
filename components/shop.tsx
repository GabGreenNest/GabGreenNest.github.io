import React from "react";
import Image from "next/image";
import { Wind, Waves, Leaf } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/public/images/house4.jpg";

const features = [
  {
    icon: Wind,
    title: "Cleaner air inside",
    description:
      "Non-toxic materials mean your family breathes easier every single day.",
  },
  {
    icon: Waves,
    title: "Water stays pure",
    description:
      "Our filters protect what matters most without harsh chemicals or waste.",
  },
  {
    icon: Leaf,
    title: "Waste goes nowhere",
    description:
      "Everything decomposes naturally, leaving the earth as it was before.",
  },
];

const Shop = () => {
  return (
    <section
      id="shop"
      className="min-h-[calc(100vh-4rem)] px-4 py-8 sm:px-8 lg:py-0 bg-white flex justify-center items-center"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: feature list */}
        <div className="space-y-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700">
                <feature.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-gray-600 max-w-md">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-2 flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-none px-6 py-2 border-gray-900 text-gray-900"
            >
              Shop
            </Button>
            <button className="inline-flex items-center text-sm font-medium text-gray-900">
              Arrow <span className="ml-1 text-lg leading-none">›</span>
            </button>
          </div>
        </div>

        {/* Right: image */}
        <div className="w-full aspect-square lg:h-120 bg-gray-200 overflow-hidden rounded-sm">
          <Image
            src={heroImage}
            alt="Sustainable products in a modern home"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Shop;