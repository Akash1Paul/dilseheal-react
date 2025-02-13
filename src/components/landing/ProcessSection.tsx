import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, Stethoscope, Search, ThumbsUp } from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProcessSectionProps {
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Share Your Requirements",
    description:
      "Tell us about your medical needs and preferences for hospital care.",
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
  },
  {
    title: "AI Matching Process",
    description:
      "Our AI analyzes your needs against our database of verified hospitals.",
    icon: <Search className="w-8 h-8 text-primary" />,
  },
  {
    title: "Get Personalized Results",
    description:
      "Receive a curated list of hospitals that best match your requirements.",
    icon: <ThumbsUp className="w-8 h-8 text-primary" />,
  },
];

const ProcessSection = ({ steps = defaultSteps }: ProcessSectionProps) => {
  return (
    <section className="w-full min-h-[600px] bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Video Section */}
        <div className="mb-16">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
            <video
              className="w-full h-full object-cover"
              src="https://dilseheal.com/video/VID-20230209-WA0005.mp4"
              controls
              autoPlay
              muted
              loop
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Finding the right hospital is easy with our simple three-step
            process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="relative h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
