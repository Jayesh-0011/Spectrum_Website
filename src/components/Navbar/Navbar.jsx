import React from 'react';
import './Navbar.css'

const Navbar = () => {
  const scrollToArticles = (element) => {
    const e = document.getElementsByClassName(element)[0];
    if (e) {
      e.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className=" navbar fixed mx-[55px] top-[20px] z-100 text-white rounded-[12px] shadow-md bg-[#1e1e1e] flex justify-between items-center px-[24px] py-[12px] w-[90%]  hover:bg-[#252525] hover:shadow-lg">
      <div className="text-[2rem] font-bold hover:cursor-pointer hover:text-[#ff9800]" onClick={() => scrollToArticles('hero')}>Spectrum</div>
      <ul className="flex gap-[2rem] text-[1.2rem] list-none">
        <li className='cursor-pointer hover:text-[#ff9800]' onClick={() => scrollToArticles('about')}>About Us</li>
        <li className='cursor-pointer hover:text-[#ff9800]' onClick={() => scrollToArticles('articles')}>Articles</li>
        <li className='cursor-pointer hover:text-[#ff9800]' onClick={() => scrollToArticles('talk')}>Talk with professors</li>
      </ul>
    </nav>
  );
};

export default Navbar;
