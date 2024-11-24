import React from 'react'
import DiscountIcon1 from "../../assets/images/after-search-by-food/icon1.svg"
import DiscountIcon2 from "../../assets/images/after-search-by-food/icon2.svg"
import DiscountIcon3 from "../../assets/images/after-search-by-food/icon3.svg"
import PhonePic from "../../assets/images/after-search-by-food/phone.png"
import AfterSearchBanner from "../../assets/images/after-search-bg/another-banner.png"
import AppStoreLogo from "../../assets/images/download-btn/app-store.svg"
import PlayStoreLogo from "../../assets/images/download-btn/play-store.svg"

function DailyDiscounts() {
  return (
    <section className="daily-discounts">
      <div className="bg-holder"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-10">
            <div className="card card-span shadow-warning" style={{ borderRadius: "35px" }}>
              <div className="card-body py-5">
                <div className="row justify-content-evenly">
                  <div className="col-md-3">
                    <div className="d-flex d-md-block d-xl-flex justify-content-evenly justify-content-lg-between">
                      <img src={DiscountIcon1} width="100" alt="Discount Icon 1" />
                      <div className="d-flex d-lg-block d-xl-flex flex-center">
                        <h2 className="fw-bolder text-1000 mb-0 text-gradient">Daily<br className="d-none d-md-block" />Discounts </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 hr-vertical">
                    <div className="d-flex d-md-block d-xl-flex justify-content-evenly justify-content-lg-between">
                      <img src={DiscountIcon2} width="100" alt="Discount Icon 2" />
                      <div className="d-flex d-lg-block d-xl-flex flex-center">
                        <h2 className="fw-bolder text-1000 mb-0 text-gradient">Live Tracking</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 hr-vertical">
                    <div className="d-flex d-md-block d-xl-flex justify-content-evenly justify-content-lg-between">
                      <img src={DiscountIcon3} width="100" alt="Discount Icon 3" />
                      <div className="d-flex d-lg-block d-xl-flex flex-center">
                        <h2 className="fw-bolder text-1000 mb-0 text-gradient">Quick Delivery </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-center mt-md-8">
          <div className="col-lg-5 d-none d-lg-block" style={{ marginBottom: "-122px" }}>
            <img className="w-100 phone-image" src={PhonePic} alt="Phone" />
          </div>
          <div className="col-lg-5 mt-7 mt-md-0">
            <h1 className="text-warning">Install the app</h1>
            <p>It's never been easier to order food. Look for the finest <br className="d-none d-xl-block" />discounts and you'll be lost in a world of delectable food.</p>
            <a className="pe-2" href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={AppStoreLogo} width="160" alt="App Store" />
            </a>
            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
              <img src={PlayStoreLogo} width="160" alt="Play Store" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DailyDiscounts
