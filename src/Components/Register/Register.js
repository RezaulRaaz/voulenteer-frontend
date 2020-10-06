import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import Events from "./../../data/Event";

const Register = () => {
  const history = useHistory();
  let { id } = useParams();
  let event = Events.find((eventId) => eventId.id == id);
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  let success = false;
  const [singleEvent,setEvent]= useState(
    {
      eventName:event.name,
      email:loggedInUser.email,
      name:loggedInUser.name,
      imgUrl:event.image,
      date:'',
      description:'',
    }
  );

  const handleChangeEvent=(e) => {
    e.preventDefault();
    const newEvent = { ...singleEvent };
    newEvent[e.target.name] = e.target.value;
    setEvent(newEvent);
  }

  const EventRegister=(e)=>{
    e.preventDefault();
    let newwEvent = { ...loggedInUser, ...singleEvent };
      fetch('https://arcane-fjord-74733.herokuapp.com/addEvennt',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newwEvent)
      })
      .then(res=>res.json())
      .then(data=>{
        history.push("/user/register/event");
      })
  }

  return (
    <div>
      <div className="register-page">
        <div className="row">
            <div className="registerCard">
        <p>{success ? 'Event Insert Successfully' :''}</p>
              <h4>Register as a Volunteer</h4>
            <form onSubmit={EventRegister}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input onBlur={handleChangeEvent} name="name"  type="text" value={loggedInUser.name} class="form-control" id="exampleInputEmail1" placeholder="name" aria-describedby="emailHelp"/>
                </div> 
                 <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input onBlur={handleChangeEvent}  name="email" type="email" value={loggedInUser.email} class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Date</label>
                    <input onBlur={handleChangeEvent} name="date" class="form-control" type="date" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Description</label>
                    <input onBlur={handleChangeEvent} name="description" type="text" class="form-control" id="exampleInputEmail1" placeholder="Description" aria-describedby="emailHelp"/>
                </div>             
                 <div class="form-group">
                    <label for="exampleInputEmail1">Organize books at the library.</label>
                    <input onBlur={handleChangeEvent} name="eventName" type="text" value={event.name} class="form-control" id="exampleInputEmail1" placeholder="Library" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Register</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
