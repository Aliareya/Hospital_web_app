import HowWeWorks from "./homecomponents/HowWeWorks";



function Home() {
  return (
    <div className="w-full  bg-white flex flex-col items-center pt-32">
      <HowWeWorks/>
      <div className="w-full h-96 bg-slate-600"></div>
    </div>
  )
}
export default Home;