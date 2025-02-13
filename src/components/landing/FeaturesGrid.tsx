import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Brain, PiggyBank, Star, Shield } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title = "Feature Title",
  description = "Feature description goes here",
}: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full bg-white">
        <CardHeader>
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
            {icon}
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface FeaturesGridProps {
  features?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

const defaultFeatures = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Matching",
    description:
      "Advanced AI algorithms to match you with the perfect hospital based on your specific needs.",
  },
  {
    icon: <PiggyBank className="w-6 h-6" />,
    title: "Financial Consideration",
    description:
      "Transparent cost estimates and financial planning tools to help you make informed decisions.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Verified Reviews",
    description:
      "Access to authentic, verified patient reviews and ratings for informed decision-making.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Hospital Verification",
    description:
      "Rigorous verification process ensuring all listed hospitals meet our quality standards.",
  },
];

const FeaturesGrid = ({ features = defaultFeatures }: FeaturesGridProps) => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Dilseheal
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our platform makes finding the right healthcare
            provider easier and more reliable than ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
