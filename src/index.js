import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/scss/bootstrap.scss"
import './assets/css/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import * as serviceWorker from './serviceWorker';
import "leaflet/dist/leaflet.css";


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
