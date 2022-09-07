const Login = () => {
  return (
    <>
      <div className="abstract">
        <div className="login-box">
          <h1>Login</h1>
          <form>
            <div className="inputes">
              <input type={"text"} name="email" placeholder="Enter Email..." />
              <input
                type={"password"}
                name="password"
                placeholder="Enter Password..."
              />
            </div>
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
