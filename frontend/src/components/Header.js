import React from 'react'
import {Navbar} from 'react-bootstrap'

function Header({title}) {
    // const {title} = props;//to destructure an object you need to add CURLY BRACES
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Navbar>
    )
};

//in order to write JS in JSX, you need to add CURLY BRACES
export default Header;//This way the header component can be imported into other files in the project
