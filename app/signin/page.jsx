const Signin = () => {
  return (
    <section className="form_section">
      <form className="auth_form" onSubmit="/">
        <h2 style={{ marginBottom: 20 }}>Log in</h2>
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
            value="Log in"
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

export default Signin;