import '../../components/ClickerSections/ClickButton.css'
import clickButton from '../../assets/images/gameIcons/heartButton.png'
import { formatNumber } from "../../utils/formatNumber";

export default function ClickButton({ points, clickPower, cps, onClick }) {
    return (
        <div className="click-center">
            <h2 className="clicker-points">{formatNumber(points)} Hearts</h2>

            <div className="click-stats">
                <div className="click-per">{formatNumber(clickPower)} per click</div>
                <div className="click-second">{formatNumber(cps)} per second</div>
            </div>

            <button className="click-btn" onClick={onClick}>
                <img className="click-image" src={clickButton} alt='clickButton' draggable='false' />
            </button>
        </div>
    );
}