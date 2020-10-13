import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from "react-redux";
import store from "./store";
import {  DatastoreServiceProvider} from './components/dataService-context';
import dataService from "./service/dataService";
ReactDOM.render(
      <Provider store={store}>
          <DatastoreServiceProvider value={dataService}>
                  <App />
          </DatastoreServiceProvider>
      </Provider>,
  document.getElementById('root')
);
