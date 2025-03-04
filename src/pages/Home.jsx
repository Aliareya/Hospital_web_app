import HowWeWorks from "./homecomponents/HowWeWorks";
import MedialServices from "./homecomponents/MedialServices";
import GreateWork from "./homecomponents/GreateWork";
import PatientsComment from "./homecomponents/PatientsComment";
import AppointmentForm from "../forms/AppointmentForm";
import HomeRewards from "./homecomponents/HomeRewards";



function Home() {
  return (
    <div className=" z-0 w-full bg-white flex flex-col items-center pt-32">
      <AppointmentForm/>
      <HowWeWorks/>
      <MedialServices/>
      <GreateWork/>
      <PatientsComment/>
      <HomeRewards/>
    </div>
  )
}
export default Home;