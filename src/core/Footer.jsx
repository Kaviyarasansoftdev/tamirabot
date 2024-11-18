
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import ScrollingLogos from "../shared/Components/utils/ScrollingLogos";

const Footer = () => {
  return (
    <footer className="bg-secondary text-tertiary">
      <ScrollingLogos />
      <div className="py-10">
        <div className="container grid grid-cols-1 gap-8 px-6 mx-auto lg:px-20 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">About Tamirabot</h3>
            <p>
            Tamirabot, a DPIIT-recognized startup on-the-go to rewrite the narrative of charging efficiency manufacturing of electric vehicle charging connectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="transition duration-300 hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition duration-300 hover:text-primary"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition duration-300 hover:text-primary"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition duration-300 hover:text-primary"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 text-tertiary hover:text-primary"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 text-tertiary hover:text-primary"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 text-tertiary hover:text-primary"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">Contact Us</h3>
            <p className="flex items-center space-x-2">
              <MapPin className="text-primary" size={20} />
              <span>123 EV Street, Tech City, India</span>
            </p>
            <p className="flex items-center mt-2 space-x-2">
              <Phone className="text-primary" size={20} />
              <span>+91 96296 44781</span>
            </p>
            <p className="flex items-center mt-2 space-x-2">
              <Mail className="text-primary" size={20} />
              <span>sales@tamirabot.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-4 text-center border-t border-tertiary/50">
        <p>&copy; 2024 Tamirabot. All Rights Reserved.</p>
        <p className="mt-2">
          Designed by{" "}
          <a
            href="https://www.zehe.in"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zehe Tech Team
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
