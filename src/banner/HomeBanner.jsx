import homebanner from '../images/homebanner.png';
import AppointmentForm from '../forms/AppointmentForm';

function HomeBanner() {
  return (
    <>
    <div className="w-full h-[700px] gap-[380px] flex justify-center pr-40 pt-[250px]">
      <div className="w-[45%] flex flex-col gap-7 ">
        <h1 className="text-[#fff]" style={{ fontSize: '80px', lineHeight: '90px', fontWeight: '400', fontFamily: 'Katibeh' }}>Your Smile & Happiness is Our Mission</h1>
        <button className="border-2 border-white border-double w-64 h-14 bg-[#002859c5] text-white text-lg font-semibold rounded-lg">Make Appointment</button>
      </div>
      <div className="w-60%] pt-[80px]">
        <img src={play} alt="logo" className="w-32 h-32" />
      </div>
    </div>
    <AppointmentForm/>
    </>
  )
}

export default HomeBanner;