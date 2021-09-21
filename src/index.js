import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: '1', message: "I learn JS with IT-Kamasutra!", likesCount: "55"},
  {id: '2', message: "Hi, how are you?", likesCount: "10"},
  {id: '3', message: "It's my first post here!", likesCount: "15"}
];

let dialogsData = [
  {id: '1', name: 'Alex'},
  {id: '2', name: 'Dima'},
  {id: '3', name: 'Sister'},
  {id: '4', name: 'Mom'},
  {id: '5', name: 'Dad'},
  {id: '6', name: 'Diana'}
];

let messagesData = [
  {id: '1', message: 'Hi!'},
  {id: '2', message: 'How are yoy?'},
  {id: '3', message: "I'm fine, thank you!)"},
  {id: '4', message: 'YO'},
  {id: '5', message: 'YO'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
