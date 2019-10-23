import React from "react";
import "./FaceRecognition.css";

//https://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/7842221242_40deabf89d_o.jpg
//https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center">
      <div className="absolute mt2">
        <img
          id="inputImage"
          alt=""
          src={imageUrl}
          width="500px;"
          height="auto"
        ></img>
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
