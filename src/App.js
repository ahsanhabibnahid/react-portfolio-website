import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppRoute from "./router/AppRoute";

function App() {
  return (
    <Router>
       <AppRoute></AppRoute>
    </Router>
  );
}

export default App;
