import React from "react";
import "./ProfileCardComponent.css";

function ProfileCardComponent({ profile }) {
    return (
        <div className="card">
            <img src={profile[0].image} alt="Person" />
        </div>
    );
}

export default ProfileCardComponent;
