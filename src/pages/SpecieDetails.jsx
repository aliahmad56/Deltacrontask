import '../assets/styles/global.css';
import Header from '../components/Common/header';
import Footer from '../components/Common/footer';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SpecieDetails = (props) => {
  const { state } = props.location;
  console.log('State data', state);
  const specie = useSelector((state) => state.specie.species);
  const [matchingdata, setMatchingData] = useState(null);

  useEffect(() => {
    if (state) {
      console.log('Found matching Species:', state);
      setMatchingData(state);
    } else {
      console.log(`Specific Specie Not Found`);
      setMatchingData(null);
    }
  }, [state, specie]);

  return (
    <div className="detail-section">
      <Header />
      <div className='inside-section'>
        <h1 className="main-head">Specie Details</h1>
        <img className="specie-image" src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1652340735/EducationHub/photos/giant-panda.jpg" alt=""></img>
        <div className='card-section'>
          {matchingdata ? (
            <div className="detail-data">
              <h1>Record: {matchingdata.name}</h1>
              <h1>Classification: {matchingdata.classification}</h1>
              <h1>Note: You can display as much record as you want as like the above</h1>
            </div>
          ) : (
            <p>No matching Specie found</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SpecieDetails;