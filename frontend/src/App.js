import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// "./" represents the CURRENT DIRECTORY where APP.js file is located
//we dont have to use curly braces for Header because it was exported with default
import Search from './components/Search';
import { useState } from 'react';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  //word and setWord are new variables. word is part of the state of the
  // handleSearchSubmit component. When you want to update this word, you need
  // to call setWord and pass a new STRING value for the word variable
  // '' is the INITIAL value for the word variable which is the search term that
  // is entered by the user on the site
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    // console.log(word); //access the inputted value when search is pressed
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  }

  function handleDeleteImage(id) {
    setImages(images.filter((image) => image.id !== id));
  }

  // console.log(process.env);
  //could also access variables like this:
  //console.log(process.env.REACT_APP_UNSPLASH_KEY);

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.map((image, index) => (
            <Col key={index} className="pb-3">
              <ImageCard image={image} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  ); //THIS IS JSX SYNTAX
}

export default App;
