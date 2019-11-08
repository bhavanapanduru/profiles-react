import React from "react";
import "./ProfileCardComponent.css";

function ProfileCardComponent({ person }) {
    return (
        <div className="card">
            <img src={person.image} alt="Person" />
            <div className="name">{person.name}</div>
            <ul id="description">
                <li id="age">Age: {person.age}</li>
                <li id="place">Place: {person.place}</li>
            </ul>
        </div>
    );
}

export default ProfileCardComponent;
