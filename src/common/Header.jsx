import logo from '../images/logo2.svg';
import { useState , useEffect } from 'react';
import Menus from './Menus';
import Search from '../search/Search';
import Cart from '../cart/Cart';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className={`${isScrolled ?'bg-[#002948] opacity-90 z-50':''} w-full h-28 flex justify-center fixed top-0  `}>
      <div className="w-[20%] h-28 flex justify-center items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="w-4/5 h-28 flex items-center  pl-32">
        <Menus/>
        <div className='w-1/5 h-28 flex items-center gap-10 justify-center'>
          <Cart/>
          <Search/>
        </div>
      </div>
    </div>
  )
}
export default Header;