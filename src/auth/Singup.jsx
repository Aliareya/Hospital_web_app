import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  // State
  const [data, setData] = useState({
    name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" }); 
  };

  // Validation
  const validate = () => {
    let newErrors = {};
    if (!data.name.trim()) newErrors.name = "(Name is required)";
    if (!data.email.trim()) newErrors.email = "(Email is required)";
    else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "(Invalid email format)";
    if (!data.username.trim()) newErrors.username = "(Username is required)";
    if (!data.password.trim()) newErrors.password = "(Password is required)";
    else if (data.password.length < 6) newErrors.password = "(Password must be at least 6 characters)";

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("User Data:", data);
      // Simulate signup success & redirect
      alert("Signup Successful!");
      navigate("/login");
    }
  };

  return (
    <div className="signup w-full h-screen flex items-center justify-center">
      <div className="w-[53%] h-[600px] flex rounded-2xl shadow-2xl bg-white">
        <div className="w-full h-[600px] rounded-r-2xl">
          <div className="w-full h-20 flex flex-col justify-center items-center mb-5 mt-5 gap-1">
            <h1 className="text-4xl font-bold text-[#002948]">Sign Up</h1>
            <p className="text-base font-semibold text-[#002948]">Create an Account to Areya Editor</p>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div className="w-[90%] flex gap-9">
              <div className="w-[90%] flex flex-col">
                <label className="font-semibold pl-1 pb-1 text-[#002948]" htmlFor="name">
                  Name {error.name && <span className="pl-1 text-red-500 text-[13px] font-[600]">{error.name}</span>}
                </label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className="focus:border-[#0b2848] border-2 h-10 bg-[#c9c9c973] pl-2 rounded-lg"
                />
                
              </div>

              <div className="w-[90%] flex flex-col">
                <label className="font-semibold pl-1 pb-1 text-[#002948]" htmlFor="last_name">Last Name </label>
                <input
                  type="text"
                  name="last_name"
                  value={data.last_name}
                  onChange={handleChange}
                  className="focus:border-[#0b2848] border-2 h-10 bg-[#c9c9c96b] pl-2 rounded-lg"
                />
              </div>
            </div>

            <div className="w-[90%] flex flex-col mt-5">
              <label className="font-semibold pl-1 pb-1 text-[#002948]" htmlFor="email">
                Email {error.name && <span className="pl-1 text-red-500 text-[13px] font-[600]">{error.email}</span>}
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="focus:border-[#0b2848] border-2 h-10 bg-[#c9c9c96b] pl-2 rounded-lg"
              />
            </div>

            <div className="w-[90%] flex flex-col mt-5">
              <label className="font-semibold pl-1 pb-1 text-[#002948]" htmlFor="username">
                Username {error.name && <span className="pl-1 text-red-500 text-[13px] font-[600]">{error.username}</span>}
              </label>
              <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
                className="border-2 h-10 bg-[#c9c9c96b] pl-2 rounded-lg"
              />
            </div>

            <div className="w-[90%] flex flex-col mt-5">
              <label className="font-semibold pl-1 pb-1 text-[#002948]" htmlFor="password">
                Password {error.name && <span className="pl-1 text-red-500 text-[13px] font-[600]">{error.password}</span>}
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="focus:border-[#0b2848] border-2 h-10 bg-[#c9c9c96b] pl-2 rounded-lg"
              />
            </div>

            <div className="w-[90%] flex flex-col mt-7 bg-[#0b2848] rounded-lg">
              <button type="submit" className="w-full h-11 rounded-lg text-white text-xl font-semibold">
                Signup
              </button>
            </div>

            <div className="w-[90%] flex justify-center mt-5 rounded-lg">
              <p className="text-lg font-semibold text-[#1d1d1d]">
                Already Have an Account?{" "}
                <span onClick={() => navigate("/login")} className="cursor-pointer text-blue-500">Login</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
