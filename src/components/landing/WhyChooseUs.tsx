import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle2, Award, Clock, Users } from "lucide-react";

const features = [
  {
    icon: <CheckCircle2 className="w-6 h-6 text-brand" />,
    title: "Verified Hospitals",
    description:
      "All hospitals in our network are thoroughly verified and accredited.",
  },
  {
    icon: <Award className="w-6 h-6 text-brand" />,
    title: "Expert Consultation",
    description:
      "Get expert medical consultation from verified healthcare professionals.",
  },
  {
    icon: <Clock className="w-6 h-6 text-brand" />,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support for all your healthcare needs.",
  },
  {
    icon: <Users className="w-6 h-6 text-brand" />,
    title: "Patient Community",
    description:
      "Join our growing community of patients sharing experiences and support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">
            Discover Why We're the Best Choice for You
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
