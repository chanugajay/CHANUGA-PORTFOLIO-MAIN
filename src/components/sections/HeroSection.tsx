
import { cn } from "@/lib/utils";
import SocialLinks from "../SocialLinks";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="animate-fadeIn">
            <p className="text-primary mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
              Chanuga Jayarathne
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              BSc. (Hons) in Computer Science
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Enthusiastic and dedicated final-year Computer Science student with a strong academic background and professional experience in software development. Skilled in web development, data analysis, and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                My Work
              </Button>
            </div>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20 p-2">
              <img
                src="/lovable-uploads/92ba9ad2-4ba2-46c3-a7f2-ff453f99f134.png"
                alt="Chanuga Jayarathne"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -z-10 top-4 left-4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/20 blur-lg"></div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-primary" />
      </a>
    </section>
  );
};

export default HeroSection;
