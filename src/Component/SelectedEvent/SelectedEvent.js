import React, { useContext, useEffect, useState } from 'react';
import { GlobalVlaue } from '../GlobalValue/GlobalValue';
import './SelectedEvent.css'

const SelectedEvent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(GlobalVlaue);
    const [data, setData] = useState([]);
    const email = loggedInUser.email;


    useEffect(() => loadData(), []);

    const loadData = () => {
        fetch(`https://morning-stream-13833.herokuapp.com/myEvent/${email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }

    const deleteEvent = (id) => {
        fetch(`https://morning-stream-13833.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('Data delete successfully');
                loadData();
            })
    }

    return (
        <div class="container selectedEvent">
            <div class="row justify-content-between">
                {
                    data.map((data) => (
                        <div class="col-md-5 singleEvent">
                            <div className="d-flex">
                                <div>
                                    <img src={data.img} alt="" />
                                </div>
                                <div>
                                    <h5>{data.eventName}</h5>
                                    <h5>{data.date}</h5>
                                </div>
                            </div>
                            <button onClick={() => deleteEvent(data._id)} className="btn btn-primary">Cancel</button>
                        </div>
                    )
                    )
                }

            </div>
        </div>
    );
};

export default SelectedEvent;

