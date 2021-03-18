import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from 'apollo-boost';

//import other components from  "./components/ComponentName";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import StoryForm from './components/StoryForm'
import Stories from './pages/Stories'
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
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
          <HomePage />
          <div className="container">
            <Switch>
              <Route exact path="/storyform" component={StoryForm} />
              <Route exact path="/stories" pages={Stories} />
            </Switch>
          </div>

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
