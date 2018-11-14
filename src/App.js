import React, { Component } from "react";
import ImageCard from "./components/ImageCard/ImageCard";
import images from "./images.json";
import Navbar from "./components/Navbar/Navbar";

const styles = {
  jumbotron: {    
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundBlendMode: "multiply",
    backgroundColor: "#9ebeaf",
    minHeight: "16vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

}
function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,    
    score: 0,    
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore ,
      rightWrong :""     
    });   
    this.handleShuffle();
  };

  handleReset = () => {
    
    this.setState({
      score: 0,
      rightWrong : "Wrong Hit... Score has been Reset!!!",      
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({ friends: shuffledImages });
  };



  // Map over this.state.images and render a ImageCard component for each image object
  render() {
    return (
  
      <div>
        <Navbar 
        score={this.state.score}       
        rightWrong={this.state.rightWrong}
        ></Navbar>
        <div className="jumbotron jumbotron-fluid text-center p-4" style={styles.jumbotron}>
        <h1 className="display-4 text-light">Thanks Giving Memory Game!</h1>
        </div>
        <h3>Click on each card without hitting duplicates and Score!!!! </h3>
        <div className="row">
        {this.state.images.map(image => (
          <ImageCard              
            id={image.id}
            key={image.id}           
            image={image.image}  
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}         
          />
        ))}
           
      </div>
      </div>
    );
  }
}

export default App;

