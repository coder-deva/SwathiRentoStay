import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-black text-white text-sm px-6 py-10 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Careers</li>
              <li>Services</li>
              <li>Media Coverage</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Policy of Use</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">NETWORK SITES</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Square Yards Canada</li>
              <li>Square Yards UAE</li>
              <li>Square Yards Australia</li>
              <li>Urban Money</li>
              <li>Urban Money Australia</li>
              <li>Interior Company</li>
              <li>Azuro - Property Management</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">SOLUTIONS</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Square Connect</li>
              <li>Prime Connect</li>
              <li>Smart Agent</li>
              <li>Rent Agreement</li>
              <li>Escrow</li>
              <li>Book Property Online</li>
              <li>PropVR</li>
              <li>PropsAMC</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">RESOURCES</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Square Yards Reviews</li>
              <li>Glossary</li>
              <li>Real Estate Forum</li>
              <li>Real Estate Guide</li>
              <li>Data Intelligence</li>
              <li>Women Home Buyers</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-3">ABOUT US</h3>
            <p className="text-gray-400 leading-relaxed text-[13px]">
              Square Yards is India's largest integrated real estate marketplace, with category
              leadership presence across multiple touchpoints of consumer home ownership journey.
              With Urbanisation and rising disposable incomes as the core theme, Square Yards,
              with 8mn+ monthly traffic and ~USD 5bn+ GTV, is the largest and asset light proxy
              play to the growing residential demand story of India. One of the few Indian start
              ups to taste global success with presence in 100+ cities across 9 countries, Square
              Yards is at the forefront of tech adoption in the sector, with multiple patents
              across VR/AI domains.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">CONNECT WITH US</h3>
            <p className="text-gray-400 mb-2 text-[13px]">
              Write to us at<br />
              <span className="text-white">connect@squareyards.com</span>
            </p>
            <p className="text-gray-400 mb-2 text-[13px]">
              Existing Clients<br />
              <span className="text-white">customercare@squareyards.com</span>
            </p>
            <p className="text-gray-400 text-[13px]">
              Job/Career Related<br />
              <span className="text-white">careers@squareyards.com</span>
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">EXPERIENCE SQUAREYARDS APP ON MOBILE</h3>
            <div className="flex gap-2 mb-4">
              <img src="/public/images/google-play.png" alt="Google Play" className="h-10" />
              <img src="/public/images/app-store.png" alt="App Store" className="h-10" />
            </div>
            <h3 className="font-semibold mb-2">KEEP IN TOUCH</h3>
            <div className="flex gap-3 text-white text-xl">
              <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
              <FaYoutube className="hover:text-gray-400 cursor-pointer" />
              <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-center text-sm border-t border-gray-700 pt-4">
          © 2025 www.squareyards.com. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
