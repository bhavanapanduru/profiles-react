import React from "react";
import "./App.css";
import ProfileCardComponent from "./components/ProfileCard/ProfileCardComponent";

function App() {
    const profile = [
        {
            image:
                "https://png.pngtree.com/svg/20161230/little_helper_657605.png"
        }
    ];
    return (
        <div className="App">
            <ProfileCardComponent profile={profile} />
        </div>
    );
}

export default App;
