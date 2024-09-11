import React from "react";
import "./TeamGrid.css";

// Import the images
import azaibImage from "../images/Team Member/Azaib.png";
import mazharImage from "../images/Team Member/Mazhar.png";
import anusImage from "../images/Team Member/anus.png";
import ghulamImage from "../images/Team Member/ghulam.jpeg";
import rawaidImage from "../images/Team Member/rawaid.jpeg";

const TeamGrid = () => {
  return (
    <div className="team-grid-container">
      {/* Leader Group 1 */}
      <div className="leader-group">
        <div className="leader">
          <img src={azaibImage} alt="Azaib Khan" className="leader-image" />
          <h2 className="leader-title">Azaib Khan</h2>
          <p className="leader-role">Role</p>
        </div>
        <div className="team-members">
          <div className="team-member">
            <img src={mazharImage} alt="Mazhar Suleman Noorani" className="team-member-image" />
            <h3 className="team-member-title">Mazhar Suleman Noorani</h3>
            <p className="team-member-role">Role</p>
          </div>
          {/* <div className="team-member">
            <img src={ilsaImage} alt="Ilsa" className="team-member-image" />
            <h3 className="team-member-title">Ilsa</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img src={shehriyarImage} alt="Syed Shehriyar" className="team-member-image" />
            <h3 className="team-member-title">Syed Shehriyar</h3>
            <p className="team-member-role">Role</p>
          </div> */}
        </div>
      </div>

      {/* Leader Group 2 */}
      <div className="leader-group">
        <div className="leader">
          <img src={anusImage} alt="Anus Khalil" className="leader-image" />
          <h2 className="leader-title">Anus Khalil</h2>
          <p className="leader-role">Role</p>
        </div>
        <div className="team-members">
          <div className="team-member">
            <img src={ghulamImage} alt="Ghulam Rasool" className="team-member-image" />
            <h3 className="team-member-title">Ghulam Rasool</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img src={rawaidImage} alt="Rawaid Khan" className="team-member-image" />
            <h3 className="team-member-title">Rawaid Khan</h3>
            <p className="team-member-role">Role</p>
          </div>
        </div>
      </div>

      {/* Add more leader groups following the same pattern */}
    </div>
  );
};

export default TeamGrid;
