import React from 'react';
import { Link } from 'react-router-dom';
import starwar from '../../assets/images/starwar.png';
import '../../assets/styles/global.css';

function header() {
  return (
    <div>
      <div className="nav">
        <ul className="menu-item">
          <li><Link to="/">Home</Link ></li>
          <li><Link to="/films">Films</Link ></li>
          <img className="headerimage" src={starwar} alt=""></img>
          <li> <Link to="/vehicle">Vehichles</Link ></li>
          <li> <Link to="/species">Species</Link ></li>
        </ul>
      </div>
    </div>
  );
}

export default header;