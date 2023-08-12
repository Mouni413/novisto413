import './index.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

function NavBarWithDropDown() {
  return (
    <Navbar
      expand="lg"
      className="nav-bar-background-color-container"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://novisto.com/wp-content/uploads/2022/04/novisto_logo.webp"
            alt="novista-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto m-auto">
            <NavDropdown title="ESG Software" id="nav-dropdown-container">
              <NavDropdown.Item href="#action/3.1">
                For Cooperate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                For Private Capital
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Security</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Technology</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Solutions" id="nav-dropdown-container">
              <NavDropdown.Item href="#action/3.1">OverView</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                By Industry
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                By Business need
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Customers" id="nav-dropdown-container">
              <NavDropdown.Item href="#action/3.1">
                Featured Customers
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="nav-dropdown-container">
              <NavDropdown.Item href="#action/3.1">
                ESG Insights and Resources
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Glossaries</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Partners</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Help Articles
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="nav-dropdown-container">
              <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Novisto News
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Careers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button className="request-demo-button">Request demo</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarWithDropDown
