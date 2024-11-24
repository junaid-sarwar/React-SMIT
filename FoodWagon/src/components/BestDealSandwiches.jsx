import React from 'react'
import SandwichPic1 from "../../assets/images/best-deal-sandwiches/img1.png";
import SandwichPic2 from "../../assets/images/best-deal-sandwiches/img2.png";
import SandwichPic3 from "../../assets/images/best-deal-sandwiches/img3.png";

function BestDealSandwiches() {
  return (
    <>
    <section className="pb-5 py-5 pt-8 best-deal-sandwiches">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card card-span mb-3 shadow-lg">
                  <div className="card-body py-0">
                    <div className="row justify-content-center">
                      <div className="col-md-5 col-xl-7 col-xxl-8 g-0 order-0 order-md-1"><img className="img-fluid rounded-top rounded-md-end rounded-md-top-0" src={SandwichPic1} alt="..."/></div>
                      <div className="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                        <h1 className="card-title mt-xl-5 mb-4 fw-bold">Best deals <span className="text-primary text-warning"> Crispy Sandwiches</span></h1>
                        <p className="fs-5">Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.</p>
                        <div className="d-grid bottom-0"><a className="btn btn-lg btn-primary mt-xl-6 bg-warning" href="#!">PROCEED TO ORDER<i className="fas fa-chevron-right ms-2"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    <section class="py-0">
    <div class="container">
    <div class="row">
        <div class="col-12">
        <div class="card card-span mb-3 shadow-lg">
            <div class="card-body py-0">
            <div class="row justify-content-center">
                <div class="col-md-5 col-xl-7 col-xxl-8 g-0 order-md-0"><img class="img-fluid rounded-top rounded-md-start rounded-md-top-0" src={SandwichPic2} alt="..."/></div>
                <div class="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                <h1 class="card-title mt-xl-5 mb- fw-bold">Celebrate parties with <span class="text-primary text-warning">Fried Chicken</span></h1>
                <p class="fs-5">Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.</p>
                <div class="d-grid bottom-0"><a class="btn btn-lg btn-primary mt-xl-6 bg-warning" href="#!">PROCEED TO ORDER<i class="fas fa-chevron-right ms-2"></i></a></div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </section>

    <section class="pt-5">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="card card-span mb-3 shadow-lg">
                  <div class="card-body py-0">
                    <div class="row justify-content-center">
                      <div class="col-md-5 col-xl-7 col-xxl-8 g-0 order-0 order-md-1"><img class="img-fluid  rounded-top rounded-md-end rounded-md-top-0" src={SandwichPic3} alt="..."/></div>
                      <div class="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                        <h1 class="card-title mt-xl-5 mb-4 fw-bold">Wanna eat hot &amp; <span class="text-primary text-warning">spicy Pizza?</span></h1>
                        <p class="fs-5">Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.</p>
                        <div class="d-grid bottom-0"><a class="btn btn-lg btn-primary mt-xl-6 bg-warning" href="#!">PROCEED TO ORDER<i class="fas fa-chevron-right ms-2"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default BestDealSandwiches