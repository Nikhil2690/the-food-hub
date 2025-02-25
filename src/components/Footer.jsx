import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div>
   <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      {/*  Copyright */}
  <div className="col-md-4 d-flex align-items-center">
    <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      {/* Add logo or icon */}
    </Link>
    <span className="text-white">© 2025 The Food Hub, Inc</span>
  </div>
      {/* Name + All Rights Reserved */}
  <span className="text-white ms-auto">Nikhil - All Rights Reserved</span>
</footer>
    </div>
  )
}

export default Footer
