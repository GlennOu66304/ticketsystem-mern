import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import TopBar from "../src/components/topBar/TopBar"
// import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { AuthContext } from "./contexts/AuthContext";

function App() {
  // const { user } = useContext(AuthContext);

  return (
  
    <Router>
     
      <Switch>
  
        <Route exact path="/">
        <TopBar />
          {/* {user ? <Home /> : <Register />} */}
          <Home />
        </Route>

        <Route path="/login">
        <TopBar />
          <Login />
          {/* {user ? <Redirect to='/' /> : <Login />} */}
        </Route>

        <Route path="/register">
        <TopBar />
          {/* {user ? <Redirect to='/' /> : <Register />} */}
          <Register />
        </Route>

        <Route path="/profile/:username">
        <TopBar />
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
