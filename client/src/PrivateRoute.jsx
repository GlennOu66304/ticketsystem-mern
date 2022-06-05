import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

 function PrivateRoute(props) {
  const isLogin = false;
  return isLogin ? (
    <Route
      path={props.path}
      render={() => <props.component></props.component>}
    ></Route>
  ) : (
    <Redirect to="/login" />

  );
}
export default PrivateRoute