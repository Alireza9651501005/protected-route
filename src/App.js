import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Pro11 from "./components/Pro11";
import ProtectedCompo from './components/ProtectedCompo'
import React, { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <button onClick={() => setIsAuth(true)}>Login</button>
            <button onClick={() => setIsAuth(false)}>Logout</button>
            <Link to='/profile'>Go to the Profile</Link>
          </Route>
          <ProtectedCompo path='/profile' component={Pro11} isAuth={isAuth}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
