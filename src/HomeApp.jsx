import { Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Login from './auth/Login';
import Signup from './auth/Singup';
import Home from "./pages/Home";
import NotFound from "./pages/404";
import homebg from './images/Homebg.jpg';
import bannerbg from './images/bag.jpg';
import HomeBanner from "./banner/HomeBanner";
import Banner from "./banner/Banner";
import Cart from "./pages/Cart";
import { useLocation } from "react-router-dom";

function HomeApp() {
  const location = useLocation();
  const location_rout = location.pathname;
  const banner_image = location.pathname === '/' ? homebg : bannerbg ;
  console.log(location.pathname)

  return (
    <div className="w-full signup">
      <div className={`header w-full ${location_rout === '/' ?'h-[750px]':'h-[450px]'} bg-cover bg-center `}
       style={{ backgroundImage: `url(${banner_image})` }}>
        <Header />
        {location_rout === "/" ?
          <HomeBanner/>:
          <Banner/>
        }
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
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