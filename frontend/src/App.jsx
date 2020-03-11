import React, { useEffect, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from './views/Login';
import { Home } from './views/Home';
import { userRoles, routes } from './constants';

export default function App() {

  // fetch role from somewhere
  const [state, dispatch] = useAppState({ userRole: localStorage.getItem("userRole") || userRoles.GUEST });

  useEffect(() => {
    localStorage.setItem("userRole", state.userRole);
  }, [state.userRole]);

  return (
    <Router>
      <Switch>
        <Route exact path={routes.LOGIN} component={() => <Login userRole={state.userRole} dispatchApp={dispatch} />} />
        <Route exact path={routes.HOME} component={() => <Home userRole={state.userRole} dispatchApp={dispatch} />} />
      </Switch>
    </Router>
  )
}

function useAppState(prevState) {

  const [state, dispatch] = useReducer((state, action) => {
    console.log(action);
    switch (action.type) {
      case "userRole":
        return { ...state, userRole: action.value }
      default:
        return state
    }
  }, prevState);

  return [state, dispatch];
}