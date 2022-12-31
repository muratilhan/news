import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/navbar.css"
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';


function Navigation() {

  let location = useLocation();
  let category = location.pathname.split("/")[1].toString()
  
  return (
    <Navbar className='navbar-container navbar-inner'>
      <Container >
        <Link to="/" className='link-container'><Navbar.Brand href="#home"><i class="fa-solid fa-house-chimney"></i> Home</Navbar.Brand></Link>
        <Nav  className="me-auto">
          <div className='navbar-inner'>
          {["Business", "Entertainment", "General", "Health", "Science", "Sports","Technology"].map(item => <Link className={item.toLocaleLowerCase() !== category ? 'link-container' : 'link-container active' } to={`/${item.toLowerCase()}`}>{item} </Link>)}

          </div>
        </Nav>
      </Container>
      <Dropdown  className='navbar-dropdown'>
        <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {["Business", "Entertainment", "General", "Health", "Science", "Sports","Technology"].map(item =><Dropdown.Item> <Link className={item.toLocaleLowerCase() !== category ? 'link-container' : 'link-container active' } to={`/${item.toLowerCase()}`}>{item} </Link></Dropdown.Item>)}

        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
}

export default Navigation;