import React from 'react';
import card1pic from "../../assets/images/flash-deal-card/card1.svg"
import card2pic from "../../assets/images/flash-deal-card/card2.png"
import card3pic from "../../assets/images/flash-deal-card/card3.png"
import card4pic from "../../assets/images/flash-deal-card/card4.png"

function Cards() {
  return (
    <section className="food-cards py-5">
      <div className="card-group mx-auto">
        <div className="card">
          <div className="card mx-2">
            <img
              src={card1pic}
              className="card-img-top"
              alt="..."
            />
            <div className="discount-badge">
              <div className="d-flex flex-between-center">
                <div className="text-white fs-1 mb-4">15</div>
                <div className="d-block text-white fs-3">
                  % <br />
                  <div className="fw-normal fs-7">Off</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body px-5">
            <h5 className="fw-bold text-1000 text-center">Greys Vage</h5>
            <span className="badge bg-soft-danger py-2 px-3">
              <span className="fs-5 text-danger days-remaining">6 days Remaining</span>
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card mx-2">
            <img
              src={card2pic}
              className="card-img-top"
              alt="..."
            />
            <div className="discount-badge">
              <div className="d-flex flex-between-center">
                <div className="text-white fs-1 mb-4">10</div>
                <div className="d-block text-white fs-3">
                  % <br />
                  <div className="fw-normal fs-7">Off</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body px-5">
            <h5 className="fw-bold text-1000 text-center">Greys Vage</h5>
            <span className="badge bg-soft-danger py-2 px-3">
              <span className="fs-5 text-danger days-remaining">6 days Remaining</span>
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card mx-2">
            <img
              src={card3pic}
              className="card-img-top"
              alt="..."
            />
            <div className="discount-badge">
              <div className="d-flex flex-between-center">
                <div className="text-white fs-1 mb-4">25</div>
                <div className="d-block text-white fs-3">
                  % <br />
                  <div className="fw-normal fs-7">Off</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body px-5">
            <h5 className="fw-bold text-1000 text-center">Greys Vage</h5>
            <span className="badge bg-soft-danger py-2 px-3">
              <span className="fs-5 text-danger days-remaining">6 days Remaining</span>
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card mx-2">
            <img
              src={card4pic}
              className="card-img-top"
              alt="..."
            />
            <div className="discount-badge">
              <div className="d-flex flex-between-center">
                <div className="text-white fs-1 mb-4">20</div>
                <div className="d-block text-white fs-3">
                  % <br />
                  <div className="fw-normal fs-7">Off</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body px-5">
            <h5 className="fw-bold text-1000 text-center">Greys Vage</h5>
            <span className="badge bg-soft-danger py-2 px-3">
              <span className="fs-5 text-danger days-remaining">6 days Remaining</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
