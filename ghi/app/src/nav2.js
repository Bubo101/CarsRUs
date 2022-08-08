import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarDarkExample() {
return (
    <Navbar variant="dark" bg="dark" expand="lg">
    <Container fluid>
        <Navbar.Brand href="/">Cars R Us</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
        <Nav>
        <NavDropdown
            id="nav-dropdown-dark-example"
            title="Inventory Management"
            menuVariant="dark"
            >
            <NavDropdown.Item href="/autos/">Automobile List</NavDropdown.Item>
            <NavDropdown.Item href="/models/">
                Models
            </NavDropdown.Item>
            <NavDropdown.Item href="/manufacturers/">
                Manufacturers
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/autos/new/">
                Add Automobile
            </NavDropdown.Item>
            <NavDropdown.Item href="/models/new/">
                Add Model
            </NavDropdown.Item>
            <NavDropdown.Item href="/manufacturers/new/">
                Add Manufacturer
            </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
            id="nav-dropdown-dark-example"
            title="Service Department"
            menuVariant="dark"
            >
            <NavDropdown.Item href="/appts/">Current Appointments</NavDropdown.Item>
            <NavDropdown.Item href="/appts/byvin/">
                Appointments by VIN
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/appts/new/">
                New Appointment
            </NavDropdown.Item>
            <NavDropdown.Item href="/techs/new/">
                New Technician
            </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
            id="nav-dropdown-dark-example"
            title="Sales Department"
            menuVariant="dark"
            >
            <NavDropdown.Item href="/salesrecord/list/">Sales List</NavDropdown.Item>
            <NavDropdown.Item href="/salesreps/history/">
                Sales History
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/salesrecord/new/">
                Record New Sale
            </NavDropdown.Item>
            <NavDropdown.Item href="/customers/new/">
                New Customer
            </NavDropdown.Item>
            <NavDropdown.Item href="/salesreps/new/">
                New Sales Rep
            </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavbarDarkExample;