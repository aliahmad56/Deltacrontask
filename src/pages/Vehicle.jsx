import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchvehicles } from "../redux/Vehicles/actions/VehicleActions";
import { Link } from 'react-router-dom';
import Header from '../components/Common/header';
import Footer from '../components/Common/footer';
import loadingGif from '../assets/images/loading.gif';
import '../assets/styles/global.css';

const Vehicle = () => {
  const vehicle = useSelector((state) => state.vehicle.vehicles);
  const loading = useSelector((state) => state.vehicle.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchvehicles());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <h1 className="main-head">List Of Vehicle</h1>
      {loading && (
        <div>
          <div className="loading-container">
            <img src={loadingGif} alt="Loading..." className="loading-image" />
          </div>
          <h3 className="text-loading">Please Wait</h3>
        </div>
      )}
      <div className='card-section'>
        {vehicle.map((vehicle) => (
          <div className="card card1">
            <img className="vehicle-image" src="https://www.gdels.com/images/merlin_cabecera.jpg" alt="" />
            <h1>Vehicle Name: {vehicle.name}</h1>
            <p>Vehicle Model: {vehicle.model}</p>
            <p>Vehicle Manufecturar: {vehicle.manufacturer}</p>
            <div>
              <Link to={{ pathname: '/vehicledetails', stateobj: vehicle }} className='detail-button'>Read More</Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Vehicle;
