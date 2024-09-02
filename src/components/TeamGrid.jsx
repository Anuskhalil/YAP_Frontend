import React from "react";
import "./TeamGrid.css";

const TeamGrid = () => {
  return (
    <div className="team-grid">
      {/* Leader Section */}
      <div className="leader">
        <img
          src="./src/images/President Arts Council.jpg"
          alt="Leader Name"
          className="leader-image"
        />
        <h2 className="leader-title">Muhammad Ahmed Shah</h2>
        <p className="leader-role">President at Arts Council</p>
      </div>

      {/* Team Members Section */}
      <div className="team-members">
        {/* Row 1 - 4 images */}
        <div className="team-row">
          <div className="team-member">
            <img
              src="./src/images/Team Member/azaib.png"
              alt="Member 1"
              className="team-member-image"
            />
            <h3 className="team-member-title">Azaib Khan</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img
              src="./src/images/Team Member/Mazhar.png"
              alt="Member 2"
              className="team-member-image"
            />
            <h3 className="team-member-title">Mazhar Suleman Noorani</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img
              src=""
              alt="Member 3"
              className="team-member-image"
            />
            <h3 className="team-member-title">Ilsa</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img
              src=""
              alt="Member 4"
              className="team-member-image"
            />
            <h3 className="team-member-title">Syed Shehriyar</h3>
            <p className="team-member-role">Role</p>
          </div>
        </div>

        {/* Row 2 - 6 images */}
        <div className="team-row">
          {/* Add 6 team members here */}
          <div className="team-member">
            <img
              src="./src/images/Team Member/anus.png"
              alt="Member 4"
              className="team-member-image"
            />
            <h3 className="team-member-title">Anus Khalil</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img
              src="./src/images/Team Member/ghulam.jpeg"
              alt="Member 4"
              className="team-member-image"
            />
            <h3 className="team-member-title">Ghulam Rasool</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img
              src="./src/images/Team Member/rawaid.jpeg"
              alt="Member 4"
              className="team-member-image"
            />
            <h3 className="team-member-title">Rawaid Khan</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img
              src="./src/images/Team Member/Ali.jpeg"
              alt="Member 4"
              className="team-member-image"
            />
            <h3 className="team-member-title">Ali Mehdi</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img
              src="./src/images/Team Member/Noman.jpg"
              alt="Member 4"
              className="team-member-image"
            />
            <h3 className="team-member-title">Noman</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img
              src="./src/images/Team Member/alim.jpg"
              alt="Member 4"
              className="team-member-image"
            />
            <h3 className="team-member-title">Ali Mohiuddin</h3>
            <p className="team-member-role">Role</p>
          </div>
        </div>

        {/* Row 3 - 7 images */}
        <div className="team-row">
          {/* Add 7 team members here */}
          <div className="team-member">
            <img
              src="./src/images/Team Member/eeman2.jpg"
              alt="Member 4"
              className="team-member-image"
            />
            <h3 className="team-member-title">Eiman</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img
              src="./src/images/Team Member/mahnoor.jpg"
              alt="Member 4"
              className="team-member-image"
            />
            <h3 className="team-member-title">Mahnoor</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img
              src="./src/images/Team Member/Arisha.jpg"
              alt="Member 4"
              className="team-member-image"
            />
            <h3 className="team-member-title">Arisha</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img
              src="./src/images/Team Member/aqsa.jpg"
              alt="Member 4"
              className="team-member-image"
            />
            <h3 className="team-member-title">Aqsa</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img
              src="./src/images/Team Member/mariyam.jpg"
              alt="Member 4"
              className="team-member-image"
            />
            <h3 className="team-member-title">Mariyam</h3>
            <p className="team-member-role">Role</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
