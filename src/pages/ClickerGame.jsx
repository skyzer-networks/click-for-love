import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DirectUpgrades from "../components/ClickerSections/DirectUpgrades";
import AutoUpgrades from "../components/ClickerSections/AutomationUpgrades";
import ClickButton from "../components/ClickerSections/ClickButton";
import '../styles/pages/ClickerGame.css'

export default function ClickerGame() {
    // load state from localStorage
    const [points, setPoints] = useState(() => parseInt(localStorage.getItem("points")) || 0);
    const [clickPower, setClickPower] = useState(() => parseInt(localStorage.getItem("clickPower")) || 1);
    const [cps, setCps] = useState(() => parseInt(localStorage.getItem("cps")) || 0);
    const [owned, setOwned] = useState(() => {
        const saved = localStorage.getItem("owned");
        return saved ? JSON.parse(saved) : {};
    });
    const [hearts, setHearts] = useState([]);
    const navigate = useNavigate();
    
    // unlock heart key state
    const [heartKeyUnlocked, setHeartKeyUnlocked] = useState(() => localStorage.getItem("heartKey") === "true");

    // persist state whenever it changes
    useEffect(() => { localStorage.setItem("points", points); }, [points]);
    useEffect(() => { localStorage.setItem("clickPower", clickPower); }, [clickPower]);
    useEffect(() => { localStorage.setItem("cps", cps); }, [cps]);
    useEffect(() => { localStorage.setItem("owned", JSON.stringify(owned)); }, [owned]);
    useEffect(() => { localStorage.setItem("heartKey", heartKeyUnlocked); }, [heartKeyUnlocked]);

    // cost calculation
    function getCost(upgrade, ownedCount = 0) {
        return Math.floor(upgrade.baseCost * Math.pow(upgrade.growth, ownedCount));
    }

    // handle click
    function handleClick() {
        setPoints(p => p + clickPower);
        spawnHearts();
    }

    // spawn hearts
    function spawnHearts() {
        const newHearts = Array.from({ length: 6 }).map(() => ({
            id: crypto.randomUUID(),
            left: Math.random() * 100
        }));
        setHearts(h => [...h, ...newHearts]);

        setTimeout(() => {
            setHearts(h => h.filter(hc => !newHearts.some(nh => nh.id === hc.id)));
        }, 1500);
    }

    const [username, setUsername] = useState(() => {
        const saved = localStorage.getItem("username");
        if (saved) return saved;

        const name = prompt("What's your name?") || "Player";
        localStorage.setItem("username", name);
        return name;
    });

    // Ask for name if not set
    useEffect(() => {
        if (!username) {
            const name = prompt("What's your name?") || "Player";
            setUsername(name);
            localStorage.setItem("username", name);
        }
    }, []);

    // buy direct upgrade
    function buyDirectUpgrade(upgrade) {
        const count = owned[upgrade.id] || 0;
        const cost = getCost(upgrade, count);
        if (points < cost) return;

        setPoints(p => p - cost);

        if (upgrade.id === "heart_key") {
            setHeartKeyUnlocked(true);
            localStorage.setItem("heartKey", "true");

            alert("A secret has appeared! Go back to the Home screen to discover it! ❤️");
            navigate("/"); // automatically go back to Home
        } else {
            setClickPower(p => p + upgrade.power);
        }

        setOwned(o => ({ ...o, [upgrade.id]: count + 1 }));
    }

    // buy auto upgrade
    function buyAutoUpgrade(upgrade) {
        const count = owned[upgrade.id] || 0;
        const cost = getCost(upgrade, count);
        if (points < cost) return;

        setPoints(p => p - cost);
        setCps(c => c + upgrade.cps);
        setOwned(o => ({ ...o, [upgrade.id]: count + 1 }));
    }

    // apply CPS every second
    useEffect(() => {
        const interval = setInterval(() => setPoints(p => p + cps), 1000);
        return () => clearInterval(interval);
    }, [cps]);

    return (
        <div className="clicker-game">
            {/* Falling hearts */}
            <div className="heart-layer">
                {hearts.map(heart => (
                    <span key={heart.id} className="heart" style={{ left: `${heart.left}%` }}>
                        ❤️
                    </span>
                ))}
            </div>

            {/* Auto upgrades */}
            <div className="auto-upgrades">
                <AutoUpgrades
                    points={points}
                    owned={owned}
                    getCost={getCost}
                    buyUpgrade={buyAutoUpgrade}
                />
            </div>

            {/* Click button */}
            <div className="click-button">
                <ClickButton
                    points={points}
                    clickPower={clickPower}
                    cps={cps}
                    onClick={handleClick}
                />
            </div>

            {/* Direct upgrades */}
            <div className="direct-upgrades">
                <DirectUpgrades
                    points={points}
                    owned={owned}
                    getCost={getCost}
                    buyUpgrade={buyDirectUpgrade}
                />
            </div>
        </div>
    );
}
