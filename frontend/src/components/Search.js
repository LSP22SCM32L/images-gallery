import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";

function Search() {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col xs={7}>
                <Form.Control placeholder="Search for new image" />
              </Col>
              <Col>
                <Button variant="primary" type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
