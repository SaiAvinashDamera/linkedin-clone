import React from "react";
import "./Register.css";
import "./Buttons.css";

function Register() {
  const footer_links = [
    "About",
    "Accessibilty",
    "UserAgreement",
    "Privacy Policy",
    "Cookie Policy",
    "Brand Policy",
    "Guest Controls",
    "Community Guidelines",
    "Language",
  ];
  return (
    <div className="register">
      <div className="register__main">
        <div className="register__header">
          <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" />
          </div>
        </div>

        <div className="register__body">
          <div className="body__heading">
            Make the most of your professional life
          </div>
          <div className="siginup__container">
            <form>
              <p>Email or phone number</p>
              <input type="email" />
              <p>Password (6+ characters)</p>
              <input type="password" />
            </form>
            <div className="body__agreement">
              By clicking Agree & Join, you agree to the LinkedIn User
              Agreement, Privacy Policy, and Cookie Policy.
            </div>
            <div
              className="buttonSolid"
              style={{ width: 330, padding: 15, fontSize: 16 }}>
              Agree & Join
            </div>
            <div className="login__divider">&emsp;or&emsp;</div>
            <div
              className="buttonColorBorder"
              style={{
                width: 330,
                paddingInline: 15,
                paddingBlock: 8,
                fontSize: 14,
                color: "#333",
                marginBottom: 25,
                borderWidth: 1.5,
                borderColor: "black",
              }}>
              Continue with Google
            </div>
            <div className="register__signin">
              Already on LinkedIn? <span>Sign in</span>
            </div>
          </div>

          <div className="register__signin register__gethelp">
            Looking to create a page for a business? <span>Get help</span>
          </div>
        </div>

        <div className="footer">
          <div className="footerContainer">
            <img
              className="bottom__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
            />
            <p>© 2023</p>

            {footer_links.map((link) => (
              <a>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
