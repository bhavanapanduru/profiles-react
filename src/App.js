import React from "react";
import "./App.css";
import ProfileCardComponent from "./components/ProfileCard/ProfileCardComponent";

function App() {
    const profiles = [
        {
            image:
                "https://www.axiumradonmitigations.com/wp-content/uploads/2015/01/icon-user-default.png",
            name: "Bhavana P",
            age: 23,
            place: "AP"
        }
    ];
    return (
        <div className="App">
            <ProfileCardComponent person={profiles} />
        </div>
    );
}

export default App;
