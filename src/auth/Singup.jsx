import logo from '../images/signup.jpg';
import { useNavigate } from 'react-router-dom';

function Signup(){
  const navigate = useNavigate()
  return(
    <div className="signup w-full h-screen flex items-center justify-center">
      <div className="w-[60%] h-[600px] flex rounded-2xl shadow-2xl bg-white">
       <div style={{backgroundImage:`url(${logo})`}} className={`rounded-l-2xl w-[45%] h-[600px] bg-cover bg-center`}></div>
       <div className='w-[55%] h-[600px]  rounded-r-2xl'>
        <div className='w-full h-20 flex flex-col justify-center items-center mb-5 mt-5 gap-1'>
          <h1 className='text-4xl font-bold text-[#552318] '>Sign Up</h1>
          <p className='text-base font-semibold text-[#1d1d1d]'>Create an Account to Areya Editor</p>
        </div>
        <form action="" className='w-full flex flex-col items-center '>
            <div className='w-[90%] flex gap-9 '>
               <div className='w-[90%] flex flex-col '>
                  <label className='font-semibold pl-1 pb-1' htmlFor="name">Name</label>
                  <input type="text" className='border-2 h-10 bg-[#ce00e612] pl-2 rounded-lg' />
                </div>
               <div className='w-[90%] flex flex-col '>
                  <label className='font-semibold pl-1 pb-1' htmlFor="Last name">Last name</label>
                  <input type="text" className='border-2 h-10 bg-[#ce00e612] pl-2 rounded-lg' />
                </div>
            </div>
            <div className='w-[90%] flex flex-col mt-5 '>
                <label className='font-semibold pl-1 pb-1' htmlFor="Email">Email</label>
                <input type="text" className='border-2 h-10 bg-[#ce00e612] pl-2 rounded-lg' />
            </div>
            <div className='w-[90%] flex flex-col mt-5 '>
                <label className='font-semibold pl-1 pb-1' htmlFor="username">Username</label>
                <input type="text" className='border-2 h-10 bg-[#ce00e612] pl-2 rounded-lg' />
            </div>
            <div className='w-[90%] flex flex-col mt-5 '>
                <label className='font-semibold pl-1 pb-1' htmlFor="Password">Password</label>
                <input type="text" className='border-2 h-10 bg-[#ce00e612] pl-2 rounded-lg' />
            </div>
            <div className='w-[90%] flex flex-col mt-7 bg-[#552318] rounded-lg'>
                <button className='w-full h-11 rounded-lg text-white text-xl font-semibold'>Signup</button>
            </div>
            <div className='w-[90%] flex justify-center mt-5 rounded-lg'>
                <p className='text-lg font-semibold text-[#1d1d1d]'>Already Have an Account?
                <span onClick={()=>navigate('/login')} className="cursor-pointer">Login</span></p>
            </div>
        </form>
       </div>  
      </div>
    </div>
  )
}

export default Signup;