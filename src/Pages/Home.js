import React from "react";
import "../home.css";
// import logo from "../Images/logo.webp";

export default function Home() {
  return (
    <div className="wallpaper" id="home">
      <div className="container-fluid px-5" style={{ position: "relative" }}>
        <div className="row align-left ">
          <div className="col-12 col-md-12 col-lg-6 m-auto">
            <div className="text-wrapper md-pb">
              <p
                className="mbr-section-subtitle mbr-fonts-style mb-2 align-left display-18"
                style={{ fontSize: "14px", marginTop: "320px", color: "white" }}
              >
                <span
                  className="badge p-2 px-3"
                  style={{
                    fontSize: "10px",
                    backgroundColor: "rgba(3, 185, 124, 0.5)",
                  }}
                >
                  LISTEN TO OUR NEW ANTHEM
                </span>{" "}
              </p>
              <h1
                className="mbr-text mbr-fonts-style align-left display-7"
                style={{ color: "white" }}
              >
                Find The Most Exciting Online Coueses.
              </h1>
              <p
                className="mbr-text mbr-fonts-style align-left display-7"
                style={{ color: "white" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt labore dolore magna aliqua.
              </p>
              <div className="input-group" style={{ marginBottom: "5rem" }}>
                <input
                  className="form-control"
                  placeholder="Search Your Courses"
                />
                <button
                  className=" hover btn px-4 py-3"
                  style={{ color: "white" }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 image-wrapper"></div>
        </div>
        {/* <div
          className="col-12 col-md-12 col-lg-11"
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <div className="card">
            <div
              className="card-body "
              // style={{
              //   display: "flex",
              //   justifyContent: "space-around",
              //   alignItems: "center",
              // }}
            >
              <img className="logo" src={logo} alt=".." />
              <span>
                <h1 style={{ color: "blue" }}>coursera</h1>
              </span>
              <span>
                <h1 style={{ color: "red" }}>Udemy</h1>
              </span>
              <span>
                <h1 style={{ color: "green" }}>unacademy</h1>
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
