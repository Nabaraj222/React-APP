import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { component } from "react";
import AddPerson from "./components/add-person.component";
import Person from "./components/person.component";
import PersonList from "./components/person-list.component";
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<div> Home Page</div>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
