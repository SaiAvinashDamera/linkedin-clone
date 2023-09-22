import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Register from "./Register";
import PostModal from "./PostModal";
import Home from "./Home";

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

  return (
    <div
      className="root"
      style={{ width: windowSize.width, height: windowSize.height }}>
      {!user ? <Login /> : <Home />}
    </div>
  );
}

export default App;
