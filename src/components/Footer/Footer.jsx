import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#222] text-[#ddd] p-8 text-center w-full">
      <div className="text-white font-bold text-xl mb-4">
        Get in Touch
      </div>
      <ul className="flex justify-center gap-16 m-0 p-0 list-none">
        <li className="cursor-pointer transition-colors duration-300 hover:text-[#ff9800]">
          <a href="mailto:spectrum@hyderabad.bits-pilani.ac.in" target="_blank" rel="noreferrer">Email</a>
        </li>
        <li className="cursor-pointer transition-colors duration-300 hover:text-[#ff9800]">
          <a href="https://www.instagram.com/spectrum_bphc/" target="_blank" rel="noreferrer">Instagram</a>
        </li>
        <li className="cursor-pointer transition-colors duration-300 hover:text-[#ff9800]">
          <a href="https://facebook.com/spectrum" target="_blank" rel="noreferrer">Facebook</a>
        </li>
        <li className="cursor-pointer transition-colors duration-300 hover:text-[#ff9800]">
          <a href="https://linkedin.com/company/spectrum-bphc" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

