import { useState, useEffect } from "react";

function AppointmentForm() {
  return (
    <form className=" w-[83%] h-56 -mt-14 top-2 shadow-xl bg-white flex items-center gap-5 px-10 rounded-2xl ml-[132px]">
      <div className='w-[20%] flex flex-col '>
        <label className='pl-1 pb-2 text-2xl' htmlFor="name">Your Name</label>
        <input type="text" placeholder="Name..."
          className='border h-12 border-[#002948] bg-[#45527314] pl-2 rounded-lg' />
      </div>
      <div className='w-[20%] flex flex-col '>
        <label className='pl-1 pb-2 text-2xl' htmlFor="name">Your Email</label>
        <input type="text" placeholder="Email..."
          className='border h-12 border-[#002948] bg-[#45527314] pl-2 rounded-lg' />
      </div>
      <div className='w-[20%] flex flex-col '>
        <label className='pl-1 pb-2 text-2xl' htmlFor="name">Select Department</label>
        <select type="text" className='border h-12 pr-3 border-[#002948] bg-[#45527314] pl-2 rounded-lg'>
          <option value="department">Department...</option>
        </select>
      </div>
      <div className='w-[20%] flex flex-col '>
        <label className='pl-1 pb-2 text-2xl' htmlFor="name">Select Doctors</label>
        <select type="text" className='border h-12 border-[#002948] bg-[#45527314] pl-2 rounded-lg' >
          <option value="doctors">Doctors...</option>
        </select>
      </div>
      <div className='w-[15%] flex flex-col mt-9 bg-[#002948] rounded-lg'>
        <button className='w-full h-12 rounded-lg text-white text-xl font-semibold'>Send</button>
      </div>
    </form>
  )
}

export default AppointmentForm;