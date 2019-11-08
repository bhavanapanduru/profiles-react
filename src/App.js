import React from "react";
import "./App.css";
import ProfileCardComponent from "./components/ProfileCard/ProfileCardComponent";

function App() {
    const profiles = [
        {
            id: 1,
            image:
                "https://www.axiumradonmitigations.com/wp-content/uploads/2015/01/icon-user-default.png",
            name: "Bhavana P",
            age: 23,
            place: "AP"
        },
        {
            id: 2,
            image:
                "https://www.axiumradonmitigations.com/wp-content/uploads/2015/01/icon-user-default.png",
            name: "Bhavana P",
            age: 23,
            place: "AP"
        },
        {
            id: 3,
            image:
                "https://www.axiumradonmitigations.com/wp-content/uploads/2015/01/icon-user-default.png",
            name: "Bhavana P",
            age: 23,
            place: "AP"
        },
        {
            id: 4,
            image:
                "https://www.axiumradonmitigations.com/wp-content/uploads/2015/01/icon-user-default.png",
            name: "Bhavana P",
            age: 23,
            place: "AP"
        },
        {
            id: 5,
            image:
                "https://www.axiumradonmitigations.com/wp-content/uploads/2015/01/icon-user-default.png",
            name: "Bhavana P",
            age: 23,
            place: "AP"
        },
        {
            id: 6,
            image:
                "https://www.axiumradonmitigations.com/wp-content/uploads/2015/01/icon-user-default.png",
            name: "Bhavana P",
            age: 23,
            place: "AP"
        },
        {
            id: 7,
            image:
                "https://www.axiumradonmitigations.com/wp-content/uploads/2015/01/icon-user-default.png",
            name: "Bhavana P",
            age: 23,
            place: "AP"
        },
        {
            id: 8,
            image:
                "https://www.axiumradonmitigations.com/wp-content/uploads/2015/01/icon-user-default.png",
            name: "Bhavana P",
            age: 23,
            place: "AP"
        }
    ];

    return (
        <div className="App">
            {profiles.map(function(profile) {
                return (
                    <ProfileCardComponent person={profile} key={profile.id} />
                );
            })}
        </div>
    );
}

export default App;
