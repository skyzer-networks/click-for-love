import { useState } from "react";
import { Navigate } from "react-router-dom";
import '../styles/pages/Secret.css';
import yesSound from "../assets/audio/yippee-tbh.mp3";

export default function SecretPage() {
    const heartKeyUnlocked = localStorage.getItem("heartKey") === "true";
    if (!heartKeyUnlocked) return <Navigate to="/" replace />;

    const username = localStorage.getItem("username") || "Player";

    // State to track if No button is gone
    const [noGone, setNoGone] = useState(false);

    // YES button click
    function handleYes() {
        const audio = new Audio(yesSound);
        audio.play();
        alert("YIPPI!!!!!!!");
    }

    // NO button hover → permanently remove
    function handleNoHover() {
        setNoGone(true);
    }

    return (
        <div className="secret-screen">
            <h1>You got to the secret!</h1>
            <p>{username}, will you be my Valentine? ❤️</p>
            <div className="secret-buttons">
                <button className="yes-button" onClick={handleYes}>
                    YES
                </button>
                {!noGone && (
                    <button className="no-button" onMouseEnter={handleNoHover}>
                        NO
                    </button>
                )}
            </div>
        </div>
    );
}
