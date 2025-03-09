import how4 from "../../images/how4.png";
import how1 from "../../images/how1.png";
import how2 from "../../images/how2.png";
import how3 from "../../images/how3.png";
import workbg from "../../images/workbg.svg";
import { useState } from "react";

function HowWeWorks() {
  const [WorksData, setWork] = useState([
    {
      img: how1,
      title: "Make Appointment",
      info: `Amet usem turpis vestm hendrerit
        vestibulum molestie quis.
        Egestas ultricies at placerat.`,
    },
    {
      img: how2,
      title: "Get Consultant",
      info: `Amet usem turpis vestm hendrerit
        vestibulum molestie quis.
        Egestas ultricies at placerat.`,
    },
    {
      img: how3,
      title: "Take Treatment",
      info: `Amet usem turpis vestm hendrerit
        vestibulum molestie quis.
        Egestas ultricies at placerat.`,
    },
    {
      img: how4,
      title: "Get Relief",
      info: `Amet usem turpis vestm hendrerit
        vestibulum molestie quis.
        Egestas ultricies at placerat.`,
    },
  ]);

  return (
    <div className="w-[90%] h-[600px] flex flex-col items-center justify-center px-10 py-5 mb-20 ">
      <h1 className="text-center text-[#002948] text-5xl font-[400] pb-14 font-[Katibeh]">
        How We Works?
      </h1>
      <div
        className="w-full flex items-center justify-center gap-20 pt-10 bg-cover bg-top"
        style={{ backgroundImage: `url(${workbg})` }}
      >
        {WorksData.map((value, index) => {
          return (
            <div
              key={index}
              className="w-[25%] h-80 flex flex-col justify-center items-center p-3"
            >
              <img src={value.img} alt={value.title} className="w-60 h-60" />
              <h3 className="text-center text-[#002948] text-2xl font-semibold pt-2 font-[none]">
                {value.title}
              </h3>
              <p className="text-center text-lg text-gray-600 pt-2">
                {value.info}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HowWeWorks;
