import HowWeWorks from "./homecomponents/HowWeWorks";
import MedialServices from "./homecomponents/MedialServices";
import GreateWork from "./homecomponents/GreateWork";
import PatientsComment from "./homecomponents/PatientsComment";
import AppointmentForm from "../forms/AppointmentForm";



function Home() {
  return (
    <div className=" z-0 w-full bg-white flex flex-col items-center pt-32">
      <AppointmentForm/>
      <HowWeWorks/>
      <MedialServices/>
      <GreateWork/>
      <PatientsComment/>
    </div>
  )
}
export default Home;