import "./widgetLg.css";

function WidgetLg() {
  const Button =({type})=>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }

  
  return (
    <div className="widgetLg">
     <h3 className="widgetLgTitile">Latest Transactions</h3>
    <table className="widgetLgTable">
      <tr className="widgetLgTr">
        <th className="widgetLgTh">Customers</th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh">Amounts</th>
        <th className="widgetLgTh">Status</th>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://lh3.googleusercontent.com/-UuJR4F3I934/WTIgvMzLUjI/AAAAAAAABN4/oOVU-0VHW9kRnf2WMS8pm428yE6869mLwCHM/s400/CYMERA_20170603_102425.jpg" alt="" 
            className="widgetLgImg" 
          />
         <span className="widgetLgName">Olivia Perril</span>
        </td>
        <td className="widgetLgDate">25 April 2021</td>
        <td className="widgetLgAmount">$136.2</td>
        <td className="widgetLgStatue"><Button type="Approved"/>
        </td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://cdn.jsdelivr.net/gh/csong01/picgo@master/img/favicon.jpg"  alt=""
           className="widgetLgImg" />
         <span className="widgetLgName">Celeb Dan</span>
        </td>
        <td className="widgetLgDate">25 April 2021</td>
        <td className="widgetLgAmount">$136.2</td>
        <td className="widgetLgStatue"><Button type="Decline"/>
        </td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://www.wikihow.com/images/thumb/b/bf/Become-a-Licensed-Social-Worker-Step-5.jpg/v4-728px-Become-a-Licensed-Social-Worker-Step-5.jpg" alt=""
          className="widgetLgImg"  />
         <span className="widgetLgName">Luke Bev</span>
        </td>
        <td className="widgetLgDate">25 April 2021</td>
        <td className="widgetLgAmount">$136.2</td>
        <td className="widgetLgStatue"><Button type="Pending"/>
        </td>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://www.wikihow.com/images/thumb/0/0d/Make-Money-from-Home-Step-16.jpg/aid1519534-v4-728px-Make-Money-from-Home-Step-16.jpg" alt=""
          className="widgetLgImg"  />
         <span className="widgetLgName">Marcus Bont</span>
        </td>
        <td className="widgetLgDate">25 April 2021</td>
        <td className="widgetLgAmount">$136.2</td>
        <td className="widgetLgStatue"><Button type="Approved"/>
        </td>
      </tr>
    </table>
    </div>
  );
}

export default WidgetLg;
