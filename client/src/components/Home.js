import React from "react";
import FromIoT from "./FormIoT";
import IotList from "./IotList";
import "../style/Home.css";
import logo from "../images/logo.svg";
class Home extends React.Component {
  render() {
    return (
      <div>
          <nav>
            <div className="logo-container">
              <img src={logo} alt="logo"/>
            </div>
            <div className="add-btn-container">
              <button className="btn">Add Device</button>
            </div>
          </nav>
          <FromIoT display={true}/>
          <IotList/>
      </div>
    );
  }
}

export default Home;
