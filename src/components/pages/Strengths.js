import React from "react";

function Strengths() {
  return (
    <div className="strengths">
      <h2 id="opsHeading"> Our Strengths</h2>
      <h3 id="stumped"> We stumped John!</h3>
      <div id="johnInTheBox">
        <img
          src="https://raw.githubusercontent.com/testOrg762/testPic/master/stumpedJohn.png"
          alt=""
          id="stumpedJohn"
        />
      </div>
      <div className="strengthContained">
        <ul id="strengthList">
          <li>Communication</li>
          <li>Ownership</li>
          <li>Support</li>
          <li>Unity</li>
        </ul>
      </div>
    </div>
  );
}

export default Strengths;