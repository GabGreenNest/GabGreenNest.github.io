import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,  
} from "@/components/ui/card";
import { Button } from "./ui/button";
import house1 from "@/public/images/house1.jpg";
import house2 from "@/public/images/house2.jpg";
import house3 from "@/public/images/house3.jpg";
const aboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="min-h-[calc(100vh-4rem)] px-4 pt-20 pb-10 sm:px-8 sm:pt-24 sm:pb-16 lg:pt-10 lg:pb-20 flex flex-col gap-8 scroll-mt-16"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            What makes GreenNest different
          </h1>
        </div>
        <div className="mt-6 text-base md:text-lg text-gray-800">
          <span className="block">
            We believe good living starts with honest choices. Every product we
            offer meets our standards
          </span>
          <span className="block">
            for quality and environmental responsibility
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mx-2 sm:mx-6 md:mx-10 lg:h-50 rounded-none">
        {/* Large biodegradable card - full width on mobile/tablet, 2/3 width on large screens */}
        <Card className="bg-white p-0 rounded-none border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex flex-col h-full ">
            <div className="w-full h-48 sm:h-64 md:h-100 lg:h-55">
              <Image
                src={house1}
                alt="Biodegradable materials home surrounded by nature"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col gap-4 justify-between h-full">
              <div className="space-y-0 lg:space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Foundations
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Biodegradable materials that break down
                </h3>
                <p className="text-sm sm:text-base text-gray-700 max-w-xl">
                  Our products return to the earth without leaving a trace behind.
                </p>
              </div>
              <div className="mt-6 lg:pb-20 flex items-center gap-4">
                <Button
                  variant="outline"
                  className="rounded-none px-5 py-2 border-gray-800 text-gray-900"
                >
                  Discover
                </Button>
                <button className="inline-flex items-center text-sm font-medium text-gray-900">
                  Arrow <span className="ml-1 text-lg leading-none">›</span>
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Right column on large screens: two stacked cards */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          {/* Energy-efficient card */}
          <Card className="h-1/2 bg-white p-0 rounded-none border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="w-full lg:w-1/2 h-40 lg:h-full">
                <Image
                  src={house2}
                  alt="Energy-efficient home design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Foundations
                </p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                  Energy-efficient designs that save
                </h3>
                <p className="text-sm text-gray-700">
                  Smart engineering reduces consumption while maintaining the performance you expect.
                </p>
                <button className="mt-2 inline-flex items-center text-sm font-medium text-gray-900">
                  Arrow <span className="ml-1 text-lg leading-none">›</span>
                </button>
              </div>
            </div>
          </Card>

          {/* Sustainable sourcing card */}
          <Card className="h-1/2 bg-white p-0 rounded-none border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="w-full lg:w-1/2 h-40 lg:h-full">
                <Image
                  src={house3}
                  alt="Sustainably sourced building materials"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Foundations
                </p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                  Sustainable sourcing from trusted partners
                </h3>
                <p className="text-sm text-gray-700">
                  We work directly with suppliers who share our commitment to the planet.
                </p>
                <button className="mt-2 inline-flex items-center text-sm font-medium text-gray-900">
                  Arrow <span className="ml-1 text-lg leading-none">›</span>
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default aboutUs;