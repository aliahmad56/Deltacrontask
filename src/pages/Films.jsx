import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilms } from "../redux/Films/actions/FilmActions";
import { Link } from 'react-router-dom';
import Header from '../components/Common/header';
import Footer from '../components/Common/footer';
import loadingGif from '../assets/images/loading.gif';
import '../assets/styles/global.css';

const Films = () => {
  const film = useSelector((state) => state.film.films);
  const loading = useSelector((state) => state.film.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <h1 className="main-head">List Of Films</h1>
      {loading && (
        <div>
          <div className="loading-container">
            <img src={loadingGif} alt="Loading..." className="loading-image" />
          </div>
          <h3 className="text-loading">Please Wait</h3>
        </div>
      )}
      <div className='card-section'>
        {film.map((film) => (
          <div className="card" key={film.episode_id}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLhzACb2RzsKi-qawM2dxjexfUjhRNHTRhvtlvf8GbQSORN53fAVzf93CuzT8xW5lh0c&usqp=CAU" alt="" />
            <h1>Film Name: {film.title}</h1>
            <p>Film Director: {film.director}</p>
            <div>
              <Link to={{ pathname: '/filmdetail', stateobj: film }} className='detail-button'>Read More</Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Films;
