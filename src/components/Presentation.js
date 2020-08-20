import React from "react";
import TeamIntro from "./pages/TeamIntro";
import Opportunities from "./pages/Opportunites";
import Strengths from "./pages/Strengths";
import PresHeader from "./pages/PresHeader";
import FindGeorge from "./pages/FindGeorge.js";
import Demo from "./pages/Demo";
import GeorgeModal from "./pages/GeorgeModal.js";
import DisclaimerModal from "./pages/DisclaimerModal.js";

import "../styles/styles.scss";
import "../styles/presHeader.scss";
import "../styles/demo.scss";
import "../styles/opportunities.scss";
import "../styles/probDomain.scss";
import "../styles/findGeorge.scss";
import "../styles/strengths.scss";
import "../styles/teamIntros.scss";
import "../styles/modal.scss";
import "../styles/weasleyAnimate.scss";
export default function Presentation() {
  return (
    <div>
      <PresHeader />
      <DisclaimerModal />
      <TeamIntro />
      <Opportunities />
      <Strengths />
      <GeorgeModal />
      <FindGeorge />
      <Demo />
    </div>
  );
}
