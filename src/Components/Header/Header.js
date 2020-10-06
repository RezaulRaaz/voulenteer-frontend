import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container clearfix">
        <nav class="navbar navbar-expand-lg navbar-light">
          <p>
          VOLUNTEER NETWORK
          </p>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <Link class="nav-link" to={'/home'}>Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to={'/user/register/event'}> My Events</Link>
             </li>
          </ul>
            <form class="form-inline my-2 my-lg-0">
                <Link class="btn btn-outline-success my-2 my-sm-0 rounded bg-dark" to={'/admin'}>Admin</Link>
              </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
