import React, { useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import Sidebar from "./Sidebar";

const Admin = () => {
    const [singleEvent,setEvent]= useState([]);
    useEffect(()=>{
        fetch('https://arcane-fjord-74733.herokuapp.com/allEvents')
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
      <div class="container-fluid">
        <div class="row">
            <Sidebar/>
          <main
            role="main"
            class="col-md-9 ml-sm-auto col-lg-10 px-md-4"
          >
        <div className="col-lg-8">
        <table class="table">
                <thead>
                    <tr>
                   
                    <th scope="col">Name</th>
                    <th scope="col">Event Name</th>
                    <th scope="col">date</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         singleEvent.map(event =>(
                            <tr>
                            <td>{event.name}</td>
                             <td>{event.eventName}</td>
                             <td>{event.date}</td>
                             <td><img src={event.imgUrl} alt="" style={{width:'50px', height:'50px'}} /></td>
                             <td><button onClick={()=>deleteEvent(`${event._id}`)} className="btn btn-sm btn-danger">x</button></td>
                            </tr>
                         ))
                    }
                </tbody>
                </table>
        </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
