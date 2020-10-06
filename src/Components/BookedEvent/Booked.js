import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
const Booked = () => {

  const [singleEvent,setEvent]= useState([]);
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  useEffect(()=>{
      fetch('https://arcane-fjord-74733.herokuapp.com/events?email='+loggedInUser.email)
      .then(res => res.json())
      .then(data => setEvent([...data]))
  },[])

 const deleteEvent=(id)=>{
  fetch(`https://arcane-fjord-74733.herokuapp.com/deleteEvent/${id}`,{
    method: 'DELETE',
  })
  .then(res=>res.json())
  .then(data=>{
      console.log('Delete Successfully')
  })
 }
  return (
    <div>
      <div className="container">
        <div className="booking">
          <h2>You Booked {singleEvent.length} Events </h2>
            <div className="row">
              {
                singleEvent.map(event =>(
                  <div className="col-lg-6 mb-4">
                      <div className="bookingCard d-flex">
                            <div className="img">
                                  <img src={event.imgUrl} alt=""/>   
                              </div>
                            <div className="bookingInfo">
                <p className="font-weight-bold">{event.eventName}</p>
                                  <p>{event.date}</p>
                                  <button onClick={()=>deleteEvent(`${event._id}`)} className="btn btn-info mt-5">Cancel</button>
                            </div>
                      </div>
                  </div>
                ))
              }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Booked;
