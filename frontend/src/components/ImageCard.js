import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function ImageCard({ image, deleteImage, saveImage }) {
  const authorName = image.user?.name || 'No author name';
  const authorPortfolioURL = image.user?.portfolio_url;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>
          {/* feature image.title? question mark is called OPTIONAL CHAINING */}
          {image.title?.charAt(0).toUpperCase() + image.title.slice(1)}
        </Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>{' '}
        {!image.saved && (
          <Button variant="secondary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}
      </Card.Body>
      <Card.Footer className="text-center text-muted">
        {authorPortfolioURL && (
          <Nav.Link href={authorPortfolioURL} target="_blank">
            {authorName}
          </Nav.Link>
        )}
        {!authorPortfolioURL && authorName}
      </Card.Footer>
    </Card>
  );
}

export default ImageCard;
