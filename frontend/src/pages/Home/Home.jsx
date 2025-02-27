import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import FoodItem from '../../components/FoodItem/FoodItem'

const Home = () => {

  const [category,setCategory] = useState("All")
  return (
    <div>
      <Header/> 
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      {/* <FoodItem category={category}/> */}
    </div>
  )
}

export default Home