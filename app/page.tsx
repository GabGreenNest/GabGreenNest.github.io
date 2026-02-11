import React from "react";
import NavigationBar from "@/components/navbar";
import MainContent from "@/components/maincontent";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Windranger from "@/public/images/wr.jpg";
import image1 from "@/public/images/house1.jpg";
import image2 from "@/public/images/house2.jpg";  
import image3 from "@/public/images/house3.jpg";
import image4 from "@/public/images/house4.jpg";
import image5 from "@/public/images/house5.jpg";
import image6 from "@/public/images/house6.jpg";
import image7 from "@/public/images/house7.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AboutUs from "@/components/aboutUs";
import Shop from "@/components/shop";
import Services from "@/components/services";
import Questions from "@/components/questions";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
const page = () => {
  return (
    <section id="home">
    <div className="flex flex-col">
      <NavigationBar />
      <div className="bg-[#ffffff] flex flex-col lg:flex-row items-stretch min-h-[calc(100vh-4rem)] px-4 py-8 gap-8 lg:px-0 lg:py-0 lg:gap-6">
        <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
          <MainContent />
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <Carousel className="rounded-lg h-full">
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[calc(100vh-4rem)]"
                  src={image2}
                  alt="GreenNest home 1"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[calc(100vh-4rem)]"
                  src={image4}
                  alt="GreenNest home 2"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[calc(100vh-4rem)]"
                  src={image7}
                  alt="GreenNest home 3"
                />
              </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
      </div>
      <AboutUs/>
      <Shop/>
      <Services/>
      <Questions />
      <Contact />
      <Footer />
    </div>
    </section>
  );
};

export default page;
