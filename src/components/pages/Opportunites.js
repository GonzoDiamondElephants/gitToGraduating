import React from "react";

function Opportunities() {
  return (
    <div className="opps">
      <h2 id="opsHeading"> Our Opportunities</h2>
      <h3 id="stumped"> We stumped John!</h3>
      <div id="johnInTheBox">
        <img
          src="https://raw.githubusercontent.com/testOrg762/testPic/master/stumpedJohn.png"
          alt=""
          id="stumpedJohn"
        />
      </div>
      <div className="opsContained">
        <div id="loadingBox">
          <img
            src="https://thumbs.gfycat.com/BlueSpeedyBrownbear-size_restricted.gif"
            alt=""
            id="loading"
          />
          <img
            src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif"
            alt=""
            id="react"
          />

          <img
            src="https://media1.giphy.com/media/kEQvbJELV2vsfcnwfR/giphy.gif"
            alt=""
            id="social"
          />
        </div>
      </div>
    </div>
  );
}

export default Opportunities;
