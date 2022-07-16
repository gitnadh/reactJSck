import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact-us</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Education & Experiences</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Certifications
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Competences</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Languages
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Register Today</h3>
                <p>Fill in the data below.</p>
                <form className="requires-validation" noValidate>
                  <div className="col-md-12">
                    <input className="form-control" type="text" name="name" placeholder="Full Name" required />
                    <div className="valid-feedback">Username field is valid!</div>
                    <div className="invalid-feedback">Username field cannot be blank!</div>
                  </div>
                  <div className="col-md-12">
                    <input className="form-control" type="email" name="email" placeholder="E-mail Address" required />
                    <div className="valid-feedback">Email field is valid!</div>
                    <div className="invalid-feedback">Email field cannot be blank!</div>
                  </div>
                  <div className="col-md-12">
                    <select className="form-select mt-3" required>
                      <option selected disabled value>Position</option>
                      <option value="jweb">Junior Web Developer</option>
                      <option value="sweb">Senior Web Developer</option>
                      <option value="pmanager">Project Manager</option>
                    </select>
                    <div className="valid-feedback">You selected a position!</div>
                    <div className="invalid-feedback">Please select a position!</div>
                  </div>
                  <div className="col-md-12">
                    <input className="form-control" type="password" name="password" placeholder="Password" required />
                    <div className="valid-feedback">Password field is valid!</div>
                    <div className="invalid-feedback">Password field cannot be blank!</div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <label className="mb-3 mr-1" htmlFor="gender">Gender: </label>
                    <input type="radio" className="btn-check" name="gender" id="male" autoComplete="off" required />
                    <label className="btn btn-sm btn-outline-secondary" htmlFor="male">Male</label>
                    <input type="radio" className="btn-check" name="gender" id="female" autoComplete="off" required />
                    <label className="btn btn-sm btn-outline-secondary" htmlFor="female">Female</label>
                    <input type="radio" className="btn-check" name="gender" id="secret" autoComplete="off" required />
                    <label className="btn btn-sm btn-outline-secondary" htmlFor="secret">Secret</label>
                    <div className="valid-feedback mv-up">You selected a gender!</div>
                    <div className="invalid-feedback mv-up">Please select a gender!</div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                    <label className="form-check-label">I confirm that all data are correct</label>
                    <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                  </div>
                  <div className="form-button mt-3">
                    <button id="submit" type="submit" className="btn btn-primary">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
