import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <div className="dashBoardImage">
          <img src={require("../../assets/images/logo (2).png")} alt="icon" />
        </div>
        <div className="dashBoardIcons">
          <div className="sync">
            <img src={require("../../assets/icons/sync.png")} alt="icon" />
          </div>
          <div className="profile">
            <div className="dropdown">
              <button className="dropbtn">
                <img
                  src={require("../../assets/icons/profile.png")}
                  alt="icon"
                />
              </button>

              <div className="dropdown-content">
                <div className="dropDownOptions">
                  <Link to="#" className="dropDownProfile">
                    <div className="linkText">Change Password</div>
                    <div className="dropImg">
                      <img
                        src={require("../../assets/icons/ic_pass.png")}
                        alt="icon"
                      />
                    </div>
                  </Link>
                </div>
                <div className="dropDownOptions">
                  <Link to="/" className="dropDownProfile">
                    <div className="linkText">Sign Out</div>
                    <img
                      src={require("../../assets/icons/drop2.png")}
                      alt="icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobileHeader">
        <div className="head">
          <div className="passManager">
            <img
              src={require("../../assets/icons/burger_Menu.png")}
              alt="icon"
              className="iconsImg"
            />
            <img
              src={require("../../assets/icons/PASS MANAGER.png")}
              alt="icon"
              className="iconsImg"
            />
          </div>
          <div className="profileMobile">
            <div>
              <img
                src={require("../../assets/icons/search (2).png")}
                alt="icon"
                className="iconsImg"
              />
            </div>
            <div>
              <img
                src={require("../../assets/icons/sync_icn.png")}
                alt="icon"
                className="iconsImg"
              />
            </div>
            <div>
              <img
                src={require("../../assets/icons/profile (2).png")}
                alt="icon"
                className="iconsImg"
              />
              <div className="mobileHeaderDropDown">
                <div className="dropdown-content">
                  <div className="dropDownOptions">
                    <Link to="#" className="dropDownProfile">
                      <div className="linkText">Change Password</div>
                      <div className="dropImg">
                        <img
                          src={require("../../assets/icons/ic_pass.png")}
                          alt="icon"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="dropDownOptions">
                    <Link to="/" className="dropDownProfile">
                      <div className="linkText">Sign Out</div>
                      <img
                        src={require("../../assets/icons/drop2.png")}
                        alt="icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="dropdown">
                <button className="dropbtn">
                  <img
                    src={require('../../assets/icons/profile (2).png')}
                    alt="icon"
                  />
                </button>

                <div className="dropdown-content">
                  <div className="dropDownOptions">
                    <Link to="#" className="dropDownProfile">
                      <div className="linkText">Change Password</div>
                      <div className="dropImg">
                        <img
                          src={require('../../assets/icons/ic_pass.png')}
                          alt="icon"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="dropDownOptions">
                    <Link to="/" className="dropDownProfile">
                      <div className="linkText">Sign Out</div>
                      <img
                        src={require('../../assets/icons/drop2.png')}
                        alt="icon"
                      />
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
