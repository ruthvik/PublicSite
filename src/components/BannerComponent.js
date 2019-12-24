import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div className="bannerContainer">
        <img
          src="https://svgsilh.com/svg/971341.svg"
          width="400"
          height="200"
          alt="Banner Image"
        />
        <div className="parentContent">
          <div className="textContent">CALL: (+91)-7416-1662-62 </div>
          <div>
            <span className="dot">g+</span>
            <span className="dot">f</span>
            <span className="dot">L</span>
            <span className="dot">I</span>
          </div>
          <div className="textContent">
            {" "}
            370 Telok Blangah Road (Level 2), Singapore 098835
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
