import React from "react";
import wallpaper from "../Images/wallpaper.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import { Clock, VideoCamera, User } from "phosphor-react";

export default function Letter() {
  return (
    <section className=" pt-5 pb-5" id="courses">
      <div className="container-fluid">
        <div className="row">
          <div className=" text-center">
            <h3 className="mb-3" style={{fontWeight:'650'}}>
              Explore Featured <span style={{ color: "#61CE70",fontWeight:'650' }}>Courses</span>
            </h3>
            <div className="container-sm">
              <p
                className="container mb-4 text-center"
                style={{ fontSize: "14px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row my-2 mx-2">
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="card ">
                        <div
                          className="card inner mx-2"
                          style={{ marginTop: "8px", }}
                        >
                          <img
                            className="card-img"
                            alt="100%x280"
                            src={wallpaper}
                          />
                        </div>
                        <div className="card-body ">
                          <span
                            className="badge p-2 px-3 rounded-pill"
                            style={{
                              marginBottom: "10px",
                              fontSize: "10px",
                              backgroundColor: "#7bdcb5",
                            }}
                          >
                            Development
                          </span>
                          <h6 className="card-title">
                            Let's Know How Skillup Work Fast and Secure?
                          </h6>
                          <Clock
                            size={22}
                            weight="bold"
                            style={{ float: "left", color: "red" }}
                          />
                          <p
                            style={{
                              fontSize: "13px",
                              float: "left",
                              marginRight: "15px",
                            }}
                          >
                            12 Weeks
                          </p>
                          <VideoCamera
                            size={22}
                            weight="bold"
                            style={{ float: "left", color: "green" }}
                          />
                          <p
                            style={{
                              fontSize: "13px",
                              float: "left",
                              marginLeft: "3px",
                              marginRight: "15px",
                            }}
                          >
                            2 Lessons
                          </p>
                          <User
                            size={20}
                            weight="bold"
                            style={{ float: "left", color: "orange" }}
                          />
                          <p style={{ fontSize: "13px" }}>18 Enrolled</p>
                          <hr className="hr" />
                          <h5 style={{ float: "left", color: "#61CE70" }}>
                            Free
                          </h5>
                          <button
                            className="btn hover p-2 px-3"
                            style={{
                              float: "right",
                              fontSize: "14px",
                              color:'white'
                            }}
                          >
                            Start Now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="card">
                        <div
                          className="card inner mx-2"
                          style={{ marginTop: "8px" }}
                        >
                          <img className="card-img" alt="100%x280" src={image1} />
                        </div>
                        <div className="card-body">
                          <span
                            className="badge p-2 px-3 rounded-pill"
                            style={{
                              marginBottom: "10px",
                              fontSize: "10px",
                              backgroundColor: "#7bdcb5",
                            }}
                          >
                            IT & Security
                          </span>
                          <h6 className="card-title">
                            How To Improve Digital Marketing For Fast SEO
                          </h6>
                          <Clock
                            size={22}
                            weight="bold"
                            style={{ float: "left", color: "red" }}
                          />
                          <p
                            style={{
                              fontSize: "13px",
                              float: "left",
                              marginRight: "15px",
                            }}
                          >
                            12 Weeks
                          </p>
                          <VideoCamera
                            size={22}
                            weight="bold"
                            style={{ float: "left", color: "green" }}
                          />
                          <p
                            style={{
                              fontSize: "13px",
                              float: "left",
                              marginLeft: "3px",
                              marginRight: "15px",
                            }}
                          >
                            2 Lessons
                          </p>
                          <User
                            size={20}
                            weight="bold"
                            style={{ float: "left", color: "orange" }}
                          />
                          <p style={{ fontSize: "13px" }}>18 Enrolled</p>
                          <hr className="hr" />
                          <h5 style={{ float: "left", color: "#61CE70" }}>
                            Free
                          </h5>
                          <button
                            className="btn hover p-2 px-3"
                            style={{
                              float: "right",
                              fontSize: "14px",
                              color:'white'
                            }}
                          >
                            Start Now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="card">
                        <div
                          className="card inner mx-2"
                          style={{ marginTop: "8px" }}
                        >
                          <img className="card-img" alt="100%x280" src={image2} />
                        </div>
                        <div className="card-body ">
                          <span
                            className="badge p-2 px-3 rounded-pill"
                            style={{
                              marginBottom: "10px",
                              fontSize: "10px",
                              backgroundColor: "#7bdcb5",
                            }}
                          >
                            Finance & Accounting
                          </span>
                          <h6 className="card-title">
                            How To Register & Enrolled on SkillUp Step by Step?
                          </h6>
                          <Clock
                            size={22}
                            weight="bold"
                            style={{ float: "left", color: "red" }}
                          />
                          <p
                            style={{
                              fontSize: "13px",
                              float: "left",
                              marginRight: "15px",
                            }}
                          >
                            12 Weeks
                          </p>
                          <VideoCamera
                            size={22}
                            weight="bold"
                            style={{ float: "left", color: "green" }}
                          />
                          <p
                            style={{
                              fontSize: "13px",
                              float: "left",
                              marginLeft: "3px",
                              marginRight: "15px",
                            }}
                          >
                            2 Lessons
                          </p>
                          <User
                            size={20}
                            weight="bold"
                            style={{ float: "left", color: "orange" }}
                          />
                          <p style={{ fontSize: "13px" }}>18 Enrolled</p>
                          <hr className="hr" />
                          <h5 style={{ float: "left", color: "#61CE70" }}>
                            Free
                          </h5>
                          <button
                            className="btn hover  p-2 px-3"
                            style={{
                              float: "right",
                              fontSize: "14px",
                              color:'white'
                            }}
                          >
                            Start Now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className=" card">
                        <div
                          className="card inner mx-2"
                          style={{ marginTop: "8px" }}
                        >
                          <img className="card-img" alt="100%x280" src={image5} />
                        </div>
                        <div className="card-body ">
                          <span
                            className="badge p-2 px-3 rounded-pill"
                            style={{
                              marginBottom: "10px",
                              fontSize: "10px",
                              backgroundColor: "#7bdcb5",
                            }}
                          >
                            Photography
                          </span>
                          <h6 className="card-title">
                            How To Register & Enrolled on SkillUp Step by Step?
                          </h6>
                          <Clock
                            size={22}
                            weight="bold"
                            style={{ float: "left", color: "red" }}
                          />
                          <p
                            style={{
                              fontSize: "13px",
                              float: "left",
                              marginRight: "15px",
                            }}
                          >
                            12 Weeks
                          </p>
                          <VideoCamera
                            size={22}
                            weight="bold"
                            style={{ float: "left", color: "green" }}
                          />
                          <p
                            style={{
                              fontSize: "13px",
                              float: "left",
                              marginLeft: "3px",
                              marginRight: "15px",
                            }}
                          >
                            2 Lessons
                          </p>
                          <User
                            size={20}
                            weight="bold"
                            style={{ float: "left", color: "orange" }}
                          />
                          <p style={{ fontSize: "13px" }}>18 Enrolled</p>
                          <hr className="hr" />
                          <h5 style={{ float: "left", color: "#61CE70" }}>
                            Free
                          </h5>
                          <button
                            className="btn hover  p-2 px-3"
                            style={{
                              float: "right",
                              fontSize: "14px",
                              color:'white'
                            }}
                          >
                            Start Now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className=" card">
                        <div
                          className="card inner mx-2"
                          style={{ marginTop: "8px" }}
                        >
                          <img className="card-img" alt="100%x280" src={image3} />
                        </div>
                        <div className="card-body ">
                          <span
                            className="badge p-2 px-3 rounded-pill"
                            style={{
                              marginBottom: "10px",
                              fontSize: "10px",
                              backgroundColor: "#7bdcb5",
                            }}
                          >
                            Health & Fitness
                          </span>
                          <h6 className="card-title">
                            How To Register & Enrolled on SkillUp Step by Step?
                          </h6>
                          <Clock
                            size={22}
                            weight="bold"
                            style={{ float: "left", color: "red" }}
                          />
                          <p
                            style={{
                              fontSize: "13px",
                              float: "left",
                              marginRight: "15px",
                            }}
                          >
                            12 Weeks
                          </p>
                          <VideoCamera
                            size={22}
                            weight="bold"
                            style={{ float: "left", color: "green" }}
                          />
                          <p
                            style={{
                              fontSize: "13px",
                              float: "left",
                              marginLeft: "3px",
                              marginRight: "15px",
                            }}
                          >
                            2 Lessons
                          </p>
                          <User
                            size={20}
                            weight="bold"
                            style={{ float: "left", color: "orange" }}
                          />
                          <p style={{ fontSize: "13px" }}>18 Enrolled</p>
                          <hr className="hr" />
                          <h5 style={{ float: "left", color: "#61CE70" }}>
                            Free
                          </h5>
                          <button
                            className="btn hover  p-2 px-3"
                            style={{
                              float: "right",
                              fontSize: "14px",
                              color:'white'
                            }}
                          >
                            Start Now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className=" card">
                        <div
                          className="card inner mx-2"
                          style={{ marginTop: "8px" }}
                        >
                          <img className="card-img" alt="100%x280" src={image4} />
                        </div>
                        <div className="card-body ">
                          <span
                            className="badge p-2 px-3 rounded-pill"
                            style={{
                              marginBottom: "10px",
                              fontSize: "10px",
                              backgroundColor: "#7bdcb5",
                            }}
                          >
                            Networking
                          </span>
                          <h6 className="card-title">
                            How To Register & Enrolled on SkillUp Step by Step?
                          </h6>
                          <Clock
                            size={22}
                            weight="bold"
                            style={{ float: "left", color: "red" }}
                          />
                          <p
                            style={{
                              fontSize: "13px",
                              float: "left",
                              marginRight: "15px",
                            }}
                          >
                            12 Weeks
                          </p>
                          <VideoCamera
                            size={22}
                            weight="bold"
                            style={{ float: "left", color: "green" }}
                          />
                          <p
                            style={{
                              fontSize: "13px",
                              float: "left",
                              marginLeft: "3px",
                              marginRight: "15px",
                            }}
                          >
                            2 Lessons
                          </p>
                          <User
                            size={20}
                            weight="bold"
                            style={{ float: "left", color: "orange" }}
                          />
                          <p style={{ fontSize: "13px" }}>18 Enrolled</p>
                          <hr className="hr" />
                          <h5 style={{ float: "left", color: "#61CE70" }}>
                            Free
                          </h5>
                          <button
                            className="btn hover  p-2 px-3"
                            style={{
                              float: "right",
                              fontSize: "14px",
                              color:'white'
                            }}
                          >
                            Start Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}