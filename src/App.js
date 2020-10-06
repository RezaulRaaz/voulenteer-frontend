import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Booked from "./Components/BookedEvent/Booked";
import Admin from "./Components/Admin/Admin";



export  const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
       <Header />
        <Switch>
          <Route path="/home">
           <Home/>
          </Route>
          <PrivateRoute path="/admin">
           <Admin/>
          </PrivateRoute>
          <PrivateRoute path="/user/register/event">
            <Booked/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/register/event/:id">
            <Register/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
