import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "../ui/card";

interface Advisor {
  name: string;
  position: string;
  organization: string;
  image: string;
}

const defaultAdvisors: Advisor[] = [
  {
    name: "Dr. Sarah Johnson",
    position: "Chief Medical Officer",
    organization: "Memorial Healthcare",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    name: "Dr. Michael Chen",
    position: "Head of Cardiology",
    organization: "Pacific Medical Center",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    name: "Dr. Emily Williams",
    position: "Director of Patient Care",
    organization: "City General Hospital",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
  },
  {
    name: "Dr. James Martinez",
    position: "Healthcare Technology Advisor",
    organization: "Health Tech Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
  },
];

const Advisors = ({ advisors = defaultAdvisors }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Medical Advisors</h2>
          <p className="text-xl text-gray-600">
            Meet the experts behind Dilseheal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48 bg-gray-100">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-1">{advisor.name}</h3>
                  <p className="text-brand font-medium mb-1">
                    {advisor.position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {advisor.organization}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisors;
