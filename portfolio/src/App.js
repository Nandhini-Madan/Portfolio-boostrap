
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">About Me</Nav.Link>
      <Nav.Link href="#action2">My Projects</Nav.Link>
      <Nav.Link href="#action2">Contact Me</Nav.Link>

      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
<Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AboutMe" component={AboutMe} />
        <Route exact path="/MyProject" component={Myproject} />
        <Route exact path="/ContactMe" component={ContactMe}/>
      </Switch>
    </div>
  );
}

export default App;
