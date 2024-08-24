// src/Components/Preloader.jsx
import React from 'react';
import { ClipLoader, ClimbingBoxLoader , BeatLoader, GridLoader, CircleLoader} from 'react-spinners';
import '../Css/preloader.css'; // Add your styles for the preloader here

const Preloader = () => {
  return (
    <div className="preloader">
      <CircleLoader color="#3498db" loading={true} size={150} />
    </div>
  );
};

export default Preloader;
