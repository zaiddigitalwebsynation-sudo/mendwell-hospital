import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdAccessTime, MdLocationOn } from "react-icons/md";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0E2F63] text-white font-sans">
      <div className=" px-8 md:px-20 py-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          
          {/* Logo Section */}
          <div>
            <img src={Logo} alt="Logo" className="h-40 object-contain " />

            <p className="text-sm text-gray-300 leading-6 mb-5">
              Empowering your journey to wellness with trusted care, advanced
              technology, and compassion.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition">
                <FaFacebookF size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition">
                <FaInstagram size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition">
                <FaLinkedinIn size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition">
                <FaYoutube size={14} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">Our Services</li>
              <li className="hover:underline cursor-pointer">Diagnostics & Labs</li>
              <li className="hover:underline cursor-pointer">Telehealth</li>
              <li className="hover:underline cursor-pointer">Pharmacy</li>
              <li className="hover:underline cursor-pointer">About Us</li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="font-semibold text-base mb-5">Patient Resources</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:underline cursor-pointer">Health Blog</li>
              <li className="hover:underline cursor-pointer">FAQs</li>
              <li className="hover:underline cursor-pointer">Insurance Information</li>
              <li className="hover:underline cursor-pointer">Patient Portal</li>
              <li className="hover:underline cursor-pointer">Track Appointment</li>
              <li className="hover:underline cursor-pointer">Medical Records</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold text-base mb-5">Our Locations</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:underline cursor-pointer">City Center (Main Hospital)</li>
              <li className="hover:underline cursor-pointer">North Branch</li>
              <li className="hover:underline cursor-pointer">East Branch</li>
              <li className="hover:underline cursor-pointer">West Branch</li>
              <li className="hover:underline cursor-pointer">View All Locations</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-base mb-5">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex gap-3 items-start">
                <MdPhone size={18} className="mt-0.5 shrink-0" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3 items-start">
                <MdEmail size={18} className="mt-0.5 shrink-0" />
                <span>care@mendwellhospitals.com</span>
              </div>

              <div className="flex gap-3 items-start">
                <MdLocationOn size={18} className="mt-0.5 shrink-0" />
                <span>
                  123, Health Avenue,
                  <br />
                  Wellness City, 400001
                </span>
              </div>

              <div className="flex gap-3 items-start">
                <MdAccessTime size={18} className="mt-0.5 shrink-0" />
                <span>Mon - Sun | 24×7 Open</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 MendWell Hospitals Private Limited. All rights reserved.</p>

          <div className="flex items-center gap-3 mt-3 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;