import React, { useState } from 'react';
import './home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import fDisplay from '../../components/foodDisplay/foodDisplay';

const Home = () => {

const [category,setCategory] = useState("All");

  return (
    <div>
     <Header />
     <ExploreMenu category={category} setCategory={setCategory} />
     <fDisplay  category={category} />
    </div>
  )
}

export default Home
