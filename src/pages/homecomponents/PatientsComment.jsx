import { Icon } from '@iconify-icon/react';

function PatientsComment() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[82%]">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-center text-[#002948] text-6xl font-[400] pb-6 font-[Katibeh]">
            Our Patients Say About Us
          </h1>
        </div>
        <div className="w-full h-[500px] flex justify-center items-center">
          <div className="w-[30%] h-[380px] rounded-xl shadow-2xl px-4 border border-[#2c5d73] ">
            <div className="w-full flex justify-end pr-6">
              <span className="border-[6px] border-double border-white
               w-20 h-20 bg-[#2c5d73] rounded-full -mt-10 flex justify-center items-center ">
                <Icon icon="fa-solid:comment-dots" width="48" height="40"  style={{color: '#fff'}} />
              </span>
            </div>
            <div className="w-full h-20 flex -mt-2 ">
              <Icon icon="ic:outline-star" width={25} height={25}  style={{color: '#002a48'}} />
              <Icon icon="ic:outline-star" width={25} height={25}  style={{color: '#002a48'}} />
              <Icon icon="ic:outline-star" width={25} height={25}  style={{color: '#002a48'}} />
              <Icon icon="ic:outline-star" width={25} height={25}  style={{color: '#002a48'}} />
              <Icon icon="ic:outline-star" width={25} height={25}  style={{color: '#002a48'}} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PatientsComment;