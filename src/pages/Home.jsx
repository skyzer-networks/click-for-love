import { useNavigate } from "react-router-dom"; 
import { useEffect, useState } from "react";

import '../styles/pages/home.css';
import FallingHearts from "../components/FallingHearts/FallingHearts";
import PolaroidStack from "../components/PolaroidStack/PolaroidStack";

function Home() {
    const navigate = useNavigate();
    const [heartKeyUnlocked, setHeartKeyUnlocked] = useState(false);

    useEffect(() => {
        const unlocked = localStorage.getItem("heartKey") === "true";
        setHeartKeyUnlocked(unlocked);
    }, []);

    return (
        <div className="title_container">
            <PolaroidStack />
            <FallingHearts />
            <div className="menu_container">
                <div className="menu_holder">
                    <h1 className="menu_title">Click For Love</h1>
                    <p className="menu_desc">A short description that can have a sweet loving message.</p>
                    <div className="menu_button_holder">
                        <button className="menu_button" onClick={() => navigate("/clicker")}>
                            Click now!
                        </button>
                        <button
                            className="menu_button"
                            onClick={() =>
                                window.open("https://github.com/michaelyurachek?tab=repositories", "_blank")}
                        >
                            Source Code
                        </button>

                        {heartKeyUnlocked && (
                            <button className="menu_button secret-button" onClick={() => navigate("/secret")}>
                                Little Secret
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
