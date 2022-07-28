import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbarStyle = {
  backgroundColor: 'lightblue',
};

function Header({ title }) {
  // const {title} = props;//to destructure an object you need to add CURLY BRACES
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

//in order to write JS in JSX, you need to add CURLY BRACES
export default Header; //This way the header component can be imported into other files in the project
