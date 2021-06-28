import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character'
import Header from './components/Header'

const App = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get('https://swapi.dev/api/people')
          .then ((data) => {
            console.log(data)
            setCharacterList(data.data)
          })
          .catch(err => {
            console.log(err)
          })
    }
    getData();
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header className="Header">Characters</Header>
      <div id='divCon'>
      <Character props={characterList}/>
      </div>
    </div>
  );
}

export default App;