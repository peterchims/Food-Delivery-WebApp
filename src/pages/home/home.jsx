import React, { useState } from 'react';
import './home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Fooddisplay from '../../components/foodDisplay/foodDisplay'; 
import AppDwonload from '../../components/AppDownload/AppDwonload';

const Home = () => {

const [category,setCategory] = useState("All");

  return (
    <div>
     <Header />
     <ExploreMenu category={category} setCategory={setCategory} />
     <Fooddisplay  category={category} />
     <AppDwonload />
    </div>
  )
}

export default Home
