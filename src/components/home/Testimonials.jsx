import React, { useState } from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "MendWell Hospitals provided exceptional care during my treatment. The doctors and staff were extremely supportive.",
      author: "Anjali Sharma",
      rating: 5,
    },
    {
      id: 2,
      text: "The online consultation was so convenient and the follow-up care was excellent.",
      author: "Rahul Mehta",
      rating: 5,
    },
    {
      id: 3,
      text: "Quick lab reports, easy appointments, and genuine care. Highly recommended!",
      author: "Priya Nair",
      rating: 5,
    },
  ];

  // Active pagination state (for slider dots behavior)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-background py-16 px-4 md:px-8">
      <div className=" text-center">
        
        {/* Subtitle Tagline */}
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-2">
          What Our Patients Say
        </span>
        
        {/* Main Heading */}
        <h2 className="text-text-primary text-3xl md:text-4xl font-bold mb-14 tracking-tight">
          Trusted by Thousands
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card border border-border/40 rounded-2xl p-8 flex flex-col justify-between relative shadow-xs transition-all duration-300 hover:shadow-md"
            >
              {/* Quote Mark Icon */}
              <div className="text-secondary text-7xl font-serif leading-none mb-2 select-none">
                &ldquo;
              </div>

              {/* Review Text */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                {review.text}
              </p>

              {/* Bottom Metadata Wrapper */}
              <div>
                {/* Horizontal Divider Line matching the original UI */}
                <div className="w-16 border-t-2 border-secondary/40 mb-4" />
                
                <div className="flex items-center justify-between flex-wrap gap-2">
                  {/* Patient Name */}
                  <span className="text-text-primary font-bold text-sm">
                    &mdash; {review.author}
                  </span>
                  
                  {/* Star Ratings */}
                  <div className="flex gap-1 text-secondary">
                    {[...Array(review.rating)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                          />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default Testimonials;