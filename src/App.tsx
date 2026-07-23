import "./App.css";

import { useHandStore } from "./stores";
import { getRandomCard } from "./utils/card.utils";
import { Card } from "./components/Card";
import { useState } from "react";
import { printGameResult } from "./utils/game-result";

function App() {

  const [isUsed, setIsUsed] = useState(false);
  const [isInactive, setIsInactive] = useState(false);
  
  const isGameOver = useHandStore( state => state.isGameOver);
  const showGameResult = useHandStore( state => state.showGameResult);
  
  const isShowingFullCards = useHandStore( state => state.isShowingFullCards);
  const showComputerCards = useHandStore(state => state.showComputerCards);

  const deck = useHandStore(state => state.deck);
  const updateDeck = useHandStore(state => state.updateDeck)

  const card  = getRandomCard(deck);
  const card2 = getRandomCard(deck);

  const CCard1 = getRandomCard(deck);
  const CCard2 = getRandomCard(deck);

  const gamerHand = useHandStore( state => state.gamerHand);
  const addCardToGamerHand = useHandStore(state => state.addCardToGamerHand);
 
  const computerHand = useHandStore( state => state.computerHand);
  const addCardToComputerHand = useHandStore(state => state.addCardToComputerHand);

  const gamerPoints = useHandStore(state => state.gamerPoints);
  const increaseGamerPoints = useHandStore(state => state.increaseGamerPoints);

  const computerPoints = useHandStore(state => state.computerPoints);
  const increaseComputerPoints = useHandStore(state => state.increaseComputerPoints);

  const askForAnotherCard = () => {
    // Gamer
    addCardToGamerHand(card);
    increaseGamerPoints(card);
    updateDeck(card);

    
  }

  const startGame = () => {
    setIsUsed(true);
    //  Gamer
    addCardToGamerHand(card);
    updateDeck(card);
    increaseGamerPoints(card);

    addCardToGamerHand(card2);
    updateDeck(card2);
    increaseGamerPoints(card2);

    // Computer
    addCardToComputerHand(CCard1);
    updateDeck(CCard1);
    increaseComputerPoints(CCard1);

    addCardToComputerHand(CCard2);
    updateDeck(CCard2);
    increaseComputerPoints(CCard2);

    
  }

  const getRandomCards = useHandStore( state => state.getRandomCards)

  // End the game
  const stop = () => {
    showComputerCards();
    
    setIsInactive(true);
    getRandomCards();
    increaseComputerPoints(card);
    showGameResult();

    updateDeck(card);
  }

  // Start a New Game
  const newGame = () => window.location.reload();

  return (
<>

  <div className="grid grid-cols-1 gap-4 p-4 md:p-10">
    
    <div className="rounded-lg grid grid-cols-1 p-5">
      <h1 className="text-center text-4xl font-bold">Blackjack</h1>
    </div>

  
    <div className="rounded-lg flex flex-wrap justify-center items-center p-4 gap-4">
      
      <button id="start-game" className="border rounded-lg p-3 cursor-pointer" onClick={startGame} disabled={isUsed}>Start Game</button>
      <button id="get-card" className="border rounded-lg p-3 cursor-pointer" onClick={askForAnotherCard} disabled={isInactive}>Ask for another card</button>
      <button id="stop-game" className="border rounded-lg p-3 cursor-pointer" onClick={stop}>Stop</button>
      <button id="new-game" className="border rounded-lg p-3 cursor-pointer" onClick={newGame} >New Game</button>
  
    </div>


    <div className="rounded-lg grid grid-cols-1 lg:grid-cols-2 grid-rows-[auto_1fr] gap-4 p-4 min-h-[650px] lg:h-[80vh]">
     

      <div id="game-result" className="border rounded-lg p-6 grid-cols-1 lg:col-span-2">
        <p className="text-center font-semibold">{ (gamerPoints >= 21 || computerPoints >= 21) ? printGameResult(gamerPoints, computerPoints, gamerHand.length, computerHand.length) : isGameOver }</p>
      </div>
      
      <div id="computer-frame" className="border rounded-lg p-4 grid grid-rows-6 gap-4 min-h-[300px]">
  
        <div id="gamer-board" className="border rounded-lg p-2 row-span-1 grid grid-cols-2 gap-4">
          <div  className="inner-board border rounded-lg p-2 flex items-center">
            <p className="font-medium">Jugador</p>
          </div>
          <div className="inner-board border rounded-lg p-2 flex items-center justify-end">
            <p>Gamer Points: { gamerPoints }</p>
            
          </div>
        </div>


        <div id="gamer-screen" className="border rounded-lg p-4 row-span-5 flex items-center justify-left">
          
          {gamerHand.map( item => 
            <Card key={item.id} src={item.imagePath} />)
          }
        </div>
      </div>

      <div id="computer-frame" className="border rounded-lg p-4 grid grid-rows-6 gap-4 min-h-[300px]">

        <div id="computer-board" className="border rounded-lg p-2 row-span-1 grid grid-cols-2 gap-4">
          <div className="inner-board border rounded-lg p-2 flex items-left">
            <p className="font-medium">Computer</p>
          </div>
          <div className="inner-board border rounded-lg p-2 flex items-center justify-end">
            <p>Computer Points: {(isShowingFullCards || gamerPoints >= 21 || computerPoints >= 21) ? computerPoints : "¿?"}</p>
          </div>
        </div>


        <div id="computer-screen" className="border rounded-lg p-4 row-span-5 flex items-center justify-left">


        { (isShowingFullCards || gamerPoints >= 21 || computerPoints >= 21) ? 
        computerHand.map( item => <Card key={item.id} src={item.imagePath} />) : 
        
        <Card key={computerHand[0]?.id} src={computerHand[0]?.imagePath} />
        
        } 
        </div>
      </div>

    </div>

    {/* <div className="border rounded-lg grid grid-cols-1 p-5">
      <h1 className="text-center">Footer</h1>
    </div> */}
  </div>
</>
  );
}

export default App;
