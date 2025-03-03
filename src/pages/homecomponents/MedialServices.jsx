import { Icon } from '@iconify-icon/react';
import { useState } from 'react';

function MedialServices() {

  const [medical, setMedical] = useState([
    {
      title: 'Dental Care', icone: 'medical-icon:i-dental',
      info: `We have more doctor for your dental illness.
          We are here for your better treatment`
    },
    {
      title: 'Heart Surgery', icone: 'icon-park-outline:heart',
      info: `We have more doctor for your dental illness.
          We are here for your better treatment`
    },
    {
      title: 'Gyneological', icone: 'emojione-monotone:baby',
      info: `We have more doctor for your dental illness.
          We are here for your better treatment`
    }
  ])

  return (
    <div className="bg-white w-full flex justify-center mt mb-20">
      <div className="w-[90%] flex flex-col justify-center ">
        <div className="w-full pb-10">
          <h1 className="text-6xl font-katibeh font-[400] text-[#002a48] text-center">Our Medical Services</h1>
        </div>
        <div className="w-full mt-16 flex gap-[70px] justify-center">
          {medical.map((medical, index) => {
            return (
              <div className="border w-96 h-[340px] bg-white shadow-lg flex flex-col justify-center items-center rounded-3xl ">
                <div className="border-[6px] border-double border-white w-28 h-28 bg-[#3b5c73] -mt-16 rounded-full flex justify-center items-center">
                  <Icon icon={medical.icone} width="50" height="50" style={{ color: '#fff' }} />
                </div>
                <div className="w-full h-52 flex flex-col items-center px-6">
                  <h1 className="text-5xl font-katibeh font-[400] text-[#002a48] pt-4">{medical.title}</h1>
                  <p className="text-xl font-normal text-center pt-7">
                    {medical.info}
                  </p>
                </div>
                <div>
                  <Icon icon="pajamas:long-arrow" width="48" height="48" style={{ color: '#0e0748' }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default MedialServices;