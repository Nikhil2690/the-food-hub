import hamburger from '../assets/hamburger-494706_1280.jpg';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const Home =() => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async ()=> {

    try{let response  = await fetch("https://the-food-hub-oozu.onrender.com/api/foodData",{
      method: 'POST',
      headers:{
        'Content-Type':"application/json"
      }
    });

    if(!response.ok){
      throw new Error("failed to fetch data. please try again later")
    }

    response = await response.json()
    
    setFoodItem(response[0])
    setFoodCat(response[1])
  } catch(err){
    setError(err.message);
  } finally{
    setLoading(false);
  }

}

  useEffect(() => {
    loadData();
  }, [])


  return (
    <div>
        <div>   <Navbar />  </div>

      <div>    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-caption" style={{zIndex:10}}>
    <div className="d-flex justify-content-center" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)} }/>
    </div>
    </div>
    <div className="carousel-item active w-100" >
      <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{filter: "brightness(30%)",height:"700px", objectFit:"cover"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{filter: "brightness(30%)",height:"700px", objectFit:"cover"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2023/12/18/14/10/ai-generated-8456146_1280.jpg" className="d-block w-100" style={{filter: "brightness(30%)",height:"700px", objectFit:"cover"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src={hamburger} className="d-block w-100" style={{filter: "brightness(30%)",height:"700px", objectFit:"cover"}} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div> 
</div>
          {
            loading ? (
              <div style={{display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "100vh"}}>
                <h2>Loading...</h2>
              </div>
            ) : error ? (
              <h2 style={{ color: "red" }}>{error}</h2>
            ) : (
              <div className="m-3 container">
                {foodCat.length > 0 ? (
                  foodCat.map((data) => (
                    <div className="row mb-3" key={data._id}>
                      <div className="fs-3 m-3 font-outfit">{data.CategoryName}</div>
                      <hr />
                      {foodItem.length > 0 ? (
                        foodItem
                          .filter(
                            (item) =>
                              item.CategoryName === data.CategoryName &&
                              item.name.toLowerCase().includes(search.toLowerCase())
                          )
                          .map((filteredItems) => (
                            <div key={filteredItems._id} className="col-12 col-md-6 col-lg-3">
                              <Card foodItem={filteredItems} options={filteredItems.options[0]} />
                            </div>
                          ))
                      ) : (
                        <div>No such Data Found</div>
                      )}
                    </div>
                  ))
                ) : (
                  <h2>No data available</h2>
                )}
              </div>
            )
          }
  
        
        <div>   <Footer />  </div>
      
    </div>
  );
};

export default Home;
