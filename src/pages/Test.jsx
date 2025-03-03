import { useState, useEffect } from "react";

function Test() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleTestLoading() {
    setLoading(true);
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + 3.33;
      });
    }, 1000);
  }

  return (
    <div 
      className="w-1/2 h-40 m-auto my-9 flex flex-col justify-center items-center gap-5 rounded-xl relative"
      
    >
      <div className="w-4/5 h-4 border "
       style={{ background: `linear-gradient(to right, #3b82f6 ${progress}%, #64748b ${progress}%)` }}
      ></div>
      <button
        onClick={handleTestLoading}
        className="w-20 h-9 bg-blue-900 text-white text-lg font-semibold rounded-lg"
        disabled={loading}
      >
        {loading ? "Loading..." : "Click"}
      </button>
    </div>
  );
}

export default Test;
