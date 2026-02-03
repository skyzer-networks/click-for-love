import { autoUpgrades } from "../../data/upgrades";
import '../../components/ClickerSections/upgrades.css'
import { formatNumber } from "../../utils/formatNumber";

export default function AutoUpgrades({ points, owned, getCost, buyUpgrade }) {
    return (
        <div className="upgrade-holder">
            <h3 className="upgrade-title">Automation</h3>

            {autoUpgrades.map(upg => {
                const count = owned[upg.id] || 0;
                const cost = getCost(upg, count);

                return (
                    <button
                        key={upg.id}
                        className="upgrade-button"
                        disabled={points < cost}
                        onClick={() => buyUpgrade(upg)}
                    >
                        <div className="upgrade-top">
                            <span className="upgrade-name">
                                {upg.name}
                            </span>

                            <span className="upgrade-price">
                                Price: {formatNumber(cost)}
                            </span>
                        </div>

                        <div className="upgrade-count">
                            {formatNumber(count)}
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
