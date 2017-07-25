import React, { Component } from "react";

class GetImageButton extends Component {
    render(){
        return(
            <button onClick={this.props.fetchRoverImage}>Get Image</button>
        )
    }


}

export default GetImageButton;