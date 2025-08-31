import React from 'react';

const Atbox = ({ img, title, desc }) => {
  return (
    <div className="w-[250px] bg-[#141E24] text-white rounded-[10px] p-2 flex flex-col items-center text-center cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(0,0,0,0.8)]">
      
      <div className="w-full h-[150px] mb-2 overflow-hidden rounded-[8px]">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div className="disc">
        <h2 className="my-[5px] text-lg">{title}</h2>
        <p className="text-[14px]">{desc}</p>
      </div>

    </div>
  );
};

export default Atbox;
