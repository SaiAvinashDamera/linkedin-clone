import React from "react";
import Header from "./Header";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import "./Home.css";

function Home() {
  return (
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
  );
}

export default Home;
