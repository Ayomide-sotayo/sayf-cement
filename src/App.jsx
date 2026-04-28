import { Routes ,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
function App() {
  return (
   <>
   <NavBar />
    <Routes>
       <Route path="/" element={<About />} />
       <Route path="/order" element={<Order />} />
       <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
   </>
  );
}

export default App;
