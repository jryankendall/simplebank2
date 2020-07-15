import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages';
import './App.css';

function App() {
  return (
    <>
      <div>Bottom Text. I mean top.</div>
      <Router>
        <Route exact path={`/login`}> <Login></Login> </Route>
      </Router>
    </>
  );
}

export default App;
