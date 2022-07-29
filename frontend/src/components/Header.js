import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: 'lightblue',
};

function Header({ title }) {
  // const {title} = props;//to destructure an object you need to add CURLY BRACES
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '2rem' }} />
      </Container>
    </Navbar>
  );
}

//in order to write JS in JSX, you need to add CURLY BRACES
export default Header; //This way the header component can be imported into other files in the project
