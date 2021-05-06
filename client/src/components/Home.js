import React from "react";
import FromIoT from "./FormIoT";
import Navbar from "./Navbar";
import "../style/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
          {/* <FromIoT /> */}
          <Navbar/>
      </div>
    );
  }
}

export default Home;
