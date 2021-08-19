import React from "react";
import "./Login.css";

function Login() {
  const register = () => {
    console.log("register");
  };

  const loginToApp = () => {
    console.log("login");
  };

  return (
    <div className="login">
      <img
        src="https://www.onrec.com/sites/onrec/directory/files/Linkedin-Logo.png"
        alt="linkedin"
      />

      <form>
        <input type="text" placeholder="Full Name (required if registering)" />
        <input type="text" placeholder="Profile Photo URL (optional)" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
