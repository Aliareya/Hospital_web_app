import HowWeWorks from "./homecomponents/HowWeWorks";
import MedialServices from "./homecomponents/MedialServices";
import GreateWork from "./homecomponents/GreateWork";



function Home() {
  return (
    <div className="w-full bg-white flex flex-col items-center pt-32">
      <HowWeWorks/>
      <MedialServices/>
      <GreateWork/>
    </div>
  )
}
export default Home;