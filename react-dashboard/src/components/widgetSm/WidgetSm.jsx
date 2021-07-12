import "./widgetSm.css";
import {Visibility} from '@material-ui/icons';

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Interns ....</span>
      <ul className="widgetSmList">
          <li className="widgetSmListItem">
              <img src="https://s3.amazonaws.com/magoosh-company-site/wp-content/uploads/sites/13/2016/09/30124309/ap_studio_piece_14_by_walkthisplank91.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Shan Jairajpuri</span>
                  <span className="widgetSmUserTitle">Software Intern</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="https://i.pinimg.com/originals/38/43/dd/3843dd44a3b68b27d33e338b4f54fe07.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Sheena Azmi</span>
                  <span className="widgetSmUserTitle">Software Intern</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="https://yt3.ggpht.com/a/AATXAJwSGQHL4RaAjXqjNR9G1QXLiIvQH825dghcZA=s900-c-k-c0xffffffff-no-rj-mo" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Shanul Puri </span>
                  <span className="widgetSmUserTitle">Software Intern</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2014/10/img.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Reshma Milli </span>
                  <span className="widgetSmUserTitle">Software Intern</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="http://www.fubiz.net/wp-content/uploads/2014/12/Double-Exposure-Paintings-4.jpg" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                  <span className="widgetSmUsername">Aroush</span>
                  <span className="widgetSmUserTitle">Software Intern</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
          </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
