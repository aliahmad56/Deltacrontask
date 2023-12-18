import '../assets/styles/global.css';
import Header from '../components/Common/header';
import Footer from '../components/Common/footer';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SpecieDetails = (props) => {
  const { stateobj } = props.location;
  console.log('State data', stateobj);
  const vehicle = useSelector((state) => state.vehicle.vehicles);
  const [matchingdata, setMatchingData] = useState(null);

  useEffect(() => {
    if (stateobj) {
      console.log('Found matching Species:', stateobj);
      setMatchingData(stateobj);
    } else {
      console.log(`Specific Specie Not Found`);
      setMatchingData(null);
    }
  }, [stateobj, vehicle]);

  return (
    <div className="detail-section">
      <Header />
      <div className='inside-section'>
        <h1 className="main-head">Vehicle Details</h1>
        <img className="specie-image" src="https://www.gdels.com/images/merlin_cabecera.jpg" alt=""></img>
        <div className='card-section'>
          {matchingdata ? (
            <div className="detail-data">
              <h1>Title: {matchingdata.name}</h1>
              <h1>Director: {matchingdata.model}</h1>
              <h1>Director: {matchingdata.manufacturer}</h1>
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