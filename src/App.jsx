import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your 4 pages
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
// import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen bg-[#0D0B0C] text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full">
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/about" element={<About />} /> */}

          {/* Fallback route for 404 errors */}
          <Route
            path="*"
            element={
              <div className="flex h-screen items-center justify-center font-clash text-2xl">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
