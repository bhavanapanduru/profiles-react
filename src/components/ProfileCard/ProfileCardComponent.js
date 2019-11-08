import React from "react";
import "./ProfileCardComponent.css";

function ProfileCardComponent({ person }) {
    return (
        <div className="card">
            <img src={person[0].image} alt="Person" />
            <div className="name">{person[0].name}</div>
        </div>
    );
}

export default ProfileCardComponent;
