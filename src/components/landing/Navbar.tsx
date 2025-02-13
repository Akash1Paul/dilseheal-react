import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  logo?: string;
  onGetRecommended?: () => void;
  onCompareHospitals?: () => void;
  onReviews?: () => void;
  onBlogs?: () => void;
  onJoinNow?: () => void;
  onForHospital?: () => void;
}

const Navbar = ({
  logo = "Dilseheal",
  onGetRecommended = () => {},
  onCompareHospitals = () => {},
  onReviews = () => {},
  onBlogs = () => {},
  onJoinNow = () => {},
  onForHospital = () => {},
}: NavbarProps) => {
  return (
    <div className="w-full h-20 bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://dilseheal.com/img/people_blue_text_png.png"
            alt="Dilseheal"
            className="h-12"
          />
        </div>

        {/* Main Navigation */}
        <div className="flex items-center space-x-6">
          <button
            onClick={onGetRecommended}
            className="text-gray-600 hover:text-brand transition-colors"
          >
            Get Recommended
          </button>
          <button
            onClick={onCompareHospitals}
            className="text-gray-600 hover:text-brand transition-colors"
          >
            Compare Hospitals
          </button>
          <button
            onClick={onReviews}
            className="text-gray-600 hover:text-brand transition-colors"
          >
            Reviews
          </button>
          <button
            onClick={onBlogs}
            className="text-gray-600 hover:text-brand transition-colors"
          >
            Blogs
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={onForHospital}
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            For Hospital
          </Button>
          <Button
            onClick={onJoinNow}
            className="bg-brand text-white hover:bg-brand/90"
          >
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
