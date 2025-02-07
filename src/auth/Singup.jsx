import { useNavigate } from 'react-router-dom';

function Signup(){
  const navigate = useNavigate()
  return(
    <div className="signup w-full h-screen flex items-center justify-center">
      <div className="w-[53%] h-[600px] flex rounded-2xl shadow-2xl bg-white">
       <div className='w-full h-[600px] rounded-r-2xl'>
        <div className='w-full h-20 flex flex-col justify-center items-center mb-5 mt-5 gap-1'>
          <h1 className='text-4xl font-bold text-[#002948] '>Sign Up</h1>
          <p className='text-base font-semibold text-[#002948]'>Create an Account to Areya Editor</p>
        </div>
        <form action="" className='w-full flex flex-col items-center '>
            <div className='w-[90%] flex gap-9 '>
               <div className='w-[90%] flex flex-col '>
                  <label className='font-semibold pl-1 pb-1 text-[#002948]' htmlFor="name">Name</label>
                  <input type="text" className='focus:border-[#0b2848] border-2 h-10 bg-[#c9c9c973] pl-2 rounded-lg' />
                </div>
               <div className='w-[90%] flex flex-col '>
                  <label className='font-semibold pl-1 pb-1 text-[#002948]' htmlFor="Last name">Last name</label>
                  <input type="text" className='focus:border-[#0b2848] border-2 h-10 bg-[#c9c9c96b] pl-2 rounded-lg' />
                </div>
            </div>
            <div className='w-[90%] flex flex-col mt-5 '>
                <label className='font-semibold pl-1 pb-1 text-[#002948]' htmlFor="Email">Email</label>
                <input type="text" className='focus:border-[#0b2848] border-2 h-10  bg-[#c9c9c96b] pl-2 rounded-lg' />
            </div>
            <div className='w-[90%] flex flex-col mt-5 '>
                <label className='font-semibold pl-1 pb-1 text-[#002948]' htmlFor="username">Username</label>
                <input type="text" className=' border-2  h-10 bg-[#c9c9c96b] pl-2 rounded-lg' />
            </div>
            <div className='w-[90%] flex flex-col mt-5 '>
                <label className='font-semibold pl-1 pb-1 text-[#002948]' htmlFor="Password">Password</label>
                <input type="text" className='focus:border-[#0b2848] border-2  h-10 bg-[#c9c9c96b] pl-2 rounded-lg' />
            </div>
            <div className='w-[90%] flex flex-col mt-7 bg-[#0b2848] rounded-lg'>
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