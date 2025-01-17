import React from 'react';
import ReactDOM from 'react-dom/client';
import ChildA from './Childs/ChildA';
import FrontPage from './FirebaseCRUD/UserInterface/FrontPage';
// import FrontPage from './FirebaseTesting/UserInterface/FrontPage';
// import FrontPage from './UseContextHookInMultipleFields/FrontPage';
// import FrontPage from './ValueIncrementDecrement/FrontPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FrontPage />
  </React.StrictMode>
);

