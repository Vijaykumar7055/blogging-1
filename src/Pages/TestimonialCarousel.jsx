import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./tesit.css"


const TestimonialCarousel = () => {
  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://via.placeholder.com/100" className="rounded-circle mb-3" alt="Client" />
                    <h5 className="mb-2">John Doe</h5>
                    <p className="text-muted">CEO at Company</p>
                    <p className="testimonial-text">
                      "This is an amazing product! It has exceeded all of my expectations and has made a significant impact on our business."
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://via.placeholder.com/100" className="rounded-circle mb-3" alt="Client" />
                    <h5 className="mb-2">Jane Smith</h5>
                    <p className="text-muted">Marketing Director</p>
                    <p className="testimonial-text">
                      "I highly recommend this service. The team is professional and the results speak for themselves."
                    </p>
                  </div>
                </div>
                {/* Add more carousel items as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
