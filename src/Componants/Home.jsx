// Home.jsx
import React from "react";
import { Container, Button } from "react-bootstrap";
import Img1 from "../images/car1.jpg";
import { FaBlog } from "react-icons/fa";
import { GrBlog } from "react-icons/gr";
import { RxGithubLogo } from "react-icons/rx";
import "../Css/home.css";
import "../Css/mycomp.css"
import "../App.css";
import WhyChooseus from "../Pages/WhyChooseus";
import TestimonialCarousel from "../Pages/TestimonialCarousel";

const Home = () => {
  return (
    <>
      <section id="getStarted" className="">
        <Container className="container">
          <div className="row">
            <div className="allText col-md-8 col-12">
              <h1
                className="title"
                data-aos="slide-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="10"
                data-aos-duration="370"
              >
                Collaborate with anyone you want, however you want.
              </h1>
              <p
                className="info"
                data-aos="slide-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="10"
                data-aos-duration="370"
              >
                LGR is an online creator marketplace that gives you the freedom
                to find collaboration opportunities, grow your brand, and learn
                from others.
              </p>
              <Button
                className="getStartedBtn"
                data-aos="slide-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="20"
                data-aos-duration="1000"
                easing="ease-in"
              >
                <strong>Get Started</strong> - It's free
              </Button>
            </div>

            <div classNnawame="allText col-md-4 col-12">
              <img src={Img1} alt="none" className="startedImg" />
            </div>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <div className="container ">
        <div className="row   d-flex align-items-center justify-content-center px-3">
          <h1 className="text-center w-90 heading-home">WHY CHOOSE US ?</h1>

          <WhyChooseus />
        </div>
      </div>


      

    <div>
    <section className="my-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <img src={Img1} className="image" alt="Car" />
          </div>

          <div className="col-md-6 col-12">
            <h3 className="heading">Heading of Car Blog on the Application</h3>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              est quos enim aliquam numquam maxime quas itaque tempore. Inventore
              dignissimos necessitatibus consequuntur libero modi id, quibusdam et
              consequatur incidunt accusantium dicta debitis laborum ipsum,
              assumenda cum. Fugiat consequatur incidunt accusamus id in ea
              laudantium recusandae laboriosam animi delectus perspiciatis
              voluptates, necessitatibus totam architecto adipisci. Suscipit, eum
              ipsam? Corrupti, ex quidem?
            </p>
          </div>
        </div>
      </div>
    </section>
<hr />
    <section className="my-section">
      <div className="container">
        <div className="row align-items-center">
         
          <div className="col-md-6 col-12">
            <h3 className="heading">Heading of Car Blog on the Application</h3>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              est quos enim aliquam numquam maxime quas itaque tempore. Inventore
              dignissimos necessitatibus consequuntur libero modi id, quibusdam et
              consequatur incidunt accusantium dicta debitis laborum ipsum,
              assumenda cum. Fugiat consequatur incidunt accusamus id in ea
              laudantium recusandae laboriosam animi delectus perspiciatis
              voluptates, necessitatibus totam architecto adipisci. Suscipit, eum
              ipsam? Corrupti, ex quidem?
            </p>
          </div>

          <div className="col-md-6 col-12">
            <img src={Img1} className="image" alt="Car" />
          </div>

        </div>
      </div>
    </section>



    </div>
    </>
  );
};

export default Home;
