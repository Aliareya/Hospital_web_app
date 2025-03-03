import { Icon } from '@iconify-icon/react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate()
  return (
    <li className='list-none cursor-pointer ' onClick={()=>navigate('/cart')}>
      <Icon icon="raphael:cart" width={30} height={30} style={{ color: '#fff' }} />
      <span className='w-[21px] h-[21px] text-white bg-red-600 rounded-full absolute flex justify-center
        items-center top-[26px] right-32 pt-[2px] pr-[2px] text-sm font-semibold'>1</span>
    </li>
  )
}

export default Cart;