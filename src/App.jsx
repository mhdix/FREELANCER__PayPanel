import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import Customer from "./components/Customer";
import AddCustomer from "./components/AddCustomer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import { customers } from "./data";

function App() {
  return (
    <div className="w-full flex flex-col items-center space- min-h-screen relative">
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AddCustomer />} />

        <Route path="/:url" element={<Customer />} />

        <Route path="/:url/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
