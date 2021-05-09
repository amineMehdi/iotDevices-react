import React from "react";

class IotList extends React.Component {
  constructor(props) {
    super(props);
    // this.getAllDevices = this.getAllDevices.bind(this);
    this.state = {
      data: null,
    };
  }
  // async getAllDevices() {
  //   const requestOptions = {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   };
  //   const response = await fetch("http://localhost:4200/", requestOptions);
  //   return response;
  // }
  componentDidMount() {
    fetch("http://localhost:4200")
      .then((response) => response.json())
      .then((data) => this.setState({...data})).catch(e => console.log(e));
  }
  render() {
    console.log(this.state);
    return (
      <div className="iotList-container">
        {this.state.data}
        Hello
      </div>
    );
  }
}

export default IotList;
