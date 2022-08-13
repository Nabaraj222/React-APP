import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { component } from "react";
import AddPerson from "./components/add-person.component";
import Person from "./components/person.component";
import PersonList from "./components/person-list.component";
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className='container'>
          <Link to="/persons" className="navbar-brand">
            PIS by Nabaraj
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/persons" className="nav-link">
                Persons
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </div>
      </nav>
      <div className="footer">
      <footer className="py-5 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Nabaraj Ghimire 2022
          </p>
        </div>
      </footer>
      </div>
      <Routes>
        <Route exact path='/' element = {<PersonList/>} />
        <Route path="/persons" element={<PersonList/>} />
        <Route path="/add" element={<AddPerson/>} />
        <Route path="/persons/:id" element={<Person/>} />
      </Routes>
    </div>
  );
}

export default App;
