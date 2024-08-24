import React from 'react';
import { FaBlog, FaGithub } from 'react-icons/fa';
import { GrBlog } from 'react-icons/gr';
import { RxGithubLogo } from 'react-icons/rx';
import './whyChooseUs.css'; // Import the external CSS file

const WhyChooseus = () => {
  return (
    <div className="why-choose-us">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-3 col-12 mb-4">
          <div className="card-box">
            <FaBlog className="card-icon" />
            <h5 className="card-heading">30+ Blogs</h5>
            <p className="card-text">
              Lorem ipsum perspiciatis dolores eveniet voluptate maxime a doloremque nisi,
            </p>
          </div>
        </div>

        <div className="col-md-3 col-12 mb-4">
          <div className="card-box">
            <GrBlog className="card-icon" />
            <h5 className="card-heading">30+ Blogs</h5>
            <p className="card-text">
              Lorem ipsum perspiciatis dolores eveniet voluptate maxime a doloremque nisi,
            </p>
          </div>
        </div>

        <div className="col-md-3 col-12 mb-4">
          <div className="card-box">
            <RxGithubLogo className="card-icon" />
            <h5 className="card-heading">30+ Blogs</h5>
            <p className="card-text">
              Lorem ipsum perspiciatis dolores eveniet voluptate maxime a doloremque nisi,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseus;
