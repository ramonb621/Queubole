import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Title from "./components/Title";
import { Navbar } from "./components/Navbar";
import { Container, Col, Row } from "./components/Grid"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
