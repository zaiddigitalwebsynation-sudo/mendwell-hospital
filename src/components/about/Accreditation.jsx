import React from 'react';

const Accreditations = () => {
  const data = [
    {
      id: 1,
      logoText: "NABL",
      subText: "Accredited Labs",
      isNabl: true 
    },
    {
      id: 2,
      logoText: "ISO",
      subText: "9001:2015 Certified",
      isIso: true
    },
    {
      id: 3,
      logoText: "Q",
      subText: "Accredited Hospital",
      isNabh: true
    },
    {
      id: 4,
      logoText: "AYUSHMAN BHARAT",
      subText: "Empanelled Hospital",
      isAyushman: true
    },
    {
      id: 5,
      subText: "Excellence in Patient Care Award",
      isTrophy: true
    },
    {
      id: 6,
      logoText: "FICCI",
      subText: "Healthcare Excellence Member",
      isFicci: true
    }
  ];

  return (
    <section className=" bg-white relative overflow-hidden">
      
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00224D] tracking-wide">
          Accreditations & Recognitions
        </h2>
      
        <div className="w-10 h-1 bg-[#FF6B35] mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Main Content Container with Side Wreaths */}
      <div className="flex items-center justify-between w-full gap-4">
        
        {/* Left Laurel Wreath (Hides on Mobile) */}
        <div className="hidden xl:block opacity-30 text-slate-400 flex-shrink-0">
          <svg className="w-16 h-24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 21a9 9 0 0 1-5-8.3c0-3 1.5-5.3 3.5-7.2S8.3 2 10.3 2c.5 0 .7.4.5.8C9.5 5.3 7.8 8.8 7.8 12.3c0 3.2 1.3 6.4 3 8.7.3.4.1.9-.3.9H9.3c-1.2 0-2.3-.3-3.3-.9z"/>
          </svg>
        </div>

        {/* Grid Items (6-Column layout on desktop, responsive layout for mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full items-center gap-y-10 lg:gap-y-0 text-center">
          {data.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col items-center justify-center px-4 h-full relative ${
                // Adds vertical divider lines between columns on large screens
                index !== 5 ? 'lg:border-r lg:border-gray-200' : ''
              }`}
            >
              {/* Logo / Icon Container */}
              <div className="h-16 flex items-center justify-center mb-4">
                
                {/* 1. NABL Placeholder */}
                {item.isNabl && (
                  <div className="flex items-center space-x-2 text-[#00224D]">
                    <div className="w-8 h-8 rounded-full border-2 border-dashed border-[#00224D] flex items-center justify-center text-[8px] font-bold">LAB</div>
                    <span className="text-xl font-black tracking-tight">NABL</span>
                  </div>
                )}

                {/* 2. ISO Placeholder */}
                {item.isIso && (
                  <div className="flex flex-col items-center text-[#044a94]">
                    <div className="w-10 h-6 border-2 border-[#044a94] rounded-sm flex items-center justify-center font-serif text-[10px] tracking-widest font-bold">GLOBAL</div>
                    <span className="text-2xl font-black leading-none mt-0.5">ISO</span>
                  </div>
                )}

                {/* 3. Accredited Hospital (NABH Style) */}
                {item.isNabh && (
                  <div className="w-12 h-12 rounded-full border-4 border-red-500 flex items-center justify-center text-red-600 font-bold text-xl relative">
                    <span className="border-2 border-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-xs">Q</span>
                  </div>
                )}

                {/* 4. Ayushman Bharat Style */}
                {item.isAyushman && (
                  <div className="text-center font-bold text-sm text-[#00224D] max-w-[100px] leading-tight tracking-wider font-serif">
                    AYUSHMAN BHARAT
                  </div>
                )}

                {/* 5. Trophy Icon */}
                {item.isTrophy && (
                  <svg className="w-12 h-12 text-[#00224D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-5.25A1.125 1.125 0 007.875 15.375v3.375m9 0h-9M19.5 9.75c0-1.859-1.5-3.375-3.375-3.375h-1.5m1.5 3.375A3.375 3.375 0 0112.75 13.5h-1.5a3 3 0 01-3-3m0 0H6.75m0 0A3.375 3.375 0 013.375 6.375h1.5m1.5 3.375A3.375 3.375 0 009.75 6.375h4.5a3.375 3.375 0 003.375 3.375" />
                  </svg>
                )}

                {/* 6. FICCI Style */}
                {item.isFicci && (
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-8 bg-orange-500 rounded-l-full transform -skew-x-12"></div>
                    <span className="text-xl font-extrabold text-[#00224D] tracking-tighter">FICCI</span>
                    <div className="w-3 h-8 bg-green-600 rounded-r-full transform -skew-x-12"></div>
                  </div>
                )}

              </div>

              {/* Bottom Description Text */}
              <p className="text-xs md:text-sm font-bold text-[#00224D] leading-snug max-w-[140px]">
                {item.subText}
              </p>
            </div>
          ))}
        </div>

        {/* Right Laurel Wreath (Hides on Mobile) */}
        <div className="hidden xl:block opacity-30 text-slate-400 flex-shrink-0">
          <svg className="w-16 h-24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 21a9 9 0 0 0 5-8.3c0-3-1.5-5.3-3.5-7.2S15.7 2 13.7 2c-.5 0-.7.4-.5.8 1.3 2.5 3 6 3 9.5 0 3.2-1.3 6.4-3 8.7-.3.4-.1.9.3.9h1.7c1.2 0 2.3-.3 3.3-.9z"/>
          </svg>
        </div>

      </div>
    </section>
  );
};

export default Accreditations;