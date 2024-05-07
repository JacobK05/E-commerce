import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Nav from './components/nav'
import Body from './components/body'
import Shop from './pages/shop'
import Contact from './pages/contact'
import Login from './pages/login'
import Register from './pages/register'

import './style.css'

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
   <>
   <ApolloProvider client={client}>
     <BrowserRouter>
                <Nav />
                <hr  className='line'/>
                <Routes>
                    <Route exact path="/" element={<Body />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                
              
            </BrowserRouter>
            </ApolloProvider>

  
   </>
  )
}

export default App
