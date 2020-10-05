import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalVlaue } from '../GlobalValue/GlobalValue';
import logo from '../Images/logos/Group 1329.png'
import './Registration.css'

const Registration = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(GlobalVlaue);
    let date = new Date().toDateString('dd/MM/yyyy');

    const setDate = (e) => {
        date = e.target.value;
    }

    const user = () => {
        const name =props.eventName;
        const val = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            eventName: name,
            date: date,
            img:props.img,
        }
        console.log(val);
        fetch('https://morning-stream-13833.herokuapp.com/addUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(val)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

return (
    <div className="container registration">
        <img src={logo} alt="" />
        <div className="registrationBody" >
            <h5>register as a volunteer</h5>
            <input type="text"  className="form-control" placeholder={loggedInUser.name}/>
            <br />
            <input type="text" className="form-control" placeholder={loggedInUser.email} />
            <br />
            <input type="text" onBlur={setDate}  className="form-control" placeholder={new Date().toDateString('dd/MM/yyyy')} />
            <br />
            <input type="text" className="form-control" Placeholder="Destination" />
            <br />
            <input type="text" className="form-control" value={props.eventName} placeholder="Organize book at the library" />

            <Link to="/yourSelectedEvent">
                <button onClick={user} className="btn btn-primary">Registration</button>
            </Link>
        </div>
    </div>
);
};

export default Registration;