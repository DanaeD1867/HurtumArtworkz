import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/index.js"; 
import Home from "./pages"; 
import Contact from "./pages/contact";
import Bookings from "./pages/bookings"; 
import Gallery from "./pages/gallery"; 
import Mural from "./pages/murals";

function App() {
  return (
      <Navbar />
  );
}

export default App;
