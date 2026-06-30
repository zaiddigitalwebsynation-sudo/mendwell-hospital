import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
     
      <div className="px-2 md:px-8 flex-1">
        <Nav />
        <AppRoutes />
      </div>

    
      <Footer />
    </div>
  );
};

export default App;