import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Orders from "./pages/Orders";
import AddOrder from './pages/AddOrder';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="drinks" element={<Drinks />} />
            <Route path="orders" element={<Orders />} />
            <Route path="placeOrder" element={<AddOrder />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
