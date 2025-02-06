import login from '../images/logins.jpg';
import { useNavigate } from 'react-router-dom';

function Login(){
 const navigate = useNavigate()
  return(
    <div className="signup w-full h-screen flex items-center justify-center">
      <div className="w-[45%] h-[460px] flex rounded-2xl shadow-2xl bg-white">
       <div style={{backgroundImage:`url(${login})`}} className={`rounded-l-2xl w-[45%] h-[460px] bg-cover bg-center`}></div>
       <div className='w-[55%] h-[400px]  rounded-r-2xl'>
        <div className='w-full h-20 flex flex-col justify-center items-center mb-5 mt-5 gap-3'>
          <h1 className='text-4xl font-bold text-[#552318] '>Login</h1>
          <p className='text-base font-semibold text-[#1d1d1d]'>Wellcome Back</p>
        </div>
        <form action="" className='w-full flex flex-col items-center gap-6 mt-3 '>
          <div className='w-[90%] flex flex-col '>
            <label className='font-semibold pl-1 pb-1' htmlFor="name">Email / Username</label>
            <input type="text" className='border-2 h-10 bg-[#ce00e612] pl-2 rounded-lg' />
          </div>
          <div className='w-[90%] flex flex-col '>
            <label className='font-semibold pl-1 pb-1' htmlFor="name">Password</label>
            <input type="text" className='border-2 h-10 bg-[#ce00e612] pl-2 rounded-lg' />
          </div>
          <div className='w-[90%] flex flex-col mt-4 bg-[#552318] rounded-lg'>
            <button className='w-full h-11 rounded-lg text-white text-xl font-semibold'>Signup</button>
          </div>
          <div className='w-[90%] flex justify-center rounded-lg'>
            <p className='text-lg font-semibold text-[#1d1d1d]'>Already Have an Account?
            <span onClick={()=>navigate('/signup')} className="cursor-pointer">Signup</span></p>
          </div>
        </form>
       </div>  
      </div>
    </div>
  )
}

export default Login;