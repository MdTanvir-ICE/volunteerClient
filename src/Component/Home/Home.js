import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css'

const Home = (props) => {
    const color = ['#f1c40f', '#3498db', '#2ecc71', '#e84118', '#3B3B98'];
    const history = useHistory({});
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://morning-stream-13833.herokuapp.com/getAllEvent')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data);
            })
    }, []);

    const SelectEvent = (data) => {
        console.log(data.eventName);
        props.setEventName(data.eventName)
        props.setImg(data.img);
        history.push('/selectedEvent')
    }



    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <h3 style={{ margin: '50px 50px' }}>I GROW BY HELPEING PEOPLE IN NEED</h3>
            <form className="form-inline homeSearch">
                <input className="form-control mr-sm-0" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-primary  my-sm-0" type="submit">Search</button>
            </form>
            <div className="row justify-content home">
                {
                    data.map((p) => (
                        <div className="d-flex flex-column col-sm-6 col-md-3 cardSize" style={{ cursor: "pointer" }} >
                            <img onClick={() => SelectEvent(p)} src={p.img} alt="" />
                            <div className="homeCard" style={{
                                backgroundColor: color[Math.floor(Math.random() * (5 - 0) + 0)]
                            }}>
                                <p>{p.eventName}</p>
                            </div>
                        </div>
                    )

                    )
                }
            </div>

        </div>
    );
};

export default Home;