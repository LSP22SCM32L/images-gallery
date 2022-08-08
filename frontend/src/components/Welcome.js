import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function Welcome() {
  return (
    <Jumbotron>
      <h1>Images Gallery</h1>
      <p>
        This is an application that retrieves photos with Unsplash API. In order
        to start, enter any search term in the input field.
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
}

export default Welcome;
