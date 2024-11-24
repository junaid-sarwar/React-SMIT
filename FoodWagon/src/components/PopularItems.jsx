import React from 'react';
import Popular1 from "../../assets/images/popular-items/popular-1.png";
import Popular2 from "../../assets/images/popular-items/popular-2.png";
import Popular3 from "../../assets/images/popular-items/popular-3.png";
import Popular4 from "../../assets/images/popular-items/popular-4.png";
import Popular5 from "../../assets/images/popular-items/popular-5.png";

function PopularItems() {
  return (
    <section className="popular-items py-5">
      <h1 className="text-center fw-bold">Popular items</h1>
      <div className="card-group mt-5 mx-5">
        <button className="grey-btn-back">
          <div className="btn rounded-circle pop-arrow-circle mx-3">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        </button>
        <div className="card mx-3">
          <img
            src={Popular1}
            className="card-img-top rounded"
            alt="Cheese Burger"
          />
          <div className="card-body">
            <h5 className="card-title fw-bolder">Cheese Burger</h5>
            <p className="card-text card-para">
              <i className="fa-solid fa-location-dot" style={{ color: "#FFD43B" }}></i> Burger Arena
            </p>
            <p className="card-text fw-bold">$3.88</p>
          </div>
          <div className="btn order-btn">Order Now</div>
        </div>
        <div className="card mx-3">
          <img
            src={Popular2}
            className="card-img-top rounded"
            alt="Cheese Burger"
          />
          <div className="card-body">
            <h5 className="card-title fw-bolder">Cheese Burger</h5>
            <p className="card-text card-para">
              <i className="fa-solid fa-location-dot" style={{ color: "#FFD43B" }}></i> Burger Arena
            </p>
            <p className="card-text fw-bold">$3.88</p>
          </div>
          <div className="btn order-btn">Order Now</div>
        </div>
        <div className="card mx-3">
          <img
            src={Popular3}
            className="card-img-top rounded"
            alt="Cheese Burger"
          />
          <div className="card-body">
            <h5 className="card-title fw-bolder">Cheese Burger</h5>
            <p className="card-text card-para">
              <i className="fa-solid fa-location-dot" style={{ color: "#FFD43B" }}></i> Burger Arena
            </p>
            <p className="card-text fw-bold">$3.88</p>
          </div>
          <div className="btn order-btn">Order Now</div>
        </div>
        <div className="card mx-3">
          <img
            src={Popular4}
            className="card-img-top rounded"
            alt="Cheese Burger"
          />
          <div className="card-body">
            <h5 className="card-title fw-bolder">Cheese Burger</h5>
            <p className="card-text card-para">
              <i className="fa-solid fa-location-dot" style={{ color: "#FFD43B" }}></i> Burger Arena
            </p>
            <p className="card-text fw-bold">$3.88</p>
          </div>
          <div className="btn order-btn">Order Now</div>
        </div>
        <div className="card mx-3">
          <img
            src={Popular5}
            className="card-img-top rounded"
            alt="Cheese Burger"
          />
          <div className="card-body">
            <h5 className="card-title fw-bolder">Cheese Burger</h5>
            <p className="card-text card-para">
              <i className="fa-solid fa-location-dot" style={{ color: "#FFD43B" }}></i> Burger Arena
            </p>
            <p className="card-text fw-bold">$3.88</p>
          </div>
          <div className="btn order-btn">Order Now</div>
        </div>
        <button type="button" className="grey-btn-back">
          <div className="btn rounded-circle pop-arrow-circle mx-3">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </button>
      </div>
    </section>
  );
}

export default PopularItems;
