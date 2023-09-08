import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import Login from "./Login";
import { selectUser } from "./features/userSlice";
import Widgets from "./Widgets";
import Register from "./Register";

function App() {
  const user = useSelector(selectUser);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          {/* App Body */}
          <div className="app__body">
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
