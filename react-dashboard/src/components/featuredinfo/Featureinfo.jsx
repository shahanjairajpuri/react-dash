import "./featureinfo.css";
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

function Featureinfo() {
  return (
    <div className = "featured">
    <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
    
      <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,500</span>
          <span className="featuredMoneyRate">-11.4<ArrowDownward className="featuredIcons negative"/></span>
       </div>
       <span className="featuredSub">Compare to last Month</span>
    </div>

    <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
    
      <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,900</span>
          <span className="featuredMoneyRate">-1.4<ArrowDownward className="featuredIcons negative"/></span>
       </div>
       <span className="featuredSub">Compare to last Month</span>
    </div>

    <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
    
      <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,500</span>
          <span className="featuredMoneyRate">+2.4.<ArrowUpward className="featuredIcons "/></span>
       </div>
       <span className="featuredSub">Compare to last Month</span>
    </div>
</div>
  );
}

export default Featureinfo;
