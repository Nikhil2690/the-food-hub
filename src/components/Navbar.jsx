import { Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import { useState } from "react";
import Modal from "../Modal";
import Cart from "../pages/Cart";
import { useCart } from "./ContextReducer";

const Navbar = () => {
  let data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("")
    navigate("/login")
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-custom
"
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 font-outfit" to="/">
            FOOD HUB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 ms-5 mt-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5 font-outfit" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {(localStorage.getItem("authToken"))
              ? <li className="nav-item">
              <Link className="nav-link active fs-5 font-outfit" aria-current="page" to="/myorder">
                My Orders
              </Link>
            </li>
            : "" 
              }
           
            </ul>

            {(!localStorage.getItem("authToken"))?
              <div className="d-flex ">
                    <Link className="btn bg-white text-primary mx-1" to="/login">login</Link>
                    <Link className="btn bg-white text-primary mx-1" to="/createuser">SignUp</Link>
              </div>
              : 
            <div>
                <div className="btn bg-white text-success mx-2 fw-bold " onClick={() => {setCartView(true)}}>
                  <span className="font-outfit">My Cart {" "}</span>
                  <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {cartView? <Modal onClose={() => setCartView(false)}> <Cart/> </Modal> : null}

                <div className="btn bg-white text-danger mx-2 fw-bold" onClick={handleLogout}>
                <span className="font-outfit">Logout</span>
                </div>
            </div>
            } 
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
