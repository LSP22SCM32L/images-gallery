import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

// const a = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* {a ? <App /> : <h1>Hello from JS in JSX</h1>} HOW YOU WOULD WRITE
      JAVASCRIPT IN THIS JSX SECTION^^*/} 
    <App />
  </React.StrictMode>
);//this JSX syntax is used by react to create react elements, 
  //under the hood this syntax is translated into JS plain language
  //if you want to mention a react component it must start uppercase as in "React"

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
