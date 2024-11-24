import React from 'react';
import Icon1 from "../../assets/images/Icon-pics/Icons.png";
import Icon2 from "../../assets/images/Icon-pics/Icons-2.png";
import Icon3 from "../../assets/images/Icon-pics/Icons-3.png";
import Icon4 from "../../assets/images/Icon-pics/Icons-4.png";

function HowDoes() {
  return (
    <section className="py-0 bg-primary-gradient how-does-work">
      <div className="container">
        <div className="row justify-content-center g-0">
          <div className="col-xl-9">
            <div className="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
              <h5 className="fw-bold text-danger fs-3 fs-lg-5 lh-sm my-6">How does it work</h5>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 mb-6">
                <div className="text-center">
                  <img
                    className="shadow-icon"
                    src={Icon1}
                    height="112"
                    alt="Select location"
                  />
                  <h5 className="mt-4 fw-bold">Select location</h5>
                  <p className="mb-md-0">
                    Choose the location where your food will be delivered.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-6">
                <div className="text-center">
                  <img
                    className="shadow-icon"
                    src={Icon2}
                    height="112"
                    alt="Choose order"
                  />
                  <h5 className="mt-4 fw-bold">Choose order</h5>
                  <p className="mb-md-0">
                    Check over hundreds of menus to pick your favorite food.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-6">
                <div className="text-center">
                  <img
                    className="shadow-icon"
                    src={Icon3}
                    height="112"
                    alt="Pay advanced"
                  />
                  <h5 className="mt-4 fw-bold">Pay advanced</h5>
                  <p className="mb-md-0">
                    It's quick, safe, and simple. Select several methods of payment.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-6">
                <div className="text-center">
                  <img
                    className="shadow-icon"
                    src={Icon4}
                    height="112"
                    alt="Enjoy meals"
                  />
                  <h5 className="mt-4 fw-bold">Enjoy meals</h5>
                  <p className="mb-md-0">
                    Food is made and delivered directly to your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowDoes;
