import { useNavigate } from "react-router-dom";

function Menus() {
  const navigate = useNavigate()
  const menus = [
    { title: 'Home', link: '/', submenu: false },
    { title: 'Aboute', link: '/about', submenu: false },
    { title: 'Shop', link: '/shop', submenu: false },
    { title: 'Services', link: '/services', submenu: true },
    { title: 'FQA', link: '/fqa', submenu: false },
    { title: 'Contact', link: '/contact', submenu: false },
    { title: 'Doctors', link: '/doctors', submenu: false },
    { title: 'Signup', link: '/signup', submenu: false }
  ]

  return (
    <div className="w-4/5 h-28 flex items-center justify-center gap-10">
      {menus.map((menu, index) => {
        return (
          <li key={index} className='group list-none cursor-pointer'>
            <span onClick={() => navigate(`${menu.link}`)} className=' text-xl font-semibold text-white'>{menu.title}</span>
            {menu.submenu && <div className="absolute top-[75px] p-1.5 w-44 bg-[#2e5480] hidden group-hover:block rounded">
              <li className=' list-none cursor-pointer w-40 ml-1'>
                <span className=' text-lg font-semibold text-white '>Progect</span>
              </li>
              <div className="absolute left-4 w-4 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-[#2e5480] -top-2"></div>
            </div>}
          </li>
        )
      })}
    </div>
  )
}

export default Menus;