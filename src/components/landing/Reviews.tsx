import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Star, Quote } from "lucide-react";
import { Button } from "../ui/button";

interface Review {
  name: string;
  hospital: string;
  rating: number;
  comment: string;
  image: string;
}

const defaultReviews: Review[] = [
  {
    name: "Sarah Johnson",
    hospital: "City General Hospital",
    rating: 5,
    comment:
      "Excellent care and professional staff. The AI recommendation was spot on!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    name: "Michael Chen",
    hospital: "Memorial Healthcare",
    rating: 4,
    comment:
      "Very satisfied with the hospital recommendation. The facilities were great.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    name: "Emily Williams",
    hospital: "Pacific Medical Center",
    rating: 5,
    comment:
      "Outstanding experience! The hospital matched all my requirements perfectly.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
  },
];

const Reviews = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Patient Reviews</h2>
          <p className="text-xl text-gray-600">
            What our users say about their experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.hospital}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <div className="relative">
                    <Quote className="w-8 h-8 text-gray-200 absolute -top-2 -left-2" />
                    <p className="text-gray-600 relative z-10 pl-6">
                      {review.comment}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-brand hover:bg-brand/90">
            View All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
