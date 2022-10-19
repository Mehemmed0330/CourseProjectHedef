// Components
import MiddleSection from "./components/MiddleSection";
import Header from "./components/Header";
import Apply from "./components/Apply";
import { Route, Routes, useLocation } from "react-router-dom";

// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      {location.pathname === "/" ? <Header /> : null}
      <Routes>
        <Route path="/" element={<MiddleSection />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;
