const Signup = () => {
  return (
    <section className="form_section">
      <form className="auth_form">
        <h2>Sign up</h2>
        <div>
          <label>First name</label>
          <input type="text" placeholder="Enter first name" />
        </div>

        <div>
          <label>Last name</label>
          <input type="text" placeholder="Enter last name" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="Create a password" />
        </div>

        <div>
          <input
            type="submit"
            value="Sign up"
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
      </form>
    </section>
  );
}

export default Signup;