import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Register from "./Register";
import Home from "./Home";

import { Routes, Route } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    document.title = "Mockup | LinkedIn";
    window.addEventListener("resize", handleResize, false);

    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        //user logged out
        dispatch(logout());
      }
    });
  }, []);

  const componentSwitch = (condition, Comp1, Comp2) => {
    return !condition ? <Comp1 /> : <Comp2 />;
  };

  return (
    <div
      className="root"
      style={{ width: windowSize.width, height: windowSize.height }}>
      <div
        style={{
          textAlign: "center",
          fontWeight: 400,
          padding: 2,
          backgroundColor: "white",
        }}>
        **DISCLAIMER: This clone is made just for learning and not for
        commercial purposes. I do not own any of the logos, UI/UX**
      </div>
      <Routes>
        <Route path="/" element={componentSwitch(user, Login, Home)}></Route>
        <Route
          path="register"
          element={componentSwitch(user, Register, Home)}></Route>
      </Routes>
    </div>
  );
}

export default App;
