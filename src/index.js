import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA3RV7--Uk2xJ53v8lP1qs156sdEBfd_8",
  authDomain: "test-basic-ecom.firebaseapp.com",
  projectId: "test-basic-ecom",
  storageBucket: "test-basic-ecom.appspot.com",
  messagingSenderId: "258611265166",
  appId: "1:258611265166:web:aaffa356b440368ea813df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


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
