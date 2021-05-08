import React from "react";

class IotList extends React.Component {
  constructor(props) {
    super(props);
    this.getAllDevices = this.getAllDevices.bind(this);

  }
  async getAllDevices(){
    return await fetch("http://localhost:4200/");    
  }
  render() {
    const allIotDevices = this.getAllDevices;
    return (
        <div className="iotList-container">
            {allIotDevices}
        </div>
    );
  }
}

export default IotList;
