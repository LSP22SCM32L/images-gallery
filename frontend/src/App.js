import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// "./" represents the CURRENT DIRECTORY where APP.js file is located
//we dont have to use curly braces for Header because it was exported with default
import Search from './components/Search';
import {useState} from 'react';

function App() {
  //word and setWord are new variables. word is part of the state of the
  // handleSearchSubmit component. When you want to update this word, you need
  // to call setWord and pass a new STRING value for the word variable
  // '' is the INITIAL value for the word variable which is the search term that
  // is entered by the user on the site
  const [word, setWord] = useState('');

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(word);//access the inputted value when search is pressed
  };
  
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );//THIS IS JSX SYNTAX
}

export default App;
