import React from 'react'
import Search1FoodPic from "../../assets/images/search-by-food/search-1.png"
import Search2FoodPic from "../../assets/images/search-by-food/search-2.png"
import Search3FoodPic from "../../assets/images/search-by-food/search-3.png"
import Search4FoodPic from "../../assets/images/search-by-food/search-4.png"
import Search5FoodPic from "../../assets/images/search-by-food/search-5.png"
import Search6FoodPic from "../../assets/images/search-by-food/search-6.png"

function SearchByFood() {
  return (
    <section className="search-by-food py-5">
          <div className="row h-100 align-items-center justify-content-center justify-items-center mx-auto">
            <div className="col-sm-6 col-md-4 col-xl mb-5 h-100 ">
              <div className="h-100 rounded-circle"><img className="img-fluid rounded-circle" src={Search1FoodPic} alt="..."/>
                <div className="card-body ps-0">
                  <h5 className="text-center fw-bold text-1000 text-truncate mb-2">Pizza</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
              <div className="h-100 rounded-circle"><img className="img-fluid rounded-circle h-100" src={Search2FoodPic} alt="..."/>
                <div className="card-body ps-0">
                  <h5 className="text-center fw-bold text-1000 text-truncate mb-2">Burger</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
              <div className="h-100 rounded-circle"><img className="img-fluid rounded-circle h-100" src={Search3FoodPic} alt="..."/>
                <div className="card-body ps-0">
                  <h5 className="text-center fw-bold text-1000 text-truncate mb-2">Noodles</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
              <div className="h-100 rounded-circle"><img className="img-fluid rounded-circle h-100" src={Search4FoodPic} alt="..."/>
                <div className="card-body ps-0">
                  <h5 className="text-center fw-bold text-1000 text-truncate mb-2">Sub-sandwiches</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
              <div className="h-100 rounded-circle"><img className="img-fluid rounded-circle h-100" src={Search5FoodPic} alt="..."/>
                <div className="card-body ps-0">
                  <h5 className="text-center fw-bold text-1000 text-truncate mb-2">Chowmein</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
              <div className="h-100 rounded-circle"><img className="img-fluid rounded-circle h-100" src={Search6FoodPic} alt="..."/>
                <div className="card-body ps-0">
                  <h5 className="text-center fw-bold text-1000 text-truncate mb-2">Steak</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default SearchByFood