
import React from 'react';
import Nav from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Cart from './pages/Cart/cart'
import Placeorder from './pages/placeorder/placeorder';
import Footer from './components/footer/footer';
import Login from './components/LoginPage/Login';
import { useState } from 'react';



const App = () => { 

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
<Nav setShowLogin={setShowLogin}/>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/order' element={<Placeorder />} />
</Routes>
</div>
<Footer />
    </>

  )
}

export default App
