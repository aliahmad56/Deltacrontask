import '../assets/styles/global.css';
import Header from '../components/Common/header';
import Footer from '../components/Common/footer';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FilmDetails = (props) => {
  const { stateobj } = props.location;
  console.log('State data', stateobj);
  const films = useSelector((state) => state.film.films);
  const [matchingdata, setMatchingData] = useState(null);

  useEffect(() => {
    if (stateobj) {
      console.log('Found matching Species:', stateobj);
      setMatchingData(stateobj);
    } else {
      console.log(`Specific Specie Not Found`);
      setMatchingData(null);
    }
  }, [ films, stateobj]);

  return (
    <div className="detail-section">
      <Header />
      <div className='inside-section'>
        <h1 className="main-head">Films Details</h1>
        <img className="film-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLhzACb2RzsKi-qawM2dxjexfUjhRNHTRhvtlvf8GbQSORN53fAVzf93CuzT8xW5lh0c&usqp=CAU" alt=""></img>
        <div className='card-section'>
          {matchingdata ? (
            <div className="detail-data">
              <h1>Film Name: {matchingdata.title}</h1>
              <h1>Director: {matchingdata.director}</h1>
              <p class="discription-data">Film Discription: {matchingdata.opening_crawl}</p>
              <h1>Note: You can display as much record as you want as like the above</h1>
            </div>
          ) : (
            <p>No matching film found</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default FilmDetails;