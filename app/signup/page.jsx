"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordType, setPasswordType] = useState("password");

  const showPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };
  
  return (
    <section className="form_section">
      <form className="auth_form">
        <h2>Sign up</h2>
        <div>
          <label>First name</label>
          <input
            type="text"
            placeholder="Enter first name"
            required
            onChange={(firstName) => setFirstName(firstName)}
          />
        </div>

        <div>
          <label>Last name</label>
          <input
            type="text"
            placeholder="Enter last name"
            required
            onChange={(lastName) => setLastName(lastName)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            onChange={(email) => setEmail(email)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type={passwordType}
            placeholder="Create a password"
            required
            onChange={(password) => setPassword(password)}
          />
          <span
            onClick={showPassword}
            className="show_login_pwd"
            style={{
              right: "38vw",
              top: "66.4vh",
            }}
          >
            {passwordType === "password" ? "Show" : "Hide"}
          </span>
        </div>

        <div>
          <input
            type="button"
            value="Sign up"
            onClick={handleNavigate}
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
          Already have an account? <a href="/login">Log in</a>
        </span>
      </form>
    </section>
  );
}

export default Signup;