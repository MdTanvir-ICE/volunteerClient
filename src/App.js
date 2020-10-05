import React, { useState } from 'react';
import './App.css';
import AdminPanel from './Component/AdminPanel/AdminPanel';
import UpdateForm from './Component/UpdateForm/UpdateForm';
import Navbar from './Component/Navbar/Navbar';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration';
import SelectedEvent from './Component/SelectedEvent/SelectedEvent';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GlobalValueProvider from './Component/GlobalValue/GlobalValue';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

function App() {
  const [eventName,setEventName] = useState('');
  const [img ,setImg] = useState('');
  

  return (
    <GlobalValueProvider >
      <Router>
        <Switch>
          <Route path="/home">
            <Navbar></Navbar>
            <Home setEventName={setEventName} setImg={setImg} ></Home>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addEvent">
            <UpdateForm></UpdateForm>
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/yourSelectedEvent">
            <Navbar></Navbar>
            <SelectedEvent></SelectedEvent>
          </Route>

          <PrivateRoute path="/selectedEvent">
            <Registration eventName={eventName} img={img} ></Registration>
          </PrivateRoute>
          <Route  path="/admin/alluser">
            <AdminPanel contro={2}></AdminPanel>
          </Route>
          <Route  path="/admin/setevent">
            <AdminPanel control={1}></AdminPanel>
          </Route>
          <Route exact path="/">
            <Navbar></Navbar>
            <Home setEventName={setEventName} setImg={setImg}></Home>
          </Route>
        
        </Switch>
      </Router>
    </GlobalValueProvider>

  );
}

export default App;

