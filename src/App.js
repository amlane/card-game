import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{
    constructor(){
      super();
      this.state = {
        data: [],
        cards: []
      }
    }

    componentDidMount(){
      axios
      .get(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
      .then ( res => {
        console.log(res.data)
        this.setState({  
          data: res.data,
          cards: res.data.cards
        })
      })
      .catch( err => {
        console.log(err)
      })
    }

    render(){
    return (
      <div className="App">
        <h1>Card Game</h1>
        <div className="deck-of-cards">
        {this.state.cards.map( card => {
          return <img className="card" src={card.image} key={`${card.value} ${card.suit}`} alt={`${card.value} of ${card.suit}`} />
        } )}
        </div>
      </div>
    );
  }
}

export default App;
