import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderLogo from "../../assets/images/LOGO/header-logo.svg";

function Header() {
  const navigate = useNavigate(); // Initialize the navigate function

  const navigateAbout = () => {
    navigate("/about");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" data-navbar-on-scroll="data-navbar-on-scroll">
      <div className="container">
        <a className="navbar-brand d-inline-flex" href="/">
          <img className="d-inline-block" src={HeaderLogo} alt="logo" />
          <span className="text-1000 fs-3 fw-bold ms-2 text-gradient">foodwaGon</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div className="collapse navbar-collapse border-top border-lg-0 my-2 mt-lg-0" id="navbarSupportedContent">
          <div className="mx-auto pt-5 pt-lg-0 d-block d-lg-none d-xl-block">
            <p className="mb-0 fw-bold text-lg-center">
              Deliver to: <i className="fas fa-map-marker-alt text-warning mx-2"></i>
              <span className="fw-normal">Current Location </span>
              <span>Mirpur 1 Bus Stand, Dhaka</span>
            </p>
          </div>
          <div>
            <button className="btn text-warning fw-bold nav-about" onClick={navigateAbout}>
              About us
            </button>
          </div>
          <form className="d-flex mt-4 mt-lg-0 ms-lg-auto ms-xl-0">
            <div className="input-group-icon pe-2">
              <i className="fas fa-search input-box-icon text-primary"></i>
              <input
                className="form-control border-0 input-box bg-100"
                type="search"
                placeholder="Search Food"
                aria-label="Search"
              />
            </div>
            <button className="btn btn-white shadow-warning text-warning" type="submit">
              <i className="fas fa-user me-2"></i>Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
