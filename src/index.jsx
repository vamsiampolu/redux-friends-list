import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Redbox from 'redbox-react';
import React from 'react';

require('./css/bootstrap/css/bootstrap.css');
const app = document.createElement('div');
document.body.appendChild(app);

try {
  ReactDOM.render(<App/>, app);
} catch (err) {
  ReactDOM.render(<Redbox error={err}/>, app);
}
