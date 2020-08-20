import React from "react";

function TeamIntro() {
  // const styles = {
  //   footer: {
  //     bottom: 0,
  //     textAlign: "center",
  //     position: "fixed",
  //     left: 0,
  //     width: "100%",
  //     height: "100px",
  //     fontFamily: "Jolly Lodger",
  //     backgroundImage:
  //       "url(https://media0.giphy.com/media/12wteMTXxjLaVO/200.gif)",
  //     color: "white",
  //     fontSize: "5rem"
  //   }
  // };
  return (
    <div className="intros">
      <div className="spacing"></div>
      <div>
        <div className="imgContainer">
          <img
            src="https://raw.githubusercontent.com/testOrg762/testPic/master/henok.png"
            alt=""
            className="teamPics"
            id="henok"
          />
        </div>
        <div className="imgContainer">
          <img
            src="https://raw.githubusercontent.com/testOrg762/testPic/master/randee.png"
            alt=""
            className="teamPics"
            id="randee"
          />
        </div>
        <div className="imgContainer">
          <img
            src="https://raw.githubusercontent.com/testOrg762/testPic/master/sian.png"
            alt=""
            className="teamPics"
            id="sian"
          />
        </div>
        <div className="goatOne">
          <img
            src="https://media0.giphy.com/media/2aLveEDJm3OAGegmMn/source.gif"
            alt=""
            className="goatOne"
          />
        </div>
      </div>
    </div>
  );
}

export default TeamIntro;
