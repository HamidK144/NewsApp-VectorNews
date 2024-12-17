import React, { Component } from "react";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import AllRoutes from "../routes/AllRoutes";
import SideBar from "../SideBar/SideBar";

class Layout extends Component {
  render() {
    return (
      <div className="App-Container">
        <div className="Header-bar">
          <Header />
        </div>
        <div className="App-content">
          <NavigationBar />
          <AllRoutes />
          <SideBar />
        </div>
      </div>
    );
  }
}

export default Layout;