import React from "react";
import wallpaper from "../Images/wallpaper.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import { Star } from "phosphor-react";

export default function Categories() {
  return (
      <section
        className="pt-5 pb-5"
        style={{ backgroundColor: "rgba(3, 185, 124, 0.07)" }}
        id="review"
      >
        <div className="container-fluid">
          <div className="row ">
            <div className=" text-center">
              <h3 className="mb-3" style={{ fontWeight: "650" }}>
                Our Students{" "}
                <span style={{ color: "#61CE70", fontWeight: "650" }}>
                  Reviews
                </span>
              </h3>
              <div className="container-sm">
                <p
                  className="container mb-4 text-center"
                  style={{ fontSize: "14px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="col-12 my-3">
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row mx-2 my-2">
                      <div className=" col-md-4 mb-3">
                        <div className="thumb card">
                          <div className="card-body">
                            <img
                              src={wallpaper}
                              className="rounded-circle  my-2 "
                              alt="..."
                              style={{
                                width: "70px",
                                height: "70px",
                                float: "left",
                                marginRight: "20px",
                              }}
                            />
                            <div className="my-2" style={{ float: "left" }}>
                              <h6 className="">Abinash Rai</h6>
                              <p
                                className="card-subtitle"
                                style={{ fontSize: "10px" }}
                              >
                                FrontEnd Developer
                              </p>
                              <span
                                className="badge"
                                style={{
                                  backgroundColor: "orange",
                                  marginRight: "5px",
                                }}
                              >
                                <Star
                                  size={12}
                                  weight="bold"
                                  style={{ marginRight: "5px" }}
                                />
                                5.0
                              </span>
                            </div>
                          </div>
                          <div className="container">
                            <p className="px-3" style={{ fontSize: "13px" }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" col-md-4 mb-3">
                        <div className="thumb card">
                          <div className="card-body">
                            <img
                              src={image1}
                              className="rounded-circle  my-2 "
                              alt="..."
                              style={{
                                width: "70px",
                                height: "70px",
                                float: "left",
                                marginRight: "20px",
                              }}
                            />
                            <div className="my-2" >
                              <h6 className="">Aniket Tamrakar</h6>
                              <p
                                className="card-subtitle"
                                style={{ fontSize: "10px" }}
                              >
                                FullStack Developer
                              </p>
                              <span
                                className="badge"
                                style={{
                                  backgroundColor: "orange",
                                  marginRight: "5px",
                                }}
                              >
                                <Star
                                  size={12}
                                  weight="bold"
                                  style={{ marginRight: "5px" }}
                                />
                                5.0
                              </span>
                            </div>
                          </div>
                          <div className="container">
                            <p className="px-3" style={{ fontSize: "13px" }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" col-md-4 mb-3">
                        <div className="thumb card">
                          <div className="card-body">
                            <img
                              src={image2}
                              className="rounded-circle  my-2 "
                              alt="..."
                              style={{
                                width: "70px",
                                height: "70px",
                                float: "left",
                                marginRight: "20px",
                              }}
                            />
                            <div className="my-2">
                              <h6 className="">Aryan Shakya</h6>
                              <p
                                className="card-subtitle"
                                style={{ fontSize: "10px" }}
                              >
                                BackEnd Developer
                              </p>
                              <span
                                className="badge"
                                style={{
                                  backgroundColor: "orange",
                                  marginRight: "5px",
                                }}
                              >
                                <Star
                                  size={12}
                                  weight="bold"
                                  style={{ marginRight: "5px" }}
                                />
                                5.0
                              </span>
                            </div>
                          </div>
                          <div className="container">
                            <p className="px-3" style={{ fontSize: "13px" }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
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
