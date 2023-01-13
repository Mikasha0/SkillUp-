import React from "react";
import wallpaper from "../Images/wallpaper.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";

export default function Works() {
  return (
      <section
        className=" pt-5 pb-5"
        style={{ backgroundColor: "rgba(3, 185, 124, 0.07)" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className=" text-center">
              <h3 className="mb-3" style={{fontWeight:'650'}}>
                How It <span style={{ color: "#61CE70",fontWeight:'650' }}>Works?</span>
              </h3>
              <div className="container">
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
            <div className="col-12">
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row mx-2 my-2">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className="card-body text-center px-5">
                            <div className="p-4">
                            <img src={wallpaper} className="rounded-circle " alt="..." style={{width: '60px', height: '60px',boxShadow: '0px 0px 0px 8px  rgb(62 28 131 / 7%)'}}/>
                            </div>
                            <h5 className="card-title">Find Courses</h5>
                            <p style={{fontSize:'14px',}}>
                              We have helped over 3,400 new students to get into
                              the most popular tech teams.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card" style={{backgroundColor:'#61CE70'}}>
                          <div className="card-body text-center px-5">
                          <div className="p-4">
                            <img src={image1} className="rounded-circle" alt="..." style={{width: '60px', height: '60px',boxShadow: '0px 0px 0px 8px  rgb(62 28 131 / 7%)' }}/>
                            </div>
                            <h5 className="card-title" style={{color:'white'}}>Book Your Seat</h5>
                            <p style={{fontSize:'14px',color:'white'}}>
                              We have helped over 3,400 new students to get into
                              the most popular tech teams.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className="card-body text-center px-5">
                          <div className="p-4">
                            <img src={image2} className="rounded-circle " alt="..." style={{width: '60px', height: '60px',boxShadow: '0px 0px 0px 8px  rgb(62 28 131 / 7%)'}}/>
                            </div>
                            <h5 className="card-title">Get Certificate</h5>
                            <p style={{fontSize:'14px',}}>
                              We have helped over 3,400 new students to get into
                              the most popular tech teams.
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
