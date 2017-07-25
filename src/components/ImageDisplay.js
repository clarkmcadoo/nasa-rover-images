import React, { Component } from "react";

class ImageDisplay extends Component {
    render(){
        let imageArray = this.props.images;
        let photos = imageArray.map((image, index) => {
            return(
                <li key={index}>
                <img src={image.img_src} alt={index}></img>

                </li>

            )
        });
        return(
            <div>
            {photos}
            </div>);
    }


}

export default ImageDisplay;