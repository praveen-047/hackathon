import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api";
import GlassMessage from "../../components/GlassMessage";

import "./index.css";

export default function Register() {

  const[message,setMessage] = useState("")

  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(user);
      setMessage("Registration successfull 🎉")
      setTimeout(()=>{
        navigate("/login", { replace: true });
      },3000)
    } catch (error) {
      console.log("register error :", error);
      setMessage("Registration failed ❌");
    }
  };

  const onClickLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="register-container">
      <div>
        <GlassMessage message={message}/>
      </div>
      <div className="register-card-container">
        <form className="register-card-container-form" onSubmit={handleRegister}>
        
          <h2>Register</h2>
        

        
          <div>
            {/* <label htmlFor="">Username</label> */}
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChanges}
              placeholder="Enter username"
            />
          </div>

          <div>
            {/* <label htmlFor="">Email</label> */}
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChanges}
              placeholder="Enter Email"
            />
          </div>

          <div>
            {/* <label htmlFor="">Mobile Number</label> */}
            <input
              type="text"
              name="mobile"
              value={user.mobile}
              onChange={handleChanges}
              placeholder="Enter Mobile number"
            />
          </div>

          <div>
            {/* <label htmlFor="">Password</label> */}
            <input
              type="text"
              name="password"
              value={user.password}
              onChange={handleChanges}
              placeholder="Enter password"
            />
          </div>

          <div>
            {/* <label htmlFor="">Confirm Password</label> */}
            <input
              type="text"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChanges}
              placeholder="Confirm password"
            />
          </div>
        

        <div>
            <button type="submit">Register</button>
            <button type="button" onClick={() => navigate("/")}>
              Cancel
            </button>
          </div>

        <p>
            Already have an account?{" "}
            <span onClick={onClickLogin}>click here</span>
          </p>
      </form>
      </div>
    </div>
  );
}
