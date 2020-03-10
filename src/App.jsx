import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Landing from './views/Landing/Landing';
import Quiz from './views/Quiz/Quiz';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/quiz" component={Quiz} />
      </Switch>
    </Router>
  )
}