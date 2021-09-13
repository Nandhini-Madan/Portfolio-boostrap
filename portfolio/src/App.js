
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import MyProjects from './Myprojects';
import Footer from "./Footer";

function App() {

  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Link to="/" className="nav-link" aria-current="page">Home </Link>
            <Link to="/AboutMe" className="nav-link" aria-current="page">About Me</Link>
            <Link to="/Myproject" className="nav-link" aria-current="page">My Projects</Link>
            <Link to="/ContactMe" className="nav-link" aria-current="page">Contact Me</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route exact path="/MyProject" component={MyProjects} />
        <Route exact path="/ContactMe" component={ContactMe} />
      </Switch>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
