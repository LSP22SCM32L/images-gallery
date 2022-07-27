import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// "./" represents the CURRENT DIRECTORY where APP.js file is located
//we dont have to use curly braces for Header because it was exported with default

function App() {
  return (
    <div>
      <Header title="Images Gallery"/>
    </div>
  );//THIS IS JSX SYNTAX
}

export default App;
