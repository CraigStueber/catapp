import React, {Component} from 'react';
import Routes from './Routes';
import Baby from './images/Baby.JPG';
import Mushy from './images/Mushy.JPG';
import Sebastian from './images/Sebastian.JPG';
import Stella from './images/Stella.JPG';
import Navbar from './Navbar';
import './App.css';

class App extends Component{
  static defaultProps ={
    pets:[
      {
        name: "Sebastian",
        age: 3,
        src: Sebastian,
        facts:[
          "Asshole",
          "Insane",
          "Bothersome"
        ]
      },
      {
        name: "Stella",
        age: 1,
        src: Stella,
        facts:[
          "Best Cat ever",
          "Loving",
          "We miss her"
        ]
      },
      {
        name: "Mushy",
        age: 2,
        src: Mushy,
        facts:[
          "Annoying",
          "Fluffy",
          "Likes the bathroom and kitchen"
        ]
      },
      {
        name: "Baby",
        age: 2,
        src: Baby,
        facts:[
          "Super Cute",
          "Got into trouble",
          "Makes me smile"
        ]
      }

    ]
  }
  render(){
    
  return (
    <div>
    <Navbar pets={this.props.pets} />
    <div className="container">
    <Routes pets={this.props.pets} />
    </div></div>
    )
   

}
}

export default App;
