import React from 'react';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: 'Specialized Clinics',
      description: 'Expert care across 10+ specialties for all ages.',
      linkText: 'Explore Clinics',
      iconBg: 'bg-primary-light/10',
      iconColor: 'text-icon-blue',
      // Stethoscope Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V18.25c0 1.242 1.008 2.25 2.25 2.25h1.125" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Diagnostics & Labs',
      description: 'Accurate reports, advanced labs, home sample collection.',
      linkText: 'Explore Labs',
      iconBg: 'bg-accent-light/20',
      iconColor: 'text-icon-teal',
      // Test Tubes Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244c0 .593-.324 1.132-.843 1.425L5.25 8.125A2.25 2.25 0 0 0 4.125 10.1v8.65c0 1.242 1.008 2.25 2.25 2.25h11.25c1.242 0 2.25-1.008 2.25-2.25V10.1a2.25 2.25 0 0 0-1.125-1.975l-3.657-2.356a1.687 1.687 0 0 1-.843-1.425V3.104" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Telehealth Platform',
      description: 'Consult top specialists from the comfort of home.',
      linkText: 'Book Consultation',
      iconBg: 'bg-primary-light/10',
      iconColor: 'text-icon-blue',
      // Monitor/Video Consultation Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'MendWell Pharmacy',
      description: 'Medicines & health products delivered to your door.',
      linkText: 'Order Now',
      iconBg: 'bg-secondary-light/15',
      iconColor: 'text-icon-orange',
      // Medicine Bottle Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h4.5m-4.5 3h4.5m-4.5 3h4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-background py-16 px-4 md:px-8">
      <div className=" text-center">
        {/* Top Tagline */}
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-2">
          Our Services
        </span>
        
        {/* Main Heading */}
        <h2 className="text-text-primary text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          Comprehensive Healthcare for Every Need
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card  rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200"
            >
              {/* Icon Container with Custom Dynamic Tints */}
              <div className={`p-4 rounded-full ${service.iconBg} ${service.iconColor} mb-5 flex items-center justify-center`}>
                {service.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-text-primary text-xl font-bold mb-3">
                {service.title}
              </h3>

              {/* Card Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* CTA Link */}
              <a
                href="#"
                className="text-icon-blue hover:text-primary font-semibold text-sm inline-flex items-center gap-2 group transition-colors duration-200"
              >
                {service.linkText}
                <span className="transform transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;