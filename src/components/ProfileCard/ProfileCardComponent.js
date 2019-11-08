import React from "react";
import "./ProfileCardComponent.css";

function ProfileCardComponent({ person }) {
    return (
        <div className="card">
            <img src={person[0].image} alt="Person" />
            <div className="name">{person[0].name}</div>
            <ul class="description">
                <li>Age: {person[0].age}</li>
                <li>Place: {person[0].place}</li>
            </ul>
        </div>
    );
}

export default ProfileCardComponent;
