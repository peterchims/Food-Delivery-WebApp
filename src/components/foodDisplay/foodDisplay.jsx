import React, { useContext } from 'react';
import './foodDisplay.css';
import { StoreContext } from '../ExploreMenu/context/storeContent';

const fDisplay = (category) => {

const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id="food-display">
        <h2>Top dishes near you</h2>
      
    </div>
  )
}

export default fDisplay