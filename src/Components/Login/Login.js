import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import Googleimg from "./../../asset/img/icon/download.png";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom"

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  var GoogleProvider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(GoogleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="login">
            <div className="login-btn">
              <div className="btinIcon" onClick={signInWithGoogle}>
                <img src={Googleimg} alt="" /> &nbsp;
                <span>Continue With Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
