import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Homepage from "./pages/Homepage"
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";

const App=()=>{
  return (
    <>
      <BrowserRouter>
       <ScrollToTop />
        <Routes>
          <Route path="/" element={<Body />} >
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
