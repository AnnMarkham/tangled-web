import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from 'apollo-boost';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import other components from  "./components/ComponentName";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
//import Story from './components/Story';

//import pages from './pages/pageName'

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
        <Navbar />
        <HomePage />
    </Router>

    </ApolloProvider>
  );
}

export default App;
