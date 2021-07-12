import React from 'react';
import './sidebar.css'
import {LineStyle, Timeline,ReportProblem,LibraryBooks, AddComment, TrendingUp, Assessment, Category, AttachMoney,Mail,Feedback,  PermIdentity} from '@material-ui/icons';
import {Link} from "react-router-dom";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">DashBoard</h3>
              <ul className="sidebarList">
              <Link to="/" className="link">
              <li className="sidebarListItem active">
               <LineStyle className="sidebarIcon"/>
               Home
              </li>
              </Link>
              <li className="sidebarListItem">
               <Timeline className="sidebarIcon"/>
               Analytics
              </li>
              <li className="sidebarListItem">
               <TrendingUp className="sidebarIcon"/>
               Sales
              </li>
              </ul>
          </div>
     
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
              <Link to="users" className="link">
              <li className="sidebarListItem ">
               <PermIdentity className="sidebarIcon"/>
               Users
                </li>
            </Link>
            <Link to="product" className="link">
              <li className="sidebarListItem">
               <Category className="sidebarIcon"/>
               Product
              </li>
              </Link>
              <li className="sidebarListItem">
               <AttachMoney className="sidebarIcon"/>
               Account
              </li>
              </ul>
          </div>
      
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notification</h3>
              <ul className="sidebarList">
              <li className="sidebarListItem ">
               <Mail className="sidebarIcon"/>
              Email
              </li>
              <li className="sidebarListItem">
               <Feedback className="sidebarIcon"/>
               Feedback
              </li>
              <li className="sidebarListItem">
               <Assessment className="sidebarIcon"/>
               Assessment
              </li>
              </ul>
          </div>
      
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
              <li className="sidebarListItem ">
               <ReportProblem className="sidebarIcon"/>
               ReportProblem
              </li>
              <li className="sidebarListItem">
               <AddComment className="sidebarIcon"/>
               AddComment
              </li>
              <li className="sidebarListItem">
               <LibraryBooks className="sidebarIcon"/>
               Library
              </li>
              </ul>
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
