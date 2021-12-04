import React from "react";
import "./index.css";
import CustomSelect from "./custom-select";
import { updatedCountries } from "./data";

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: updatedCountries,
      fetchingData: false,
      selectedOption: updatedCountries[0].label
    };

  }

  handleChange = (selectedOption) => {
    this.setState({
      selectedOption: selectedOption ? selectedOption.label : ""
    });
  };

  render() {
    const { data, fetchingData, selectedOption } = this.state;

    return (
      <div className="App">
        <CustomSelect
          options={updatedCountries}
          fetchingData={fetchingData}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SelectComponent;
