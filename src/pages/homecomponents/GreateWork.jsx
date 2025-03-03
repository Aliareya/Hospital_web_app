import { Icon } from '@iconify-icon/react';
import greateW1 from '../../images/greateW1.jpg';
import greateW2 from '../../images/greateW2.jpg';
import greateW3 from '../../images/greateW3.jpg';

const GreateWork = () => {
  const complatedWork = [
    { Image: greateW1, title: 'Heart Institure' },
    { Image: greateW2, title: 'Orthopaedics' },
    { Image: greateW3, title: 'Neurology' },
  ]


  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[82%]">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-center text-[#002948] text-6xl font-[400] pb-6 font-[Katibeh]">
            All The Great Work That We Done
          </h1>
          <button className="border-[6px] border-double border-white w-60 p-2 bg-[#2c5d73] rounded-xl text-xl text-white flex items-center gap-6 justify-center">
            See All Cases
            <Icon icon="ei:arrow-right" width="35" height="35" style={{ color: '#fff' }} />
          </button>
        </div>
        <div className='w-full h-[500px] mt-6 flex gap-6 justify-center'>
          {complatedWork.map((cases, index) => {
            return (
              <div className="w-[32%] h-[430px] bg-slate-600 rounded-3xl flex justify-center items-end pb-5
              bg-cover bg-center bg-no-repeat group"
                style={{ backgroundImage: `url(${cases.Image})` }}>
                <div className="w-[80%] h-32 bg-[#116599a8] backdrop-blur-[1px] rounded-3xl 
                  opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-500 ease-in-out">
                  <h1 className="text-center text-white text-6xl pt-5 font-[400] font-[Katibeh]">
                    {cases.title}
                  </h1>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GreateWork;
