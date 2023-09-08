import React from "react";
import "./Login.css";
import LoginHeader from "./LoginHeader";
import "./Buttons.css";
import LinksSection from "./LinksSection";
import { auth } from "./firebase";

function Login() {
  const links = [
    {
      id: "General",
      links: [
        "Sign Up",
        "Help Center",
        "About",
        "Press",
        "Blog",
        "Careers",
        "Developers",
      ],
    },

    {
      id: "Browse LinkedIn",
      links: ["Learning", "Jobs", "Salary", "Mobile", "Services", "Products"],
    },

    {
      id: "Business Solutions",
      links: ["Talent", "Marketing", "Sales", "Learning"],
    },

    {
      id: "Directories",
      links: [
        "Members",
        "Jobs",
        "Companies",
        "Featured",
        "Learning",
        "Posts",
        "Articles",
        "Schools",
        "News",
        "Services",
        "Products",
        "Advice",
        "People Search",
      ],
    },
  ];

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

  const loginToApp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <LoginHeader />
      <div className="loginbody">
        <div className="login__left">
          <div className="login__welcomeText">
            Welcome to your professional Community
          </div>
          <form>
            <p>Email or phone</p>
            <input type="text" />
            <p>Password</p>
            <input type="password" />
          </form>

          <div className="login__forgotPassword">Forgot password?</div>

          <div
            className="buttonSolid"
            style={{ width: 330, padding: 15, fontSize: 16 }}>
            Sign in
          </div>
          <div className="login__divider">&emsp;or&emsp;</div>
          <div
            className="buttonColorBorder"
            style={{
              width: 330,
              paddingInline: 15,
              paddingBlock: 8,
              marginBlock: 10,
              fontSize: 14,
              color: "#555",
              borderColor: "lightgray",
            }}>
            Continue with Google
          </div>
          <div
            className="buttonColorBorder"
            style={{
              width: 330,
              padding: 15,
              fontSize: 16,
              marginBlock: 10,
              color: "#555",
              borderColor: "#555",
            }}>
            New to LinkedIn? Join now
          </div>
        </div>

        <div className="login__right">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt=""
          />
        </div>
      </div>

      <div className="login__bottom">
        <div className="bottom__links">
          <img
            className="bottom__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
          />
          <LinksSection links={links} />
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

export default Login;
