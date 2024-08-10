import React, { useState } from 'react'
import Header from '../../components/Header'
import ExploreMenu from '../../components/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay';
import DownloadApp from '../../components/DownloadApp';

const Home = () => {
    const [category, setCategory] = useState("All");
    
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <DownloadApp />
    </div>
  )
}

export default Home
