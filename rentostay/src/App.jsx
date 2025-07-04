import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import HotProjects from './component/HotProjects'
import EssentialServices from './component/EssentialServices'
import DiscoverMore from './component/DiscoverProperties'
import DiscoverProperties from './component/DiscoverProperties'
import PropertyPriceInsights from './component/PropertyPriceInsights'
import TopLocalities from './component/TopLocalities'
import TopDevelopers from './component/TopDevelopers'
import PopularCities from './component/PopularCities'
import Footer from './component/Footer'
import ReadMoreSection from './component/ReadMoreSection'
import DownloadAppSection from './component/DownloadAppSection'
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <HotProjects/>
      <EssentialServices/>
      <DiscoverProperties/>
      <PropertyPriceInsights/>
      <TopLocalities/>
      <TopDevelopers/>
      <PopularCities/>
      <ReadMoreSection/>
     <DownloadAppSection/>
      <Footer/>
      
    </div>
    
  )
}

export default App