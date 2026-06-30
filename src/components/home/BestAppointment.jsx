import React, { useState } from 'react';

const BestAppointment = () => {
  const [appointment, setAppointment] = useState({
    location: '',
    service: '',
    doctor: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    console.log('Booking Details:', appointment);
  };

  return (
    <div className="w-full p-4 mt-5">
      {/* Main Container - Using your primary-dark color */}
      <div className="bg-primary-dark rounded-2xl p-6 md:p-8 shadow-lg">
        
        {/* Title */}
        <h2 className="text-white text-lg md:text-xl font-semibold mb-4 tracking-wide">
          Book Appointment in Just a Few Clicks
        </h2>

        {/* Form Grid */}
        <form onSubmit={handleBookNow} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          
          {/* Select Location */}
          <div className="w-full">
            <select
              name="location"
              value={appointment.location}
              onChange={handleChange}
              className="w-full bg-card text-text-secondary px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-secondary outline-none appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235C6F87'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/></svg>")`,
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.25rem',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <option value="" disabled hidden>Select Location</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>

          {/* Select Service */}
          <div className="w-full">
            <select
              name="service"
              value={appointment.service}
              onChange={handleChange}
              className="w-full bg-card text-text-secondary px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-secondary outline-none appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235C6F87'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/></svg>")`,
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.25rem',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <option value="" disabled hidden>Select Service</option>
              <option value="general-checkup">General Checkup</option>
              <option value="cardiology">Cardiology</option>
              <option value="dental">Dental</option>
            </select>
          </div>

          {/* Select Doctor (Optional) */}
          <div className="w-full">
            <select
              name="doctor"
              value={appointment.doctor}
              onChange={handleChange}
              className="w-full bg-card text-text-secondary px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-secondary outline-none appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235C6F87'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/></svg>")`,
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.25rem',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <option value="" disabled hidden>Select Doctor (Optional)</option>
              <option value="dr-smith">Dr. Smith</option>
              <option value="dr-johnson">Dr. Johnson</option>
            </select>
          </div>

          {/* Select Date */}
          <div className="w-full">
            <input
              type="date"
              name="date"
              value={appointment.date}
              onChange={handleChange}
              required
              className="w-full bg-card text-text-secondary px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-secondary outline-none cursor-pointer"
            />
          </div>

          {/* Book Now Button - Using your secondary & secondary-dark colors */}
          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              Book Now
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BestAppointment;