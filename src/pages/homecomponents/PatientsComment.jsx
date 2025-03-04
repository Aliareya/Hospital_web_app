import { Icon } from '@iconify-icon/react';
import pactient1 from '../../images/patient1.jpg';
import pactient2 from '../../images/patient2.jpg';
import pactient3 from '../../images/patient3.jpg';


function PatientsComment() {
  const comment = `Purus egeto consectur massa amert. Hactor bodiam
      suspendie faucibus posuer dignissim amet to atthe.
      Vitaer of sollicitudin mauris erat odio
      maecenas mattis praesent.Eget vitaoe.`;

  const pactients = [
    { name: 'Rebeca Connelly', image: pactient1, gmaiLink: null, star: Array(5).fill('x') ,service:'Dental Care'},
    { name: 'Kristin Watson', image: pactient2, gmaiLink: null, star: Array(4).fill('x') ,service:'Pharmacology'},
    { name: 'Rebeca Connelly', image: pactient3, gmaiLink: null, star: Array(3).fill('x') ,service:'Orthopedic'},
  ];
 console.log(pactients)

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[82%]">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-center text-[#002948] text-6xl font-[400] pb-6 font-[Katibeh]">
            Our Patients Say About Us
          </h1>
        </div>
        <div className="w-full h-[480px] flex gap-16 justify-center items-center">
          {pactients.map((pactient, index) => {
            return (
              <div key={index} className="w-[30%] h-[360px] rounded-xl shadow-2xl px-4 border border-[#2c5d73] ">
                <div className="w-full flex justify-end pr-4">
                  <span className="border-[6px] border-double border-white
                     w-20 h-20 bg-[#2c5d73] rounded-full -mt-9 flex justify-center items-center ">
                    <Icon icon="fa-solid:comment-dots" width="48" height="40" style={{ color: '#fff' }} />
                  </span>
                </div>
                <div className="w-full flex pb-5 ">
                  {pactient.star.map(( _, index)=>{
                    return(
                      <Icon icon="ic:outline-star" width={25} height={25} style={{ color: '#002a48' }} />
                    )
                  })}
                  <Icon icon="ic:outline-star" width={25} height={25} style={{ color: '#002a48' }} />
                </div>
                <p className='text-[19px]'>{comment}</p>
                <div className='w-full mt-5 flex items-center '>
                  <div className='w-16 h-16 bg-cover bg-center bg-slate-800 rounded-full border-2  border-[#002948]'
                    style={{ backgroundImage: `url(${pactient.image})` }}
                  ></div>
                  <div className='px-4 w-40  h-16 flex flex-col justify-center  '>
                    <h1 className='text-[#002948] text-2xl font-[700] font-[Katibeh]'>{pactient.name}</h1>
                    <span className='text-[#002948] pb-3 text-xl font-katibeh'>{pactient.service}</span>
                  </div>
                  <div className='flex justify-end w-28 pb-4 '>
                    <Icon className='cursor-pointer' icon="garden:email-stroke-16" width={25} height={25} style={{ color: '#0e0748' }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PatientsComment;