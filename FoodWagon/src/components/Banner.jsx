import React from 'react'
import BannerFoodPic from "../../assets/images/banner-food-pic/food-banner.png"

function Banner() {
  return (
    // <!-- ARE YOU STARVING SECTION -->

      <section className="py-5 overflow-hidden bg-warning" id="home">
        <div className="container">
          <div className="row flex-center">
            <div className="col-md-5 col-lg-6 order-0 order-md-1 mt-8 mt-md-0"><a className="img-landing-banner" href="#!"><img className="img-fluid mt-4 food-banner-pic" src={BannerFoodPic} alt="hero-header" /></a></div>
            <div className="col-md-7 col-lg-6 py-8 text-md-start text-center">
              <h1 className="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light fw-bold">Are you starving?</h1>
              <h1 className="text-800 mb-5 fs-4">Within a few clicks, find meals that<br className="d-none d-xxl-block" />are accessible near you</h1>
              <div className="card w-xxl-75">
                <div className="card-body">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist"><button className="nav-link active mb-3" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i className="fas fa-motorcycle me-2"></i>Delivery</button><button className="nav-link mb-3" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><i className="fas fa-shopping-bag me-2"></i>Pickup</button></div>
                  </nav>
                  <div className="tab-content mt-3" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <form className="row gx-2 gy-2 align-items-center">
                        <div className="col">
                          <div className="input-group-icon"><i className="fas fa-map-marker-alt text-danger input-box-icon"></i><label className="visually-hidden" for="inputDelivery">Address</label><input className="form-control input-box form-foodwagon-control" id="inputDelivery" type="text" placeholder="Enter Your Address" /></div>
                        </div>
                        <div className="d-grid gap-3 col-sm-auto"><button className="btn btn-danger" type="submit">Find Food</button></div>
                      </form>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <form className="row gx-4 gy-2 align-items-center">
                        <div className="col">
                          <div className="input-group-icon"><i className="fas fa-map-marker-alt text-danger input-box-icon"></i><label className="visually-hidden" for="inputPickup">Address</label><input className="form-control input-box form-foodwagon-control" id="inputPickup" type="text" placeholder="Enter Your Address" /></div>
                        </div>
                        <div className="d-grid gap-3 col-sm-auto"><button className="btn btn-danger" type="submit">Find Food</button></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Banner