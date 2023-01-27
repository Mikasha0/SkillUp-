import React from "react";
import wallpaper from "../Images/wallpaper.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";

export default function Categories() {
  return (
    <section className=" pt-5 pb-5" id="categories">
      <div className="container-fluid mt-5">
        <div className="row ">
          <div className=" text-center">
            <h3 className="mb-3" style={{ fontWeight: "650" }}>
              Select Your{" "}
              <span
                style={{
                  color: "#61CE70",
                  fontWeight: "650",
                }}
              >
                Categories
              </span>
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
                      <div
                        className="thumb card"
                        style={{ backgroundColor: "rgba(3, 185, 124, 0.1)" }}
                      >
                        <div className="card-body">
                          <img
                            src={wallpaper}
                            className="rounded-circle  my-2 "
                            alt="..."
                            style={{
                              width: "60px",
                              height: "60px",
                              float: "left",
                              marginRight: "20px",
                            }}
                          />
                          <div className="my-3">
                            <h6 className="card-title ">Development</h6>
                            <p className="mx-2" style={{ fontSize: "14px" }}>
                              1 Courses
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-4 mb-3">
                      <div
                        className="thumb card "
                        style={{ backgroundColor: "rgba(3, 185, 124, 0.07)" }}
                      >
                        <div className="card-body">
                          <img
                            src={image1}
                            className="rounded-circle  my-2 "
                            alt="..."
                            style={{
                              width: "60px",
                              height: "60px",
                              float: "left",
                              marginRight: "20px",
                            }}
                          />
                          <div className="my-3">
                            <h6 className="card-title ">Marketing</h6>
                            <p className="mx-2" style={{ fontSize: "14px" }}>
                              3 Courses
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-4 mb-3">
                      <div
                        className="thumb card"
                        style={{ backgroundColor: "rgb(51,167,181)" }}
                      >
                        <div className="card-body">
                          <img
                            src={image2}
                            className="rounded-circle  my-2 "
                            alt="..."
                            style={{
                              width: "60px",
                              height: "60px",
                              float: "left",
                              marginRight: "20px",
                            }}
                          />
                          <div className="my-3">
                            <h6 className="card-title ">Accounting</h6>
                            <p className="mx-2" style={{ fontSize: "14px" }}>
                              2 Courses
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-4 mb-3">
                      <div
                        className="thumb card"
                        style={{ backgroundColor: "rgb(169,184,195" }}
                      >
                        <div className="card-body">
                          <img
                            src={image3}
                            className="rounded-circle  my-2 "
                            alt="..."
                            style={{
                              width: "60px",
                              height: "60px",
                              float: "left",
                              marginRight: "20px",
                            }}
                          />
                          <div className="my-3">
                            <h6 className="card-title ">IT & Software</h6>
                            <p className="mx-2" style={{ fontSize: "14px" }}>
                              4 Courses
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-4 mb-3">
                      <div
                        className="thumb card"
                        style={{ backgroundColor: "rgb(202,248,128)" }}
                      >
                        <div className="card-body">
                          <img
                            src={image4}
                            className="rounded-circle  my-2 "
                            alt="..."
                            style={{
                              width: "60px",
                              height: "60px",
                              float: "left",
                              marginRight: "20px",
                            }}
                          />
                          <div className="my-3">
                            <h6 className="card-title ">Web Design</h6>
                            <p className="mx-2" style={{ fontSize: "14px" }}>
                              2 Courses
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-4 mb-3">
                      <div
                        className="thumb card"
                        style={{ backgroundColor: "rgb(182,227,212)" }}
                      >
                        <div className="card-body">
                          <img
                            src={image5}
                            className="rounded-circle  my-2 "
                            alt="..."
                            style={{
                              width: "60px",
                              height: "60px",
                              float: "left",
                              marginRight: "20px",
                            }}
                          />
                          <div className="my-3">
                            <h6 className="card-title ">Medical</h6>
                            <p className="mx-2" style={{ fontSize: "14px" }}>
                              1 Courses
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
      </div>
    </section>
  );
}
