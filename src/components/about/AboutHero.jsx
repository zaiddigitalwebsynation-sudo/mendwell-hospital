import { ArrowRight } from "lucide-react";
const AboutHero = () => {
  return (
    <div className=" px-6 lg:px-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-10">
        Home <span className="mx-2">&gt;</span>
        <span className="text-[#0b2147] font-medium">About Us</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight text-[#0b2147]">
            About MendWell <span className="text-[#ff7a21]">Hospitals</span>
          </h1>

          <h2 className="mt-4 text-3xl font-bold text-[#0b2147]">
            Mending Lives, Together
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-9 max-w-xl">
            MendWell Hospitals is a multi-specialty healthcare network committed
            to providing accessible, advanced, and compassionate care to every
            individual. With a strong foundation in clinical excellence and a
            patient-first approach, we bring together specialized services,
            cutting-edge technology, and a team of dedicated healthcare
            professionals to promote wellness and transform lives.
          </p>

          <button className="mt-8 flex items-center gap-3 rounded-lg bg-[#0b2147] hover:bg-[#13346b] px-7 py-4 text-white font-semibold transition">
            Our Journey
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">
          {/* Background Shape */}
          <div className="absolute w-[95%] h-[90%] rounded-[90px] bg-gradient-to-r from-cyan-200 to-orange-200 opacity-40 blur-xl"></div>

          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80"
            alt="Hospital"
            className="relative z-10 w-full max-w-2xl rounded-[90px] shadow-2xl"
          />

          {/* Decorative Leaf */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/628/628324.png"
            alt=""
            className="absolute left-0 top-1/3 w-16 opacity-40"
          />

          {/* ECG Line */}
          <img
            src="https://www.freeiconspng.com/uploads/heartbeat-png-18.png"
            alt=""
            className="absolute bottom-0 w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
