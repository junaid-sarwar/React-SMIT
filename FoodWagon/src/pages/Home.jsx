import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Cards from '../components/Cards'
import HowDoes from '../components/HowDoes'
import PopularItems from '../components/PopularItems'
import FeaturedRest from '../components/FeaturedRest'
import SearchByFood from '../components/SearchByFood'
import DailyDiscounts from '../components/DailyDiscounts'
import BestDealSandwiches from '../components/BestDealSandwiches'
import Footer from '../components/Footer'
import '../../assets/css/style.css'

function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <Cards/>
    <HowDoes/>
    <PopularItems/>
    <FeaturedRest/>
    <SearchByFood/>
    <DailyDiscounts/>
    <BestDealSandwiches/>
    <Footer/>
    </>
  )
}

export default Home