const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-caption" style={{zIndex:10}}>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success text-white bg-warning" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1600728619239-d2a73f7aa541?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./assets/hamburger-494706_1280.jpg" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..." />
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
  );
};

export default Carousel;
