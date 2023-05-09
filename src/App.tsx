import { useState } from "react";
import database from "./db/database.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar fixed-top">
          <div className="container-fluid nav-container">
            <div className="nav-left">
              {/* <a className="" href="#"> */}
              <img
                src="./src/assets/rain-logo.svg"
                alt="Rain logo"
                className="logo"
              />
              {/* <i className="fa-solid fa-database"></i> */}
              {/* ENTERBASE */}
              {/* </a> */}

              <ul className="nav-links">
                <li className="nav-link">Movies</li>
                <li className="nav-link">Series</li>
                <li className="nav-link">Games</li>
                <li className="nav-link">Anime</li>
              </ul>
            </div>

            <div>
              <button className="btn btn-login">Login</button>
              <button className="btn btn-signin">Sign up</button>
            </div>
          </div>
        </nav>

        <div className="margin-fix">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="search..."
              aria-label="Search"
              aria-describedby="searchbar"
            />

            <span className="input-group-text" id="searchbar">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mb-3">
            {database.map((data, index) => (
              <div className="col" key={index}>
                <div className="card">
                  <img
                    src={data.thumbnail}
                    className="card-img-top thumbnail"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="studio">{data.studio}</p>

                    <ul className="genres">
                      {data.genres.sort().map((genre, index) => (
                        <li className="badge genre" key={index}>
                          {genre}
                        </li>
                      ))}
                    </ul>

                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam asperiores voluptate totam aliquid quisquam quo.
                    </p>

                    <p className="release-date">{data.release_date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
