import React from 'react';
import Rest1 from "../../assets/images/restaurant-logo/logo1.svg"
import Rest2 from "../../assets/images/restaurant-logo/logo2.svg"
import Rest3 from "../../assets/images/restaurant-logo/logo3.svg"
import Rest4 from "../../assets/images/restaurant-logo/logo4.svg"
import Rest5 from "../../assets/images/restaurant-logo/logo5.svg"
import Rest6 from "../../assets/images/restaurant-logo/logo6.svg"
import Rest7 from "../../assets/images/restaurant-logo/logo7.svg"
import Rest8 from "../../assets/images/restaurant-logo/logo8.svg"
import Feat1 from "../../assets/images/featured-restaurants/feat-1.png"
import Feat2 from "../../assets/images/featured-restaurants/feat-2.png"
import Feat3 from "../../assets/images/featured-restaurants/feat-3.png"
import Feat4 from "../../assets/images/featured-restaurants/feat-4.png"
import Feat5 from "../../assets/images/featured-restaurants/feat-5.png"
import Feat6 from "../../assets/images/featured-restaurants/feat-6.png"
import Feat7 from "../../assets/images/featured-restaurants/feat-7.png"
import Feat8 from "../../assets/images/featured-restaurants/feat-8.png"

function FeaturedRest() {
  return (
    <section className="featured-restaurant py-5">
      <h1 className="fw-bold text-center mt-5">Featured Restaurants</h1>

      <div className="card-group mt-5 mx-5">
        {/* Card 1 */}
        <div className="card mx-3">
          <div className="top-10 tags-portion p-2">
            <i className="fa-solid fa-tag" style={{ color: '#ffffff' }}></i>
            <span>20% off</span>
          </div>
          <div className="top-10 clocks-portion p-2">
            <i className="fa-solid fa-clock" style={{ color: '#ffffff' }}></i>
            <span>Fast</span>
          </div>
          <img
            src={Feat1}
            className="card-img-top rounded"
            alt="Food World"
          />
          <div className="card-body">
            <div className="logo-def">
              <img src={Rest1} alt="" />
              <h5 className="card-title fw-bolder">Food World</h5>
            </div>
            <p className="card-text card-para">
              <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> 46
            </p>
          </div>
          <div className="card-body px-5 text-center">
            <span className="badge bg-soft-danger py-2 px-3">
              <span className="fs-5 text-danger days-remaining">Opens Tomorrow</span>
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card mx-3">
          <div className="top-10 tags-portion p-2">
            <i className="fa-solid fa-tag" style={{ color: '#ffffff' }}></i>
            <span>10% off</span>
          </div>
          <div className="top-10 clocks-portion p-2">
            <i className="fa-solid fa-clock" style={{ color: '#ffffff' }}></i>
            <span>Fast</span>
          </div>
          <img
            src={Feat2}
            className="card-img-top rounded"
            alt="Pizza Hub"
          />
          <div className="card-body">
            <div className="logo-def">
              <img src={Rest2} alt="" />
              <h5 className="card-title fw-bolder">Pizza Hub</h5>
            </div>
            <p className="card-text card-para">
              <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> 40
            </p>
          </div>
          <div className="card-body px-5 text-center">
            <span className="badge bg-soft-danger py-2 px-3">
              <span className="fs-5 text-danger days-remaining">Opens Tomorrow</span>
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card mx-3">
          <div className="top-10 tags-portion p-2">
            <i className="fa-solid fa-tag" style={{ color: '#ffffff' }}></i>
            <span>15% off</span>
          </div>
          <div className="top-10 clocks-portion p-2">
            <i className="fa-solid fa-clock" style={{ color: '#ffffff' }}></i>
            <span>Fast</span>
          </div>
          <img
            src={Feat3}
            className="card-img-top rounded"
            alt="Donuts Hut"
          />
          <div className="card-body">
            <div className="logo-def">
              <img src={Rest3} alt="" />
              <h5 className="card-title fw-bolder">Donuts Hut</h5>
            </div>
            <p className="card-text card-para">
              <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> 20
            </p>
          </div>
          <div className="card-body px-5 text-center">
            <span className="badge bg-soft-danger py-2 px-3">
              <span className="fs-5 text-success days-remaining-open">Open Now</span>
            </span>
          </div>
        </div>

        <div className="card mx-3">
          <div className="top-10 tags-portion p-2">
            <i className="fa-solid fa-tag" style={{ color: '#ffffff' }}></i>
            <span>15% off</span>
          </div>
          <div className="top-10 clocks-portion p-2">
            <i className="fa-solid fa-clock" style={{ color: '#ffffff' }}></i>
            <span>Fast</span>
          </div>
          <img
            src={Feat4}
            className="card-img-top rounded"
            alt="Donuts Hut"
          />
          <div className="card-body">
            <div className="logo-def">
              <img src={Rest4} alt="" />
              <h5 className="card-title fw-bolder">Donuts Hut</h5>
            </div>
            <p className="card-text card-para">
              <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> 50
            </p>
          </div>
          <div className="card-body px-5 text-center">
            <span className="badge bg-soft-danger py-2 px-3">
              <span className="fs-5 text-success days-remaining-open">Open Now</span>
            </span>
          </div>
        </div>
      </div>

      <div className="card-group mt-5 mx-5">
        <div className="card mx-3">
          <div className="top-10 tags-portion p-2">
            <i className="fa-solid fa-tag" style={{ color: '#ffffff' }}></i>
            <span>10% off</span>
          </div>
          <div className="top-10 clocks-portion p-2">
            <i className="fa-solid fa-clock" style={{ color: '#ffffff' }}></i>
            <span>Fast</span>
          </div>
          <img
            src={Feat5}
            className="card-img-top rounded"
            alt=""
          />
          <div className="card-body">
            <div className="logo-def">
              <img src={Rest5} alt="" />
              <h5 className="card-title fw-bolder">Ruby Tuesday</h5>
            </div>
            <p className="card-text card-para">
              <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> 50
            </p>
          </div>
          <div className="card-body px-5 text-center">
            <span className="badge bg-soft-danger py-2 px-3">
              <span className="fs-5 text-success days-remaining-open">Open Now</span>
            </span>
          </div>
        </div>

        <div className="card mx-3">
          <div className="top-10 tags-portion p-2">
            <i className="fa-solid fa-tag" style={{ color: '#ffffff' }}></i>
            <span>10% off</span>
          </div>
          <div className="top-10 clocks-portion p-2">
            <i className="fa-solid fa-clock" style={{ color: '#ffffff' }}></i>
            <span>Fast</span>
          </div>
          <img
            src={Feat6}
            className="card-img-top rounded"
            alt=""
          />
          <div className="card-body">
            <div className="logo-def">
              <img src={Rest6} alt="" />
              <h5 className="card-title fw-bolder">Kutata Chicken Fried</h5>
            </div>
            <p className="card-text card-para">
              <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> 80
            </p>
          </div>
          <div className="card-body px-5 text-center">
            <span className="badge bg-soft-danger py-2 px-3">
              <span className="fs-5 text-success days-remaining-open">Open Now</span>
            </span>
          </div>
        </div>

        <div className="card mx-3">
          <div className="top-10 tags-portion p-2">
            <i className="fa-solid fa-tag" style={{ color: '#ffffff' }}></i>
            <span>15% off</span>
          </div>
          <div className="top-10 clocks-portion p-2">
            <i className="fa-solid fa-clock" style={{ color: '#ffffff' }}></i>
            <span>Fast</span>
          </div>
          <img
            src={Feat7}
            className="card-img-top rounded"
            alt=""
          />
          <div className="card-body">
            <div className="logo-def">
              <img src={Rest7} alt="" />
              <h5 className="card-title fw-bolder">Kutata Chicken Fried</h5>
            </div>
            <p className="card-text card-para">
              <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> 30
            </p>
          </div>
          <div className="card-body px-5 text-center">
            <span className="badge bg-soft-danger py-2 px-3">
              <span className="fs-5 text-success days-remaining-open">Open Now</span>
            </span>
          </div>
        </div>

        <div className="card mx-3">
          <div className="top-10 tags-portion p-2">
            <i className="fa-solid fa-tag" style={{ color: '#ffffff' }}></i>
            <span>10% off</span>
          </div>
          <div className="top-10 clocks-portion p-2">
            <i className="fa-solid fa-clock" style={{ color: '#ffffff' }}></i>
            <span>Fast</span>
          </div>
          <img
            src={Feat8}
            className="card-img-top rounded"
            alt=""
          />
          <div className="card-body">
            <div className="logo-def">
              <img src={Rest8} alt="" />
              <h5 className="card-title fw-bolder">Taco Bell</h5>
            </div>
            <p className="card-text card-para">
              <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> 60
            </p>
          </div>
          <div className="card-body px-5 text-center">
            <span className="badge bg-soft-danger py-2 px-3">
              <span className="fs-5 text-success days-remaining-open">Open Now</span>
            </span>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center mt-5">
        <a className="btn btn-lg btn-primary bg-warning" href="#!">
          View All <i className="fa fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default FeaturedRest;

