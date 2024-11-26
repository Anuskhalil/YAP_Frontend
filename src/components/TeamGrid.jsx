import React from "react";
import "./TeamGrid.css";
// Import team member images
import azaib from "../images/TeamMember/azaib.png";
import mazhar from "../images/TeamMember/mazhar.png";
import anus from "../images/TeamMember/anus.png";
import ghulam from "../images/TeamMember/ghulam.jpeg";
import rawaid from "../images/TeamMember/rawaid.jpeg";
import noman from "../images/TeamMember/noman.jpg";
import mariyam from "../images/TeamMember/mariyam.jpg";
import eeman from "../images/TeamMember/eeman2.jpg";
import aqsa from "../images/TeamMember/aqsa.jpg";

const TeamGrid = () => {
  // Team member data
  const teamMembers = [
    { name: "Azaib Khan", role: "Leader", image: azaib },
    { name: "Mazhar Suleman Noorani", role: "Team Member", image: mazhar },
    { name: "Anus Khalil", role: "Leader", image: anus },
    { name: "Ghulam Rasool", role: "Team Member", image: ghulam },
    { name: "Rawaid Khan", role: "Team Member", image: rawaid },
    { name: "Noman", role: "Team Member", image: noman },
    { name: "Mariyam", role: "Team Member", image: mariyam },
    { name: "Eeman", role: "Team Member", image: eeman },
    { name: "Aqsa", role: "Team Member", image: aqsa },
  ];

  return (
    <div className="team-grid-container">
      {teamMembers.map((member, index) => (
        <div className="team-member flip-card" key={index}>
          <div className="flip-card-inner">
            {/* Front side */}
            <div className="flip-card-front">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-image"
              />
            </div>
            {/* Back side */}
            <div className="flip-card-back">
              <h3 className="team-member-title">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
