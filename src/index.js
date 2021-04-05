import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Landing from './pages/Landing/landing';
// import Job from './pages/Job/Job';
// import Profile from './pages/Profile/Profile';
// import EditJob from './pages/EditJob/EditJob';
import Modal from './components/ModalDelete/ModalDelete';


import './styles/global.css'


ReactDOM.render(
  <React.StrictMode>
    <Modal />
  </React.StrictMode>,
  document.getElementById('root')
);

