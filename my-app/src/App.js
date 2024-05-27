import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"; 
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from "./pages"; 
import Contact from "./pages/contact";
import Bookings from "./pages/bookings"; 
import Gallery from "./pages/gallery"; 
import Merch from "./pages/merch"; 
import Mural from "./pages/murals";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/bookings" element={<Bookings />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/murals" element={<Mural />}/>
        <Route path="/merch" element={<Merch />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

    </Router>
    
  );
}

export default App;
