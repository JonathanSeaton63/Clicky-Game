import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Navbar';
import Header from './components/Header/Header';
import CharacterCard from "./components/Characters/Characters";
import images from "./images.json"


class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0
  }

  handleClick = id => {
    let guesseCorrectly = false; 
    const newData = this.state.images.map(item => {
      const newImages = { ...images };
      if (newImages.id === id) {
        if (!newImages.clicked) {
          newImages.clicked = true; 
          guesseCorrectly = true; 
        }
      }
    })
    this.setState({images: newData})
  };

  shuffleImages = data => {
    let i = images.length - 1; 
    while (i > 0) {
      const j = Math.floor(Math.random() * (i * 1));
      const temp = data[i];
       data[i] = data[j]
       data [j] = temp; 
    }
  }

  handleGuessCorrectly = newImages => {
    const {score, topScore} = this.state
    const newScore = score +1 
    const newTopScore = Math.max(topScore, newScore) 
    this.setState({images: this.shuffleImages(newImages),
    score: newScore, topScore: newTopScore})
  }
  
    handleGuessIncorrectly = (item) => {
      this.setState({
        images: this.handleReset(item),
        score: 0
      })
    
      }
    

    handleReset = images => {
      const resetImages = images.map(item => ({...item, clicked: false}))
      return this.shuffleImages; 

    }

    render() {
      return (
        <div>
          <Nav
            score= {this.setState.newScore}
            topScore= {this.setState.newTopScore}
          />
          <Header />
          {this.state.images.map(images => (
            <CharacterCard
              image={images.image}
              onClick = {this.setState.handleClick}
              onClick = {this.setState.handleGuessCorrectly}
              onClick = {this.setState.handleGuessIncorrectly}
              onClick = {this.setState.handleReset}
            />
          ))}

        </div>
      );
    }
  }


export default App;
