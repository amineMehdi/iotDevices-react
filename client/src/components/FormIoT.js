import React from "react";
import Select from "react-select";
import "../style/FormIoT.css";
class FromIoT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      description: "",
      type: "other",
      functionTime: 1,
      temperature: 20,
      online: "on",
    };
    this.initState = { ...this.state };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    this.setState({
      ...this.initState,
      value: null,
    });
  }
  handleChange(event, meta = null) {
    console.log(this.state);
    if (meta) {
      this.setState({
        [meta.name]: event.value,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }
  render() {
    const tempOptions = Array(9)
      .fill(0)
      .map((_, index) => {
        return index
          ? { value: index * 5, label: `${index * 5} °C` }
          : { value: 1, label: "1 °C" };
      });
    const functionOptions = Array(7)
      .fill(0)
      .map((_, index) => {
        return index
          ? { value: index * 5, label: `${index * 5} minutes` }
          : { value: 1, label: "One minute" };
      });
    const typeOptions = [
      { value: "LPWANs", label: "Low Power Wide Area Networks" },
      { value: "Ceullular", label: "3G/4G/5G" },
      { value: "Zigbee", label: "Zigbee and Other Mesh Protocols" },
      { value: "Bluetooth", label: "Bluetooth and BLE" },
      { value: "Wifi", label: "Wi-Fi" },
      { value: "Rfid", label: "RFID" },
      { value: "other", label: "Other" },
    ];
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChange(event)}
          />
        </label>
        <br />
        <label>
          Number:
          <input
            name="number"
            type="number"
            value={this.state.number}
            onChange={(event) => this.handleChange(event)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={this.state.description}
            onChange={(event) => this.handleChange(event)}
          />
        </label>
        <br />
        <label>
          Type:
          <Select
            name="type"
            value={this.state.value}
            options={typeOptions}
            onChange={(event, name) => this.handleChange(event, name)}
            placeholder="Other by default"
          />
        </label>
        <br />
        <label>
          Temperature:
          <Select
            name="temperature"
            value={this.state.value}
            options={tempOptions}
            onChange={(event, name) => this.handleChange(event, name)}
            placeholder="20°C by default"
          />
        </label>
        <br />
        <label>
          Functioning Time :
          <Select
            name="functionTime"
            value={this.state.value}
            options={functionOptions}
            onChange={(event, name) => this.handleChange(event, name)}
            placeholder="One minute by default"
          />
        </label>
        <br />
        <label>
          State :
          <select
            name="online"
            value={this.state.online}
            onChange={(event) => this.handleChange(event)}
          >
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </label>
        <br />
        <label>
          <button type="submit" value="Submit">
            Submit
          </button>
        </label>
      </form>
    );
  }
}

export default FromIoT;
