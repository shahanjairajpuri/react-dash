import "./user.css";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@material-ui/icons';
import {Link} from "react-router-dom";


const User = () => {
  return (
    <div className="user">
     <div className="userTitleContainer">
         <h1 className="userTitle">Edit User</h1>
         <Link to="/newUser">
         <button className="userAddButton">Create</button>
         </Link>
     </div>
     <div className="userContainer">
         <div className="userShow">
             <div className="userShowTop">
                 <img src="https://yt3.ggpht.com/a/AATXAJyWfyFcKg7GAQU7ykWJ5PuLLrzA66aJaU352hCIYw=s900-c-k-c0xffffffff-no-rj-mo" alt="" 
                 className="userShowImg" />
                 <div className="userShowTopTitle">
                     <span className="userShowUserName">Tim English</span>
                     <span className="userShowUserTitle">Footy Ruck</span>
                 </div>
             </div>

             <div className="userShowBottom">
                 <span className="userShowTitle">Account Detail</span>
              <div className="userShowInfo">
              <PermIdentity className="userShowIcon"/>
              <span className="userShowInfoTitle">English99</span>
              </div>
              <div className="userShowInfo">
              <CalendarToday className="userShowIcon"/>
              <span className="userShowInfoTitle">23.07.2000</span>
              </div>
              <span className="userShowTitle">Contact Detail</span>
              <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon"/>
              <span className="userShowInfoTitle">+614123456</span>
              </div>
              <div className="userShowInfo">
              <MailOutline className="userShowIcon"/>
              <span className="userShowInfoTitle">tim@gmail.com</span>
              </div>
              <div className="userShowInfo">
              <LocationSearching className="userShowIcon"/>
              <span className="userShowInfoTitle">10 Barkly St Melbourne</span>
              </div>
             </div>
         </div>
         <div className="userUpdate">
             <span className="userUpdateTitle">Edit</span>
             <form  className="userUpdateForm">
                 <div className="userUpdateLeft">
                     <div className="userUpdateItem">
                         <label>UserName</label>
                         <input placeholder="English99" className="userUpdateInput" />
                     </div>
                     <div className="userUpdateItem">
                         <label>Full Name</label>
                         <input placeholder="TimEnglish" className="userUpdateInput" />
                     </div>
                     <div className="userUpdateItem">
                         <label>Email</label>
                         <input placeholder="Tim@gmail.com" className="userUpdateInput" />
                     </div>
                     <div className="userUpdateItem">
                         <label>Phone</label>
                         <input placeholder="+614123456" className="userUpdateInput" />
                     </div>
                     <div className="userUpdateItem">
                         <label>Address</label>
                         <input placeholder="10 Barkly St Melbourne" className="userUpdateInput" />
                     </div>
                     
                 </div>
                 <div className="userUpdateRight">
                     <div className="userUpdateUpload">
                         <img className="userUpdateImg" src="https://yt3.ggpht.com/a/AATXAJwT4XLXW4RHX_tYDDXCXDTjOuVfqTFCZnJw7g=s900-c-k-c0xffffffff-no-rj-mo" alt="" />
                      <label htmlFor="file">
                          <Publish className="userUpdateIcon"/>
                      </label>
                      <input type="file" id="file"  style={{display:"none"}}/>
                     </div>
                     <button className="userUpdateButton">Update</button>
                 </div>
             </form>
         </div>
     </div>
    </div>
  );
}

export default User;
