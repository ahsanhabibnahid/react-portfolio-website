import {
  BrowserRouter as Router
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
