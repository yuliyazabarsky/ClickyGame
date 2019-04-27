import React, {Component} from "react";
import "./App.css";
import Card from "./Components/Cards/Card";
import Navbar from "./Components/NavBar/Navbar";
import Wrapper from "./Components/Wrapper/Wrapper";
import Header from "./Components/Header/Header";
import friends from "./friends.json";


let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on an image to begin!";

class App extends Component {
    state = {
        friends,
        correctGuesses,
        bestScore,
        clickMessage
    }

    setClicked = id =>{ 

        const friends = this.state.friends;
        const clickedFriend = friends.filter(friend => friend.id ===id);

        if(clickedFriend[0].clicked){
            correctGuesses =0;
            clickMessage = "You guessed incorrectly";

            for(let i=0; i< friends.length; i++){
                friends[i].clicked = false;
            }

            friends.sort(function(a, b){return 0.5 - Math.random()});

            this.setState({correctGuesses});
            this.setState({clickMessage});
            this.setState({friends});

            // if clicked = false, user hasn't gone thru all 12 cimages correctly
        }else if (correctGuesses < 11){
            clickedFriend[0].clicked = true;
            correctGuesses++;
            clickMessage = "Great"; 

            if (correctGuesses > bestScore){
                bestScore =correctGuesses;
                this.setState({bestScore});
            }

            friends.sort(function(a, b){return 0.5 - Math.random()});
            this.setState({correctGuesses});
            this.setState({clickMessage});
            this.setState({friends});

        }else {
            // if user wins the game (after 12 cliks)

            clickedFriend[0].clicked = true;
            correctGuesses = 0;

            clickMessage="WOW! You got all 12! Play again?"
            bestScore = 12;
            this.setState({bestScore});

            for(let i=0; i< friends.length; i++){
                friends[i].clicked = false;
            }

            friends.sort(function(a, b){return 0.5 - Math.random()});
            this.setState({correctGuesses});
            this.setState({clickMessage});
            this.setState({friends});
        }
    }

    render(){
        return(
            <>
            <Navbar message = {this.state.clickMessage} score = {this.state.correctGuesses} bestScore = {this.state.bestScore} />
                <Header/>
                <Wrapper>
                    {this.state.friends.map(friend =>(
                        <Card
                        setClicked = {this.setClicked}
                        id = {friend.id} 
                        key = {friend.id}
                        image={friend.image}
                        />
                    ))}
                </Wrapper>
            </>
        )
    }

}

export default App;
