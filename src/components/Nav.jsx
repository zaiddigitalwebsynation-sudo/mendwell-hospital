import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const Nav = () => {
  // Mobile Sidebar active control state
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/services", dropdown: true },
    { name: "Diagnostics & Labs", path: "/labs" },
    { name: "Telehealth", path: "/tele-health" },
    { name: "Pharmacy", path: "/pharmacy" },
    { name: "About Us", path: "/about" },
    { name: "Resources", path: "/resources", dropdown: true },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white shadow-sm py-2 sticky top-0 z-50">
      <div className="px-5 md:px-8 h-16 md:h-24 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img
            src={Logo}
            alt="Logo"
            className="h-16 md:h-20 object-contain cursor-pointer"
          />
        </NavLink>

        {/* Desktop Navigation Links (Hidden on Tablets & Mobiles) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative flex items-center gap-1 text-[16px] xl:text-[18px] font-medium transition-all duration-300
                ${
                  isActive
                    ? "text-primary"
                    : "text-text-primary hover:text-primary"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown size={15} />}
                  {isActive && (
                    <span className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-secondary"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions Block (Hamesha top par rahega - Mobile par bhi) */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Appointment Button - Desktop aur Mobile dono par accessible rahega */}
          <button className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition duration-300 shadow-sm whitespace-nowrap">
            Book Appointment
          </button>

          {/* Hamburger Menu Icon - Sirf Mobile/Tablet par 'Book Appointment' ke baad aayega */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 text-text-primary hover:text-primary transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>
          
        </div>

      </div>

      {/* ================= SIDEBAR SLIDEOUT PANEL (RIGHT SIDE) ================= */}
      
      {/* Dark Overlay Shadow backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Actual Drawer Body */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-in-out transform lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Close Button Section */}
        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <span className="text-text-primary font-bold text-lg">Menu</span>
          <button
            onClick={toggleSidebar}
            className="p-2 text-text-secondary hover:text-secondary transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Links Navigation Stack inside Drawer */}
        <nav className="flex flex-col gap-5 overflow-y-auto flex-grow pr-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `flex items-center justify-between text-base font-semibold py-2 px-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-primary-light/10 text-primary"
                    : "text-text-primary hover:bg-section hover:text-primary"
                }`
              }
            >
              <span className="flex items-center gap-2">{item.name}</span>
              {item.dropdown && <ChevronDown size={16} className="opacity-70" />}
            </NavLink>
          ))}
        </nav>
      </aside>

    </header>
  );
};

export default Nav;