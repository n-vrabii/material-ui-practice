import React, { useEffect, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from './views/Login';
import { Home } from './views/Home';
import { userRoles, routes } from './constants';

export const AuthContext = React.createContext({});

export function App() {

  // fetch role from somewhere
  const [state, dispatch] = useAppState({ userRole: localStorage.getItem("userRole") || userRoles.GUEST });

  useEffect(() => {
    localStorage.setItem("userRole", state.userRole);
  }, [state.userRole]);

  return (
    <AuthContext.Provider value={{ userRole: state.userRole, dispatchApp: dispatch }}>
      <Router>
        <Switch>
          <Route exact path={routes.LOGIN} component={() => <Login />} />
          <Route exact path={routes.HOME} component={() => <Home />} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

function useAppState(initState) {

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "userRole":
        return { ...state, userRole: action.value }
      default:
        return state
    }
  }, initState);

  return [state, dispatch];
}