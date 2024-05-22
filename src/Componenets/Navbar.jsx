import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <div>
    //   <nav>
    //     <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //       <div className="container-fluid">
    //         <h1><span><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/GUVI_logo.png" alt="GUVI img" style={{width:"100px"}}/></span></h1>
    //         <button
    //           className="navbar-toggler"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarNavDropdown"
    //           aria-controls="navbarNavDropdown"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //           <ul className="navbar-nav">
    //             <li className="nav-item">
    //               <Link to="/">All</Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/fsd">Full Stack Development</Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/ds">Data Science</Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/cs">Cyber Security</Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/career">Career</Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
    //   </nav>
    // </div>

    <>
    <nav className="navbar navbar-expand-lg bg-success overflow-hidden  ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
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
        <div className="collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav  ">
            <li className="nav-item">
              <Link to="/">ALL</Link>
            </li>
            <li className="nav-item">
              <Link to="/fsd">FULL STACK DEVELOPMENT</Link>
            </li>
            <li className="nav-item">
              <Link to="/ds">DATA SCIENCE</Link>
            </li>
            <li className="nav-item">
              <Link to="/cs">CYBER SCECURITY</Link>
            </li>
            <li className="nav-item">
              <Link to="/career">CAREER</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  );
};

export default Navbar;
