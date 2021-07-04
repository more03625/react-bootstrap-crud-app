import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Notfound from "./components/pages/Notfound";
import Navbar from "./components/layout/Navbar";
import Adduser from "./components/pages/users/Adduser";
import Edituser from "./components/pages/users/Editusers";
import Viewuser from "./components/pages/users/Viewusers";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={Adduser} />
          <Route exact path="/users/edit/:userID" component={Edituser} />
          <Route exact path="/users/view/:userID" component={Viewuser} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
