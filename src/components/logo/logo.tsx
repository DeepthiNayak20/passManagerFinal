import "./logo.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const [selected, setSelected] = useState("login");

  return (
    <div>
      <div className="rightContainer">
        <div className="imgContainer">
          <img
            src={require("../../assets/images/logo.png")}
            alt="Logo"
            className="lockImg"
          />
        </div>
        <div className="lockText">
          Protect & Manage every <br />
          password in your business
        </div>
      </div>

      <div className="mobileLogo">
        <div className="logoDesign">
          <img
            src={require("../../assets/images/logo (3).png")}
            alt="Logo"
            className="lockImg"
          />
        </div>
        <div className="tabs">
          <div className={selected === "login" ? "underline" : ""}>
            <Link to="/" className="mobileSignIn">
              sign In
            </Link>
          </div>
          <div
            className={selected === "signUp" ? "underline" : ""}
            onClick={() => {
              setSelected("signUp");
            }}
          >
            <Link to="/register" className="mobileSignIn">
              sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
