import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";
import GlassMessage from "../../components/GlassMessage";
import Cookies from "js-cookie";
import "./index.css";

export default function Login() {

  const [message, setMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setError] = useState("");
  const navigate = useNavigate();

  const loginSuccess = (token) => {
  setMessage("Login successful! 🎉"); // show message
  Cookies.set("jwt_token", token, { expires: 30 });

  // wait 3 seconds before redirect
  setTimeout(() => {
    navigate("/");
  }, 3000);
};

  const loginFailure = (error) => {
    setError(error);
    setMessage("Registration failed ❌");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      const data = await res.json();
      if (res.ok) {
        loginSuccess(data.token);
      } else {
        loginFailure(data.msg);
      }
    } catch (error) {
      console.log("login error ", error);
    }
  };

  const onClickRegister = () => {
    navigate("/register", { replace: true });
  };

  return (
    <div className="login-container">
      <div>
        <GlassMessage message={message} />
      </div>
      <div className="login-card-container">
        <h1>Login</h1>
        <form className="login-card-container-form" onSubmit={handleSubmit}>
          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button type="submit">Login</button>
            <button type="button" onClick={() => navigate("/")}>
              Cancel
            </button>
          </div>

          <p>
            Don’t have an account?{" "}
            <span onClick={onClickRegister}>click here</span>
          </p>

          {errorMsg && <p>{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
}
