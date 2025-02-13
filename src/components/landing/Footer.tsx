import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Dilseheal */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Dilseheal</h3>
            <p className="text-gray-400">
              Dilseheal is an AI-powered hospital recommendation platform
              dedicated to connecting patients with the right healthcare
              providers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-brand">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-brand">
                  Hospital Recommendations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand">
                  Emergency Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand">
                  Hospital Comparison
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand">
                  Healthcare Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Download App */}
          <div className="mt-8 flex flex-col items-center space-y-4">
            <h3 className="text-xl font-bold mb-2">Download Our App</h3>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="transform hover:scale-105 transition-transform"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
              </a> */}
              <a
                href="#"
                className="transform hover:scale-105 transition-transform"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Dilseheal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
