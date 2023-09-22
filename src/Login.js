import React, { useState } from "react";
import "./Login.css";
import LoginHeader from "./LoginHeader";
import "./Buttons.css";
import LinksSection from "./LinksSection";
import { signInAPI } from "./app/actions/actions";
import { Link } from "react-router-dom";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const dispatch = useDispatch();

  // const loginToApp = (e) => {
  //   e.preventDefault();

  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((userAuth) => {
  //       dispatch(
  //         login({
  //           email: userAuth.user.email,
  //           uid: userAuth.user.uid,
  //           displayName: userAuth.user.displayName,
  //         })
  //       );
  //     })
  //     .catch((error) => alert(error));
  // };

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
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </form>

          <div className="login__forgotPassword">Forgot password?</div>

          <div
            className="buttonSolid"
            style={{ width: 330, padding: 15, fontSize: 16 }}
            onClick={signInAPI(email, password)}>
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
          <Link
            to="register"
            className="buttonColorBorder"
            style={{
              width: 330,
              padding: 15,
              fontSize: 16,
              marginBlock: 10,
              color: "#555",
              borderColor: "#555",
              textDecoration: "none",
            }}>
            New to LinkedIn? Join now
          </Link>
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
