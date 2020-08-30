import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Components/App';
import { ApolloProvider } from 'react-apollo-hooks';
import Client from './Apollo/Client';

import './CSS/sb-admin-2.min.css'

ReactDOM.render(
  <ApolloProvider client={Client}> 
    <App />
  </ApolloProvider>    
  ,
  document.getElementById('root')
);


