import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  onGetRecommended?: () => void;
  onJoinNow?: () => void;
}

const HeroSection = ({
  title = "Find Your Perfect Hospital Match with AI",
  subtitle = "Let our advanced AI technology guide you to the best healthcare facilities tailored to your specific needs and preferences.",
  onGetRecommended = () => console.log("Get Recommended clicked"),
  onJoinNow = () => console.log("Join Now clicked"),
}: HeroSectionProps) => {
  return (
    <div className="bg-white min-h-[800px] w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              onClick={onGetRecommended}
              className="bg-brand hover:bg-brand/90 text-white"
            >
              Get Recommended
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onJoinNow}
              className="border-brand text-brand hover:bg-brand/10"
            >
              Join Now
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* <a
              href="#"
              className="transform hover:scale-105 transition-transform"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on App Store"
                className="h-12"
              />
            </a> */}
            <a
              href="#"
              className="transform hover:scale-105 transition-transform"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-brand/5">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-64 h-64 bg-brand/10 rounded-full flex items-center justify-center">
                <div className="absolute w-48 h-48 bg-brand/20 rounded-full animate-pulse" />
                <Stethoscope className="w-24 h-24 text-brand" />
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-12 left-12 w-20 h-20 bg-green-200/50 rounded-full" />
            <div className="absolute bottom-12 right-12 w-16 h-16 bg-purple-200/50 rounded-full" />
            <div className="absolute top-1/2 right-24 w-12 h-12 bg-yellow-200/50 rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
