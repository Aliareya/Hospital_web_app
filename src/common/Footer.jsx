import footerbg from '../images/footerbg.png';
import logo from '../images/logo.svg';
import { Icon } from '@iconify-icon/react';

function Footer() {
  return (
    <div className="w-full h-[300px] bg-[#c1ccd1] bg-cover bg-center flex justify-center pt-5 gap-6"
      style={{ backgroundImage: `url(${footerbg})` }}>
      <div className='w-[20%] h-[250px] p-3'>
        <img src={logo} alt="" />
        <p className='text-lg pt-6 font-semibold text-[#768997]'>Mattis inelit neque quis donec eleifnd amet.
          Amet sed et cursus eu euismod.
          Egestas in morbi tristique.
        </p>
        <div className='flex gap-4 pt-4'>
          <Icon icon="mingcute:facebook-line" width="35" height="35" style={{ color: '#244a62' }} />
          <Icon icon="ri:twitter-x-line" width="33" height="33" style={{ color: '#244a62' }} />
          <Icon icon="mingcute:instagram-line" width="35" height="35" style={{ color: '#244a62' }} />
          <Icon icon="formkit:linkedin" width="35" height="35" style={{ color: '#244a62' }} />
        </div>
      </div>
      <div className='w-[20%] h-[250px] flex flex-col pl-14 pt-6'>
        <h1 className='text-2xl font-bold text-[#000c47]'>Quick Links</h1>
        <div className='pt-4 flex flex-col gap-2'>
          {
            ['Home', "About", "Services", "Latest News", "Team"].map((value, index) => {
              return (
                <li key={index} className='list-none cursor-pointer'>
                  <span className='text-xl font-semibold text-[#5b6c79] hover:text-[#244a62]'>{value}</span>
                </li>
              )
            })
          }
        </div>
      </div>
      <div className='w-[20%] h-[250px] flex flex-col pl-7 pt-6'>
        <h1 className='text-2xl font-bold text-[#000c47]'>Useful Links</h1>
        <div className='pt-4 flex flex-col gap-2'>
          {
            ["Shop", "Cart", "Contact us", "FAQ", "Projects"].map((value, index) => {
              return (
                <li key={index} className='list-none cursor-pointer'>
                  <span className='text-xl font-semibold text-[#5b6c79] hover:text-[#244a62]'>{value}</span>
                </li>
              )
            })
          }
        </div>
      </div>
      <div className='w-[20%] h-[250px] flex flex-col pl-7 pt-6'>
        <h1 className='text-2xl font-bold text-[#000c47]'>Contact Us</h1>
        <div className='pt-4 flex flex-col gap-2'>
          <li className='list-none flex items-center gap-3 '>
            <Icon icon="ic:outline-email" width="23" height="23" style={{ color: '#244a62' }} />
            <span className='text-lg font-semibold text-[#5b6c79]'>
              medically@gmail.com
            </span>
          </li>
          <li className='list-none flex items-center gap-3 pt-2 '>
            <Icon icon="iconoir:phone-solid" width="23" height="23" style={{ color: '#244a62' }} />
            <span className='text-lg font-semibold text-[#5b6c79]'>
              (208) 555-0112 <br></br>
              (704) 555-0127
            </span>
          </li>
          <li className='list-none flex items-center gap-3 pt-2 '>
            <Icon icon="mdi:location" width="23" height="23" style={{ color: '#244a62' }} />
            <span className='text-lg font-semibold text-[#5b6c79]'>
              4517 Washington Ave.<br></br>
              Manchter, Kentucky 495
            </span>
          </li>
        </div>
      </div>
    </div>
  )
}
export default Footer;