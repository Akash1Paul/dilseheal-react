import React from "react";
import { motion } from "framer-motion";
import Navbar from "./landing/Navbar";
import HeroSection from "./landing/HeroSection";
import ProcessSection from "./landing/ProcessSection";
import FeaturesGrid from "./landing/FeaturesGrid";
import EmergencyServices from "./landing/EmergencyServices";
import Footer from "./landing/Footer";
import WhyChooseUs from "./landing/WhyChooseUs";
import Advisors from "./landing/Advisors";
import Reviews from "./landing/Reviews";
import ScrollToTop from "./ScrollToTop";

interface HomeProps {
  onGetRecommended?: () => void;
  onCompareHospitals?: () => void;
  onReviews?: () => void;
  onBlogs?: () => void;
  onJoinNow?: () => void;
  onForHospital?: () => void;
  onLocationAccess?: () => void;
}

const Home = ({
  onGetRecommended = () => console.log("Get Recommended clicked"),
  onCompareHospitals = () => console.log("Compare Hospitals clicked"),
  onReviews = () => console.log("Reviews clicked"),
  onBlogs = () => console.log("Blogs clicked"),
  onJoinNow = () => console.log("Join Now clicked"),
  onForHospital = () => console.log("For Hospital clicked"),
  onLocationAccess = () => console.log("Location access requested"),
}: HomeProps) => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar
        onGetRecommended={onGetRecommended}
        onCompareHospitals={onCompareHospitals}
        onReviews={onReviews}
        onBlogs={onBlogs}
        onJoinNow={onJoinNow}
        onForHospital={onForHospital}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pt-20">
          <HeroSection
            onGetRecommended={onGetRecommended}
            onJoinNow={onJoinNow}
          />
          <ProcessSection />
          <WhyChooseUs />
          <FeaturesGrid />
          <Reviews />
          <EmergencyServices onLocationAccess={onLocationAccess} />
          <Advisors />
          <ScrollToTop />
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Home;
