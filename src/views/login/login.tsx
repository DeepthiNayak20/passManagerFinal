import Logo from "../../components/logo/logo";
import SignIn from "../../components/signIn/signIn";
import "./login.css";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="loginContainer">
          <Logo />
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Login;
