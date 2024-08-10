import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
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
import Sss from './components/promotion/Sss';
import KVKK from './components/promotion/KVKK';
import Policy from './components/promotion/Policy';
import PanelNavbar from './components/panel/partials/PanelNavbar';
import Lessons from './pages/panel/Lessons';
import LiveLessons from './pages/panel/LiveLessons';
import ProtectedLayout from './components/promotion/ProtectedLayout';
import Messages from './pages/panel/Messages';
import Notes from './pages/panel/Notes';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path='/'
            element={<Layout />}>
            <Route
              index
              element={<Home />}
            />
            <Route
              path='hakkimizda'
              element={<About />}
            />
            <Route
              path='planlar'
              element={<Plans />}
            />
            <Route
              path='cocuklar'
              element={<Children />}
            />
            <Route
              path='liseliler'
              element={<Teens />}
            />
            <Route
              path='yetiskinler'
              element={<Adults />}
            />
            <Route
              path='ucretsiz-deneme'
              element={<Trial />}
            />
            <Route
              path='giris-yap'
              element={<Login />}
            />
            <Route
              path='kayit-ol'
              element={<Signup />}
            />
            <Route
              path='sss'
              element={<Sss />}
            />
            <Route
              path='kvkk'
              element={<KVKK />}
            />
            <Route
              path='gizlilik-politikasi'
              element={<Policy />}
            />
          </Route>
          <Route
            path='/panel'
            element={
              <ProtectedLayout>
                <PanelLayout />
              </ProtectedLayout>
            }>
            <Route
              path='dersler'
              element={<Lessons />}
            />
            <Route
              path='canli-dersler'
              element={<LiveLessons />}
            />
            <Route
              path='mesajlar'
              element={<Messages />}
            />
            <Route
              path='notlar'
              element={<Notes />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const PanelLayout = () => {
  return (
    <>
      <PanelNavbar />
      <Outlet />
    </>
  );
};
export default App;
