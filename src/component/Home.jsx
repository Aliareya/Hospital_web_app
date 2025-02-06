import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Update the API URL to point to the backend
    axios.get("http://localhost:5000/")
      .then((res) => {
        console.log(res.data); // Log the API response
      })
      .catch((err) => {
        console.error("Error fetching data:", err); // Log any errors
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div onClick={() => navigate('/login')} style={{ cursor: 'pointer', color: 'blue' }}>
        Login
      </div>
      <div onClick={() => navigate('/signup')} style={{ cursor: 'pointer', color: 'blue' }}>
        Signup
      </div>
    </div>
  );
}

export default Home;
