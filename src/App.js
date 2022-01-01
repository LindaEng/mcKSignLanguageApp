import React, { Component } from "react";
import './App.css'
import Card from "./card/card";
import DrawButton from './draw button/drawButton';

class App extends Component {
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);
//created state
    this.state = {
      cards: [
        {id: 1, eng:"A", asl: "Aye" },
        {id: 2, eng:"B", asl: "Bee"},
        {id: 3, eng:"C", asl: "See" },
        {id: 4, eng:"D", asl: "Dee"},
        {id: 5, eng:"E", asl: "Eyy" },
        {id: 6, eng:"F", asl: "Eff"},
        {id: 7, eng:"G", asl: "Gee" },
        {id: 8, eng:"H", asl: "Aycha"},
        {id: 9, eng:"I", asl: "Eye" },
        {id: 10, eng:"J", asl: "Jay"},
        {id: 11, eng:"K", asl: "Kay" },
        {id: 12, eng:"L", asl: "El"},
        {id: 13, eng:"M", asl: "Em" },
        {id: 14, eng:"N", asl: "En"},
        {id: 15, eng:"O", asl: "Oh" },
        {id: 16, eng:"P", asl: "Pee"},
        {id: 17, eng:"Q", asl: "Cue" },
        {id: 18, eng:"R", asl: "Arr"},
        {id: 19, eng:"S", asl: "Es" },
        {id: 20, eng:"T", asl: "Tee"},
        {id: 21, eng:"U", asl: "You" },
        {id: 22, eng:"V", asl: "Vee"},
        {id: 23, eng:"W", asl: "Double u" },
        {id: 24, eng:"X", asl: "Ex"},
        {id: 25, eng:"Y", asl: "Why" },
        {id: 26, eng:"Z", asl: "Zee"},
      ],
      currentCard: {}
    }
  }
  
componentWillMount(){
  const currentCards = this.state.cards;


this.setState({
  cards: currentCards,
  currentCard: this.getRandomCard(currentCards)
})
}

getRandomCard(currentCards){
  var card = currentCards[Math.floor(Math.random() * currentCards.length)]
  return(card);
}

updateCard(){
  const currentCards = this.state.cards;
this.setState({currentCard: this.getRandomCard(currentCards)
})
}


  render()  {
    return (
      <div className="App">
        <div className="cardRow">
        <Card eng={this.state.currentCard.eng}
              asl={this.state.currentCard.asl}
              />
      </div>
      <div className="buttonRow">
      <DrawButton drawCard={this.updateCard}/>
      </div>
    </div>
    );
  }

}
export default App;
