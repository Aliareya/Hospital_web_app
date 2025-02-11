import { useLocation } from "react-router-dom";
function Banner(){
  const location = useLocation();
  const path = location.pathname;

  return(
    <div className="w-full h-[450px] flex justify-center items-center">
      <h1 className="text-2xl text-white font-medium">Home {path}</h1>
    </div>
  )
}
export default Banner;