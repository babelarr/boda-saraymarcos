import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import * as firebase from 'firebase/app';

import 'firebase/database';
import 'firebase/storage';

firebase.initializeApp({
  apiKey: "AIzaSyDOuHU0FUakUw08cvY_xoW1aojpgd5WYhQ",
  authDomain: "boda-sara-y-marcos.firebaseapp.com",
  databaseURL: "https://boda-sara-y-marcos.firebaseio.com",
  projectId: "boda-sara-y-marcos",
  storageBucket: "boda-sara-y-marcos.appspot.com",
  messagingSenderId: "659791182884",
  appId: "1:659791182884:web:47961d1a72dbcf99"
})

ReactDOM.render(<App />, document.getElementById('root'));
