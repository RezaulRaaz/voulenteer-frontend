import React from "react";
import { Link } from "react-router-dom";
import Events from "./../../data/Event";
const Home = () => {
  return (
    <div>
      <div class="container">
        <div class="mt-5">
          <h2 class="text-uppercase text-center">
            I grow by helping people in need.
          </h2>
        </div>
        <nav class="navbar mt-3">
          <form class="form-inline m-auto">
            <input
              class="form-control mr-sm-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0 rounded"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
        <div class="row mb-5">
          {Events.map((event) => (
            <div class="col-lg-3 mt-5" key={event.id}>
              <Link to={"/register/event/" + event.id}>
                <div class="card" style={{ width: "16rem" }}>
                  <img class="card-img-top" src={event.image} alt="" />
                  <div class={`card-body ${event.bgColor}`}>
                    <p class="card-text text-dark align-text-center">
                      {event.name}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
