import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonContainer } from './containers/PokemonContainer';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh',
  });

  return (
    <ApolloProvider client={client}>
      <header>
        <h1 className="app__title">Charizard</h1>
        <p className="app__description">
          Find out about everything about your favorite Pokémon
        </p>
      </header>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
