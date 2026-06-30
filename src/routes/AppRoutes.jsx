import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Patient from "../pages/Patient";
import Contact from "../pages/Contact";
import Labs from "../pages/Labs";
import Pharmacy from "../pages/Pharmacy";
import TeleHealth from "../pages/TeleHealth";
import Resources from "../pages/Resources";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/labs" element={<Labs />}></Route>
        <Route path="/pharmacy" element={<Pharmacy />}></Route>
        <Route path="/tele-health" element={<TeleHealth />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
