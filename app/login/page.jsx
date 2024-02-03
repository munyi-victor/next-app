"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/");
  }

  const [passwordType, setPasswordType] = useState("password")
  
  const showPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  return (
    <section className="form_section">
      <form className="auth_form" onSubmit="/">
        <h2 style={{ marginBottom: 20 }}>Log in</h2>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div>
          <label>Password</label>
          <input type={passwordType} placeholder="Create a password" required />
          <span
            onClick={showPassword}
            className="show_login_pwd"
            style={{
              right: "38vw",
              top:"45.6vh"
            }}
          >{passwordType === "password" ? "Show" : "Hide"}
          </span>
        </div>

        <div>
          <input
            type="button"
            value="Log in"
            onClick={handleSubmit}
            className="
              bg-black 
              hover:bg-gray-800
              text-white
              text-lg font-bold
              font-satoshi
              px-6 
              py-2
              rounded-full
            "
          />
        </div>

        <span>
          Don't have an account? <a href="/signup">Sign up</a>
        </span>
      </form>
    </section>
  );
}

export default Login;