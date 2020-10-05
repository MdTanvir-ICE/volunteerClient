import React from 'react';
import './AdminPanel.css';
import logo from '../Images/logos/Group 1329.png';
import logo1 from '../Images/logos/users-alt 1.png';
import pluslogo from '../Images/logos/plus 1.png'
import UpdateForm from '../UpdateForm/UpdateForm';
import VolentiareList from '../volentiareList/VolentiareList';
import { Link } from 'react-router-dom';


const AdminPanel = (props) => {

  let p; 
   if(props.control===1)
   {
       p=<UpdateForm></UpdateForm>
   }
   else{
    p =<VolentiareList></VolentiareList>
   } 
    
    return (
        <div className="">
            <img src="" alt="" />
            <div className="row justify-content-between">
                <div className="col-12 topNav row ">
                    <Link to="/"> <img src={logo} alt="" /></Link>
                    <h5>Add event</h5>
                </div>
                <div className="d-flex col-12">
                    <div className="sideNav ">
                        <div className="addEvent">
                           <Link to="/admin/alluser">
                           <img src={logo1} alt="" />
                            <span>Voluteer register list </span>
                           </Link>
                            <div>
                           <Link to="/admin/setevent"> <button className="btn btn-link"> <img src={pluslogo} alt="" />Add event</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className=" adminPost ">
                        
                            {
                                p
                            }
  
                    </div>
                </div>
            </div>

        </div>
    );

};

export default AdminPanel;


