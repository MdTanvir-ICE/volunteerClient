import React, { useState } from 'react';
import cloudImage from '../Images/logos/cloud-upload-outline 1.png';
import './UpadteForm.css';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


export default function UpdateForm() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [title,setTitle] = useState('');
    const [discription,setDiscription] = useState('');
   

    const handleChange = (event) => {
            if (event.target.name === 'eventName') {
                setTitle(event.target.value);
            }
            if (event.target.name === 'discription') {
                setDiscription(event.target.value);
            }
        }

    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate };
        newDates.checkIn = date;
        setSelectedDate(date);
        console.log(selectedDate);
    };

   const Submit = () => {
       const updateData ={
        eventName:title,
        date:selectedDate,
        discription:discription,
        img:'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
       }
       alert('Your event update successfully')
       fetch('https://morning-stream-13833.herokuapp.com/addNewEvent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data => {
           console.log(data);
        })
   };
    return (
        <div className="formPlace container my-5">
            <div className="updateForm container">
                <form className='form-group row d-flex justify-content-between'>

                    <div className="col-5 my-5 ">
                        <input onBlur={handleChange} type="text" name="eventName" className="form-control " placeholder="Enter the event title" />
                    </div>
                    <div className="col-5 my-5">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-dialog"

                                value={selectedDate}
                                onChange={handleCheckInDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <textarea onBlur={handleChange} name='discription' class="form-control col-5 my-2" id="exampleFormControlTextarea1" rows="5" placeholder="write something"></textarea>
                    <button className=" col-5 my-2 btn btn-outline-primary" disabled rows="1"> <img src={cloudImage} alt="" />Import image </button>
                </form>               
            </div>
            <button onClick={Submit} className="btn btn-primary" style={{marginLeft:'80%'}}>submit</button>
        </div>
    );
}
