import React, { Component } from "react";

import GetImageButton from "./GetImageButton";
import ImageDisplay from "./ImageDisplay";

const API_KEY =
  "BdvqGJymoWed4FtNFJ5yssVqTsMduPnkcgi016ul";

class GetImageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    };
  }
      handleCamera = e => {
      this.setState({ camera: e.target.value });
    };
    handleRover = e => {
      this.setState({ rover: e.target.value });
    };
    handleSol = e => {
      this.setState({ sol: e.target.value });
    };

    fetchRoverImage = e =>{
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

      fetch(imageUrl).then(response =>{
      return response.json().then( data=> {
        console.log("NASA Data:", data);

        this.setState({images: data.photos});
        console.log(this.state.images)

    });
    });
    }


  render() {
    return (
      <div>
        <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRover} id="rover" value={this.state.value}>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirt</option>
        </select>
        <label htmlFor="camera">Camera Type</label>
        <select
          onChange={this.handleCamera}
          id="rover"
          value={this.state.value}
        >
          <option value="fhaz">FHAZ (Front Hazard)</option>
          <option value="rhaz">RHAZ (Rear Hazard)</option>
          <option value="navcam">NAVCAM (Navigation Cam)</option>
        </select>
        <label htmlFor="sol">Martian Sol: 1000-2000</label>
        <input
          type="number"
          onChange={this.handleSol}
          max="2000"
          min="1000"
          value={this.state.value}
        />
        <GetImageButton fetchRoverImage={this.fetchRoverImage} />
        <ImageDisplay images={this.state.images} />
      </div>
    );
  }
}

export default GetImageForm;
