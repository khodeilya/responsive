import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="abstract">
        <div className="login-box">
          <h1>Register</h1>
          <form>
            <div className="inputes-signup">
              <input type={"text"} name="email" placeholder="Enter Email..." />
              <input
                type={"password"}
                name="password"
                placeholder="Enter Password..."
              />
              <input
                type={"password"}
                name="password"
                placeholder="Enter Password Again..."
              />
            </div>

            <Link to="/login">
              <button className="login-btn"> Register </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
