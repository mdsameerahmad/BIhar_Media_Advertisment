import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
// import { Portf } from "./components/Portf";
import { Ser } from "./components/Ser";
import { Ab } from "./components/Ab";
import { Contact } from "./components/Contact";
import { useEffect } from "react";

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/portfolio" element={<Portf />} /> */}
        <Route path="/services" element={<Ser/>} />
        <Route path="/about" element={<Ab/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;