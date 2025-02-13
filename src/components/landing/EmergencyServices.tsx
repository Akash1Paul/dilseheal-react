import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import {
  Phone,
  Navigation,
  AlertCircle,
  Ambulance,
  Heart,
  Clock,
  MapPin,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Heart className="w-6 h-6 text-red-500" />,
    label: "Satisfaction Rate",
    value: "94%",
    description: "Patient satisfaction across all services",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    label: "Lives Touched",
    value: "300+",
    description: "Patients helped in emergencies",
  },
  {
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    label: "Cities",
    value: "Kolkata",
    description: "Primary service area",
  },
  {
    icon: <Ambulance className="w-6 h-6 text-purple-500" />,
    label: "Fleet of Ambulances",
    value: "150+",
    description: "Modern, fully-equipped vehicles",
  },
];

const EmergencyServices = ({ onLocationAccess = () => {} }) => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-brand">
              Expert Care in Times of Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In an emergency, you need the best care possible. Trust our team
              of experts to handle any crisis with professionalism and
              compassion.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <h3 className="text-4xl font-bold mb-2 text-gray-900">
                      {stat.value}
                    </h3>
                    <p className="text-lg font-semibold mb-2 text-gray-700">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Emergency Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-2xl border-none overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                    <Phone className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Emergency Assistance
                    </h3>
                    <p className="text-gray-600">
                      Available 24/7 for urgent care needs
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        type="tel"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-red-600 to-brand text-white text-lg py-6 hover:opacity-90 transition-opacity">
                    Request Emergency Assistance
                  </Button>

                  <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                    <p className="text-sm text-yellow-800">
                      For immediate life-threatening emergencies, please call
                      your local emergency services immediately.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="flex items-center gap-2 mx-auto hover:bg-gray-50"
                onClick={onLocationAccess}
              >
                <Navigation className="h-4 w-4" />
                Find Nearby Emergency Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyServices;
