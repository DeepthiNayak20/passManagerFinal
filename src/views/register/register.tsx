import Logo from "../../components/logo/logo";
import SignUp from "../../components/signUp/signUp";
import "./register.css";

const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="loginContainer">
          <Logo />
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Register;
