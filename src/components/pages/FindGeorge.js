import React from "react";
import AnimatedModal from "./animated-modal.component";

function FindGeorge() {
  return (
    <div className="findGeorge">
      <div>
        <section>
          <div className="spotlight">
            <h1 id="useThis">Use the map to find George!</h1>
            <AnimatedModal />
          </div>
        </section>
      </div>
    </div>
  );
}

export default FindGeorge;
