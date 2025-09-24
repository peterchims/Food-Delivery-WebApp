import Nav from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Cart from './pages/Cart/cart';
import Placeorder from './pages/placeorder/placeorder';
import Footer from './components/footer/footer';
import Login from './components/LoginPage/Login';
import NotFound from './pages/NotFoundPage';
import ErrorBoundary from './components/ErrorBoundary';
import { useState } from 'react';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <ErrorBoundary>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <div className="app">
        <Nav setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
