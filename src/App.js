import React from "react";
import "./App.css";
import ProfileCardComponent from "./components/ProfileCard/ProfileCardComponent";

function App() {
    const profile = [
        {
            image:
                "https://www.axiumradonmitigations.com/wp-content/uploads/2015/01/icon-user-default.png"
        }
    ];
    return (
        <div className="App">
            <ProfileCardComponent profile={profile} />
        </div>
    );
}

export default App;
