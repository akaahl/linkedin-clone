import React from "react";
import "./Login.css";

function Login() {
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
      </form>
    </div>
  );
}

export default Login;
