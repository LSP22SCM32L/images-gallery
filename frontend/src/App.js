import 'bootstrap/dist/css/bootstrap.min.css';
// "./" represents the CURRENT DIRECTORY where APP.js file is located
//we dont have to use curly braces for Header because it was exported with default
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import Spinner from './components/Spinner';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

function App() {
  //word and setWord are new variables. word is part of the state of the
  // handleSearchSubmit component. When you want to update this word, you need
  // to call setWord and pass a new STRING value for the word variable
  // '' is the INITIAL value for the word variable which is the search term that
  // is entered by the user on the site
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSavedImages() {
      try {
        const res = await axios.get(`${API_URL}/images`);
        setImages(res.data || []);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getSavedImages();
  }, []);

  // useEffect(() => getSavedImages(), []);

  async function handleSearchSubmit(e) {
    e.preventDefault();
    // console.log(word); //access the inputted value when search is pressed
    // fetch(`${API_URL}/new-image?query=${word}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setImages([{ ...data, title: word }, ...images]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // new version
    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      setImages([{ ...res.data, title: word }, ...images]);
    } catch (error) {
      console.log(error);
    }

    setWord('');
  }

  async function handleDeleteImage(id) {
    try {
      const res = await axios.delete(`${API_URL}/images/${id}`);
      if (res.data?.deleted_id) {
        setImages(images.filter((image) => image.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSaveImage(id) {
    const imageToBeSaved = images.find((image) => image.id === id);
    imageToBeSaved.saved = true;

    try {
      const res = await axios.post(`${API_URL}/images`, imageToBeSaved);
      if (res.data?.inserted_id) {
        setImages(
          images.map((image) =>
            image.id === id ? { ...image, saved: true } : image
          )
        );
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(process.env);
  //could also access variables like this:
  //console.log(process.env.REACT_APP_UNSPLASH_KEY);

  return (
    <div>
      <Header title="Images Gallery" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Search
            word={word}
            setWord={setWord}
            handleSubmit={handleSearchSubmit}
          />
          <Container className="mt-4">
            {images.length ? (
              <Row xs={1} md={2} lg={3}>
                {images.map((image, i) => (
                  <Col key={i} className="pb-3">
                    <ImageCard
                      image={image}
                      deleteImage={handleDeleteImage}
                      saveImage={handleSaveImage}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              <Welcome />
            )}
          </Container>
        </>
      )}
    </div>
  ); //THIS IS JSX SYNTAX
}

export default App;
