import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import CartProvider from "./components/ContextReducer.jsx";
import MyOrder from "./pages/MyOrder.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
      <div className="bg-dark text-white min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<Signup/>} />
          <Route path="/myorder" element={<MyOrder/>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
    
  );
}

export default App;
