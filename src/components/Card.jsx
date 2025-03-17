import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatchCart, useCart } from "./ContextReducer";

const Card = (props) => {

  let dispatch = useDispatchCart();
  let data = useCart() 
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.foodItem;
  const[qty, setQty] = useState(1)
  const[size, setSize] = useState("")

  const handleAddToCart = async () => {

    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.foodItem.img })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }
    await dispatch({type:"ADD", id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, size:size})
    console.log(data)
  }

  let finalPrice = qty * parseInt(options[size])
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  return (
    <div>
  <div className="card mt-3 bg-dark border border-light-subtle w-100 animate-hover" style={{ width: "18rem", maxHeight: "360px" }}>
    <img src={props.foodItem.img} className="card-img-top img-fluid object-fit: cover" alt="..." style={{height:"190px", objectFit:"fill"}} />
    <div className="card-body">
      <h5 className="card-title text-white font-outfit">{props.foodItem.name}</h5>
      <div className="container w-100 ">
        <select className="m-2 h-100 bg-russet rounded" onChange={(e) => setQty(e.target.value)}>
          {Array.from(Array(6), (e, i) => {
            return (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            );
          })}
        </select>

        <select className="m-2 h-100 bg-russet rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
          {
            priceOptions.map((data) => {
              return <option key={data} value={data}> {data} </option>
            })
          }
        </select>

        <div className="d-inline fs-5 h-100 text-white">
          ₹{finalPrice}/-
          </div>
      </div>
    </div>
    <hr className="border border-info-subtle m-0"/>
    <div className="card-footer bg-dark border-top-0 ps-3 pb-2">
      <button className="btn btn-success " onClick={handleAddToCart}><span className="font-outfit">Add To Cart</span></button>
    </div>
  </div>
</div>
  );
};

Card.propTypes = {
  foodItem: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired, // Options should be an object with string values
};


export default Card;
