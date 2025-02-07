import { Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Login from './auth/Login';
import Signup from './auth/Singup';
import Home from "./pages/Home";
import NotFound from "./pages/404";
import homebg from './images/Homebg.jpg';
import HomeBanner from "./banner/HomeBanner";
function HomeApp() {
  return (
    <div className="w-full">
      <div className="header w-full h-[750px] bg-cover opacity-85 "
       style={{ backgroundImage: `url(${homebg})` }}>
        <Header />
        <HomeBanner/>
      </div>
      <div className="w-full">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="footer w-full">
        <Footer />
      </div>
    </div>
  )
}
export default HomeApp;