import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/promotion/Home';
import About from './pages/promotion/About';
import Plans from './pages/promotion/Plans';
import Trial from './pages/promotion/Trial';
import Children from './pages/promotion/Children';
import Teens from './pages/promotion/Teens';
import Adults from './pages/promotion/Adults';
import Navbar from './components/promotion/partials/Navbar';
import Footer from './components/promotion/partials/Footer';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Sss from './components/Sss';
import KVKK from './components/KVKK';
import Policy from './components/Policy';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/hakkimizda' element={<About />} />
          <Route path='/planlar' element={<Plans />} />
          <Route path='/cocuklar' element={<Children />} />
          <Route path='/liseliler' element={<Teens />} />
          <Route path='/yetiskinler' element={<Adults />} />
          <Route path='/ucretsiz-deneme' element={<Trial />} />
          <Route path='/giris-yap' element={<Login />} />
          <Route path='/kayit-ol' element={<Signup />} />
          <Route path='/sss' element={<Sss/>} />
          <Route path='/kvkk' element={<KVKK />} />
          <Route path='/gizlilik-politikasi' element={<Policy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
