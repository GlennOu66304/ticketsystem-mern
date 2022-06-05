import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TicketsList from "./pages/ticketsList/TicketsList";
import CreateTicket from "./pages/createTicket/CreateTicket";
import TopBar from "../src/components/topBar/TopBar";
// import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { AuthContext } from "./contexts/AuthContext";
// private router
import PrivateRoute from "./PrivateRoute.jsx";

function App() {
  // const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TopBar />
          <Home />
        </Route>

        <Route path="/login">
          <TopBar />
          <Login />
        </Route>

        <Route path="/register">
          <TopBar />
          <Register />
        </Route>

        <PrivateRoute path="/dashboard" component={TicketsList} />

        <PrivateRoute path="/createticket" component={CreateTicket} />
      </Switch>
    </Router>
  );
}

export default App;
