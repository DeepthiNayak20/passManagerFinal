import "./signUp.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [togglePin, setTogglePin] = useState<Boolean>(false);
  const onToggleChange = () => {
    setTogglePin(!togglePin);
  };

  const [toggleMPin, setToggleMPin] = useState<Boolean>(false);
  const onToggleMPinChange = () => {
    setToggleMPin(!toggleMPin);
  };

  const storeUsers = localStorage.getItem("users") || "[]";
  //   if (storeUsers === "[]") {
  //   localStorage.setItem(
  //     "users",
  //     JSON.stringify([{ mobile: "2345678909", pin: "1111", mPin: "1111" }])
  //   );
  //   }

  console.log("storeUsers", storeUsers);

  const signUpHandler = (event: any) => {
    event.preventDefault();

    const mobile = event.target.mobile.value;
    const pin = event.target.pin.value;
    const mPin = event.target.mPin.value;

    const userData = {
      mobile,
      pin,
      mPin,
    };

    const previousData = JSON.parse(localStorage.getItem("users") || "[]");

    const arr: any[] = [];

    previousData.map((user: any) => {
      if (userData.mobile === user.mobile) {
        arr.push("exist");
      }
    });

    if (arr.includes("exist")) {
      alert("user already exist");
    } else {
      if (mobile === "" && pin === "" && mPin === "") {
        alert("enter all fields");
      } else {
        if (pin === mPin) {
          previousData.push(userData);
          localStorage.setItem("users", JSON.stringify(previousData));
          localStorage.setItem(JSON.stringify(mobile), JSON.stringify([]));
          navigate("/");
        } else {
          alert("enter same pins");
        }
      }
    }
  };

  return (
    <div>
      <div className="leftContainer">
        <div className="signUpText">SIGN UP</div>
        <form className="formContainer" onSubmit={signUpHandler}>
          <div className="">
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="inputField_1"
              required
              minLength={10}
              maxLength={10}
              name="mobile"
            />
          </div>
          <div className="passwordPin_1">
            <input
              type={togglePin ? "text" : "password"}
              placeholder="Enter 4 digit Pin"
              className="inputField_1"
              required
              minLength={4}
              maxLength={4}
              name="pin"
            />
            <img
              src={require("../../assets/icons/eye_on.png")}
              alt="img"
              className="eyeIcon_1"
              onClick={onToggleChange}
            />
          </div>
          <div className="passwordPin_1">
            <input
              type={toggleMPin ? "text" : "password"}
              placeholder="Re Enter 4 digit Pin"
              className="inputField_1"
              required
              minLength={4}
              maxLength={4}
              name="mPin"
              // onClick={togglePin}
            />
            <img
              src={require("../../assets/icons/eye_on.png")}
              alt="img"
              className="eyeIcon_1"
              onClick={onToggleMPinChange}
            />
          </div>
          <button className="signUpButton">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
