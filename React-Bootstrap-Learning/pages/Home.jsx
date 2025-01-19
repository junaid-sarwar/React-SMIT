import React from 'react'

import Header from '../src/components/Header'
import Banner from '../src/components/Banner'
import PopularPrints from '../src/components/PopularPrints'
import Collections from '../src/components/Collections'
import Footer from '../src/components/Footer'

function Home() {
  return (
    <>
        <Header/>
            <Banner/>
            <PopularPrints/>
            <Collections/>
            <Footer/>
    </>
  )
}

export default Home