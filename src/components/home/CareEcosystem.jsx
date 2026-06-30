import React from 'react';

const CareEcosystem = () => {
  const steps = [
    {
      id: 1,
      title: 'Consult',
      description: 'Visit a clinic or book online consultation',
      iconBg: 'bg-primary-light/10',
      iconColor: 'text-icon-blue',
      // Stethoscope Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V18.25c0 1.242 1.008 2.25 2.25 2.25h1.125" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Diagnose',
      description: 'Get tests & accurate diagnosis',
      iconBg: 'bg-accent-light/20',
      iconColor: 'text-icon-teal',
      // Test tubes Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244c0 .593-.324 1.132-.843 1.425L5.25 8.125A2.25 2.25 0 0 0 4.125 10.1v8.65c0 1.242 1.008 2.25 2.25 2.25h11.25c1.242 0 2.25-1.008 2.25-2.25V10.1a2.25 2.25 0 0 0-1.125-1.975l-3.657-2.356a1.687 1.687 0 0 1-.843-1.425V3.104" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Treat',
      description: 'Personalized treatment by experts',
      iconBg: 'bg-secondary-light/20',
      iconColor: 'text-icon-orange',
      // Heart with cross / plus Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Heal',
      description: 'Compassionate care for your recovery',
      iconBg: 'bg-primary-light/10',
      iconColor: 'text-icon-blue',
      // Healing Hands Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Wellness',
      description: 'Preventive care for a healthier tomorrow',
      iconBg: 'bg-secondary-light/15',
      iconColor: 'text-icon-orange',
      // Lotus/Wellness Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3c3.314 0 6 4.03 6 9s-2.686 9-6 9-6-4.03-6-9 2.686-9 6-9Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-background py-16 px-4 md:px-8 overflow-hidden mt-5">
      <div className=" text-center">
        
        {/* Subtitle Tagline */}
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-2">
          Complete Care Ecosystem
        </span>
        
        {/* Main Heading */}
        <h2 className="text-text-primary text-3xl md:text-4xl font-bold mb-16 tracking-tight">
          All Your Healthcare Needs, Under <span className="text-secondary">One Roof</span>
        </h2>

        {/* Process Roadmap Wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4 relative">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Individual Step Card */}
              <div className="flex flex-col items-center w-full md:max-w-[220px] text-center z-10 group border border-gray-200 px-5">
                
                {/* Circular Icon Holder */}
                <div className={`w-20 h-20 rounded-full ${step.iconBg} ${step.iconColor} flex items-center justify-center mb-5 shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                  {step.icon}
                </div>

                {/* Step Title */}
                <h3 className="text-text-primary text-lg font-bold mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-text-secondary text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line/Arrow - Hidden on the last element & custom flex alignment */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex flex-grow items-center justify-center px-2 min-w-[50px]">
                  {/* Dashed orange process indicator arrow */}
                  <div className="w-full border-t border-dashed border-secondary/50 relative">
                    <span className="absolute right-[-4px] top-[-5px] text-secondary/70 text-[10px] font-bold">
                      &rarr;
                    </span>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareEcosystem;