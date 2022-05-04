import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIENMXH2jkfzsMfMoUkm12NWAHHFQCyDo",
  authDomain: "test-ecom-130be.firebaseapp.com",
  projectId: "test-ecom-130be",
  storageBucket: "test-ecom-130be.appspot.com",
  messagingSenderId: "619090217505",
  appId: "1:619090217505:web:544ad0ccf403d19838f160"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
