import React from "react";
import wallpaper from "../Images/wallpaper.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import { Clock } from "phosphor-react";

export default function Letter() {
  return (
    <section className="pt-5 pb-5" id="news">
      <div className="container-fluid">
        <div className="row">
          <div className=" text-center">
            <h3 className="mb-3" style={{fontWeight:'650'}}>
              Latest News & <span style={{ color: "#61CE70",fontWeight:'650' }}>Articles</span>
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
                  <div className="row mx-2 my-2">
                    <div className="col-md-4 mb-3">
                      <div className="card">
                      <div className="inner">

                        <img className="card-img-top" alt="100%x280" src={wallpaper} />
                        </div>
                        <div className="card-body ">
                        <span className="badge p-2 px-3" style={{marginBottom:'10px',fontSize:'10px',backgroundColor:'#7bdcb5'}}>Accounting</span>
                          <h6 className="card-title">
                            Let's Know How Skillup Work Fast and Secure?
                          </h6>
                          <p style={{ fontSize: "13px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            bla blabla...
                          </p>
                          <hr className='hr'/>
                          <img
                            src={wallpaper}
                            className="rounded-circle"
                            alt="..."
                            style={{ width: "25px", height: "25px" , float: "left"}}
                          />
                          <p className="mx-2" style={{ float: "right", fontSize:'13px' }}>April 9,2022</p>
                          <Clock
                            size={22}
                            weight="bold"
                            style={{ float: "right" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card">
                      <div className="inner">
                        <img className="card-img-top" alt="100%x280" src={image1} />
                        </div>
                        <div className="card-body ">
                        <span className="badge p-2 px-3" style={{marginBottom:'10px',fontSize:'10px',backgroundColor:'#7bdcb5'}}>Accounting</span>
                          <h6 className="card-title">
                            How To Improve Digital Marketing For Fast SEO
                          </h6>
                          <p style={{ fontSize: "13px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            blabla bla...
                          </p>
                          <hr className='hr'/>
                          <img
                            src={image1}
                            className="rounded-circle "
                            alt="..."
                            style={{ width: "25px", height: "25px" , float: "left"}}
                          />
                          <p className="mx-2" style={{ float: "right", fontSize:'13px' }}>April 9,2022</p>
                          <Clock
                            size={22}
                            weight="bold"
                            style={{ float: "right" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card">
                      <div className="inner">
                        <img className="card-img-top" alt="100%x280" src={image2} />
                        </div>
                        <div className="card-body ">
                        <span className="badge p-2 px-3" style={{marginBottom:'10px',fontSize:'10px',backgroundColor:'#7bdcb5'}}>Accounting</span>
                          <h6 className="card-title">
                            How To Register & Enrolled on SkillUp Step by Step?
                          </h6>
                          <p style={{ fontSize: "13px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            bala baula...
                          </p>
                          <hr className="hr" />
                          <img
                            src={image2}
                            className="rounded-circle "
                            alt="..."
                            style={{ width: "25px", height: "25px" , float: "left"}}
                          />
                          <p className="mx-2" style={{ float: "right", fontSize:'13px' }}>April 9,2022</p>
                          <Clock
                            size={22}
                            weight="bold"
                            style={{ float: "right" }}
                          />
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
