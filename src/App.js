// App.js
import React from 'react';
import Home from './pages/Home';
import Films from './pages/Films';
import Vehicle from './pages/Vehicle';
import Species from './pages/Species';
import FilmDetails from './pages/FilmDetails';
import SpecieDetails from './pages/SpecieDetails';
import VehicleDetails from './pages/VehicleDetails';
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
   <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/films" component={Films} />
      <Route path="/vehicle" component={Vehicle} />
      <Route path="/species" component={Species} />
      <Route path="/filmdetail" component={FilmDetails} />
      <Route path="/speciesdetail" component={SpecieDetails} />
      <Route path="/vehicledetails" component={VehicleDetails} />
    </Switch>
    </>
  );
};

export default App;
