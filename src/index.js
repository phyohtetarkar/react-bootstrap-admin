import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Dashboard from './Dashboard';

library.add(fas);

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
);