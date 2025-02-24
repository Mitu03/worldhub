import FutureofTrade from "./FutureofTrade";
import ChallengesGlobal from "./ChallengesGlobal";
import EconomicImpactDT from "./EconomicImpactGT";
import GlobalTrade from "./GlobalTrade";
import ImpactBusinesses from "./ImpactBusinesses";
function Trade() {
  return (
    <div className="Trade--MainContent">
      <GlobalTrade />
      <ChallengesGlobal />
      <FutureofTrade />
      <EconomicImpactDT />

      <ImpactBusinesses />
    </div>
  );
}

export default Trade;
