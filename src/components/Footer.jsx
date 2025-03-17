import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div>
   <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top font-outfit">
      
  <div className="col-md-4 d-flex align-items-center">
    <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      
    </Link>
    <span className="text-white ms-2">© 2025 The Food Hub, Inc</span>
  </div>
      
  <span className="text-white ms-auto me-3">Nikhil - All Rights Reserved</span>
</footer>
    </div>
  )
}

export default Footer
