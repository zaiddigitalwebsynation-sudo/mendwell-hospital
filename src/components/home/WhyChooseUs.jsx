import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Experienced Specialists',
      description: 'Highly qualified doctors across all specialties',
      // Doctor profile icon style
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-icon-orange">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment for accurate diagnosis',
      // Technology/Microscope icon style
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-icon-orange">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244c0 .593-.324 1.132-.843 1.425L5.25 8.125A2.25 2.25 0 0 0 4.125 10.1v8.65c0 1.242 1.008 2.25 2.25 2.25h11.25c1.242 0 2.25-1.008 2.25-2.25V10.1a2.25 2.25 0 0 0-1.125-1.975l-3.657-2.356a1.687 1.687 0 0 1-.843-1.425V3.104" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Patient-Centric Care',
      description: 'Personalized care tailored to your needs',
      // Stethoscope icon style
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-icon-orange">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V18.25c0 1.242 1.008 2.25 2.25 2.25h1.125" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Seamless & Easy',
      description: 'Quick appointments, digital reports, and more',
      // Fast/Calender check icon style
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-icon-orange">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Safe & Secure',
      description: 'HIPAA-compliant systems to protect your data',
      // Shield check icon style
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-icon-orange">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Accessible Locations',
      description: 'Multiple centers across your city',
      // Map Pin icon style
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-icon-orange">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      )
    }
  ];

  const stats = [
    { id: 1, value: '50+', label: 'Specialized Doctors' },
    { id: 2, value: '15+', label: 'Clinics & Centers' },
    { id: 3, value: '1L+', label: 'Happy Patients' },
    { id: 4, value: '10L+', label: 'Tests Conducted' },
    { id: 5, value: '24/7', label: 'Emergency Support' }
  ];

  return (
    <div className="mt-5 p-4 flex flex-col gap-6">
      
      {/* Top Section - Splits into Dark Left Banner and Light Grid */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Dark Left Side Banner */}
        <div className="w-full lg:w-2/5 bg-primary-dark rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-sm min-h-[340px]">
          <div>
            <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-3">
              Why Choose MendWell?
            </span>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Healthcare You Can <br />
              <span className="text-secondary">Trust</span>
            </h2>
            <p className="text-text-light text-sm mt-4 leading-relaxed max-w-sm">
              We combine expertise, technology, and compassion to deliver the best outcomes for you and your family.
            </p>
          </div>
          
          <div className="z-10 mt-6">
            <button className="border border-text-secondary hover:border-secondary hover:text-secondary text-white text-sm font-semibold py-3 px-6 rounded-xl inline-flex items-center gap-2 transition-all duration-300">
              Know More About Us <span>&rarr;</span>
            </button>
          </div>
          
          {/* Subtle natural leaf background vector overlay effect */}
          <div className="absolute bottom-[-10px] right-[-10px] opacity-10 pointer-events-none text-white">
            <svg width="150" height="150" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 7 19 7 19S16 17 20 9C21 7 19 6 17 8Z"/>
            </svg>
          </div>
        </div>

        {/* Light Features Grid */}
        <div className="w-full lg:w-3/5 bg-section rounded-3xl md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 items-center shadow-sm">
          {features.map((item) => (
            <div key={item.id} className="flex gap-4 items-start border border-gray-300 rounded-xl py-2 px-1">
              {/* Circular Icon Container */}
              <div className="p-3 bg-card rounded-full border border-border flex items-center justify-center shrink-0 shadow-sm">
                {item.icon}
              </div>
              {/* Feature Text */}
              <div>
                <h3 className="text-text-primary font-bold text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Counter Bar Section */}
      <div className="w-full bg-primary-dark rounded-2xl py-6 px-4 md:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4 items-center justify-center text-center shadow-md">
        {stats.map((stat, i) => (
          <div key={stat.id} className={`flex flex-col items-center ${i !== 4 ? 'lg:border-r lg:border-primary-light/40' : ''} px-2`}>
            <span className="text-secondary text-2xl md:text-3xl font-extrabold tracking-tight">
              {stat.value}
            </span>
            <span className="text-text-light text-xs md:text-xs font-medium mt-1 uppercase tracking-wider opacity-85">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default WhyChooseUs;