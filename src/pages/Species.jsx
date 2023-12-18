import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSpecies } from "../redux/Species/actions/SpecieActions";
import { Link } from 'react-router-dom';
import Header from '../components/Common/header';
import Footer from '../components/Common/footer';
import loadingGif from '../assets/images/loading.gif';
import '../assets/styles/global.css';
import { v4 as uuidv4 } from 'uuid';

const Species = () => {
  const specie = useSelector((state) => state.specie.species);
  const loading = useSelector((state) => state.specie.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpecies());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <h1 className="main-head">List Of Films</h1>
      <div className='card-section'>
        {loading && (
          <div>
            <div className="loading-container">
              <img src={loadingGif} alt="Loading..." className="loading-image" />
            </div>
            <h3 className="text-loading">Please Wait</h3>
          </div>
        )}
        {specie.map((specie) => {
          const speciesId = uuidv4();
          return (
            <div className="card card2" key={speciesId}>
              <img className="specie-image" src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1652340735/EducationHub/photos/giant-panda.jpg" alt="" />
              <h1>Record : {specie.name}</h1>
              <p>Specie Classification: {specie.classification}</p>
              <div>
                <Link to={{ pathname: '/speciesdetail', state: specie }} className='detail-button'>
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Species;
