/*global google*/
import React, { Component } from "./node_modules/react";
import { MDBRow, MDBCol, MDBInput } from "./node_modules/mdbreact";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      // sAddress: ""
    };
    // this.autocomplete = null;
    // this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    // this.handleChangeAddress = this.handleChangeAddress.bind(this);
    // this.handleSubmitAddress = this.handleSubmitAddress.bind(this);
  }

  // componentDidMount() {
  //   this.autocomplete = new google.maps.places.Autocomplete(
  //     document.getElementById("autocomplete"),
  //     {}
  //   );

  //   this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  // }

  // handlePlaceSelect() {
  //   let addressObject = this.autocomplete.getPlace();
  //   let address = addressObject.address_components;
  //   this.setState({
  //     name: addressObject.name,
  //     sAddress: `${address[0].long_name} ${address[1].long_name}`,
  //     city: address[4].long_name,
  //     state: address[6].short_name,
  //     zipcode: address[8].short_name,
  //     googleMapLink: addressObject.url
  //   });
  // }

  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <div>
        <span>
          <input id="autocomplete" ref="input" type="text" />
          <MDBInput
            id="sAddress"
            name="sAddress"
            type="text"
            label="Street Address"
            value={this.props.sAddress}
            onChange={this.props.handleChange}
            required
          />
        </span>
        <MDBRow>
          <MDBCol md="6">
            <MDBInput
              id="sAddress2"
              name="sAddress2"
              type="text"
              value={this.props.sAddress2}
              onChange={this.props.handleChange}
              label="APT / SUITE / OTHER"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              id="zipcode"
              name="zipcode"
              type="number"
              value={this.props.zipcode}
              onChange={this.props.handleChange}
              label="ZIP Code"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              id="city"
              name="city"
              type="text"
              value={this.props.city}
              onChange={this.props.handleChange}
              label="City"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              id="state"
              name="state"
              type="text"
              value={this.props.state}
              onChange={this.props.handleChange}
              label="State"
            />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Address;
