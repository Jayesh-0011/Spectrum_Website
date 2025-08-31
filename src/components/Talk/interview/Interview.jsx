import React from 'react';

const Interview = ({ photo, name, desc, title, content }) => {
  return (
    <div className="flex justify-center items-start bg-[#1c1c1e] rounded-[12px] p-5 my-8 mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.6)] cursor-pointer
                    transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(0,0,0,0.8)] w-fit">

      <div className="flex flex-col justify-center text-center p-4 m-2 bg-[#2a2a2d] border-2 border-[#444] rounded-[10px] shadow-[0_0_15px_rgba(255,140,0,0.2)] h-[350px] w-[280px]">
        
        <div className="flex justify-center my-2">
          <img
            src={photo}
            alt={name}
            className="w-[180px] h-[180px] rounded-full border-3 border-[#ff8c00] shadow-[0_0_20px_rgba(255,140,0,0.6)]"
          />
        </div>

        <div className="info">
          <h2 className="mt-2 text-[1.4rem] text-[#ffcc70]">{name}</h2>
          <p className="text-[1rem] text-[#cfcfcf]">{desc}</p>
        </div>
      </div>

      <div className="h-[350px] w-[900px] bg-[#2a2a2d] border-2 border-[#444] rounded-[10px] m-2 p-5 overflow-hidden shadow-[inset_0_0_8px_rgba(255,255,255,0.05)]">
        <h1 className="text-center text-[1.8rem] text-[#ff8c00] mb-4">{title}</h1>
        <p className="text-[1.1rem] text-[#ddd] leading-[1.6] text-justify mx-4 my-3 font-sans">{content}</p>
      </div>

    </div>
  );
};

export default Interview;
