import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Register from "./LandingPage/Register";
import Login from "./LandingPage/Login";
import Dashboard from "./Dashboard/Dashboard";
import PatientDetails from "./Dashboard/PatientDetails";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/patientDetails/:id" component={PatientDetails} />
    </div>
  );
}

export default App;
