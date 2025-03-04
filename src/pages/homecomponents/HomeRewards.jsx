import { Icon } from "@iconify-icon/react";
import { useState, useEffect } from "react";

function HomeRewards() {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [qualifiedDoctors, setQualifiedDoctors] = useState(240);
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [awardWinning, setAwardWinning] = useState(25);
  const [clientSupport, setClientSupport] = useState(24);
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const increaseValue = (
    currentValue,
    setValue,
    target,
    step,
    intervalTime
  ) => {
    if (currentValue < target) {
      const interval = setInterval(() => {
        setValue((prevValue) => {
          if (prevValue < target) {
            return prevValue + step;
          } else {
            clearInterval(interval);
            return prevValue;
          }
        });
      }, intervalTime);
    }
  };

  useEffect(() => {
    if (y >= 2800) {
      if (satisfiedClients === 0) {
        increaseValue(satisfiedClients, setSatisfiedClients, 500, 2, 100);
      }
      if (currentNumber === 1) {
        increaseValue(currentNumber, setCurrentNumber, 3020, 10, 50);
      }
      if (awardWinning === 25) {
        increaseValue(awardWinning, setAwardWinning, 580, 2, 100);
      }
      if (clientSupport === 24) {
        increaseValue(clientSupport, setClientSupport, 24, 0.5, 100);
      }
    } else {
      setQualifiedDoctors(240);
      setSatisfiedClients(0);
      setAwardWinning(25);
      setClientSupport(24);
      setCurrentNumber(1);
    }
  }, [y, satisfiedClients, awardWinning, clientSupport, currentNumber]);

  const rewards = [
    {
      Icon: "healthicons:doctor-male",
      number: `${satisfiedClients}+`,
      title: "Qualified Doctors",
    },
    {
      Icon: "dashicons:businesswoman",
      number: `${currentNumber}+`,
      title: "Satisfied Clients",
    },
    {
      Icon: "line-md:star-pulsating-loop",
      number: `${awardWinning}+`,
      title: "Award Winning",
    },
    {
      Icon: "streamline:customer-support-1-solid",
      number: `${clientSupport}/7`,
      title: "Client Support",
    },
  ];

  return (
    <div className="w-full h-80 mb-20 flex justify-center items-center ">
      <div className="w-[82%] h-72 bg-[#045e74] rounded-xl px-4 flex gap-3 justify-between items-center">
        {rewards.map((reward, index) => {
          return (
            <div
              key={index}
              className="w-[20%] h-64 flex flex-col justify-center items-center "
            >
              <Icon
                icon={reward.Icon}
                width={90}
                height={90}
                style={{ color: "#fff" }}
              />
              <h1 className="text-center text-white text-6xl -mt-3 font-[Katibeh]">
                {reward.number}
              </h1>
              <p className="text-center text-white text-4xl font-[Katibeh]">
                {reward.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeRewards;
