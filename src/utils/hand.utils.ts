
// Functions
import { getRandomCard } from "./card.utils";
import { cleanDeck } from "./deck.utils";

// Types
import type { Card } from "../types/card";

// Verifica si la MANO (JUGADOR o MAQUINA) tiene al menos un ACE
// const hasAtLeastOneAce = (hand: Card[]) => {
//   let count = 0;
//   let bool = false;
//   for (const card of hand) {
//     if (card.name.indexOf("A") > -1) count++;
//   }
//   if (count > 0) bool = true;
//   return bool;
// };

// Determina si la SUMA de la mano es mayor a 21
const isSumGreaterThan21 = (hand: Card[]) => {
  let sum = 0;
  let bool = false;
  for (const card of hand) {
    sum += card.value;
  }
  if (sum > 21) bool = true;
  return bool;
};

// Obtiene la SUMA de la mano
export const getPoints = (hand: Card[]): number => {
  let sum = 0;
  for (const card of hand) {
    sum += card.value;
  }
  return sum;
};




export const fitAces3 = (hand: Card[]) => {

  let mapped = [...hand];

  while(isSumGreaterThan21(mapped)) {
    const index = mapped.findIndex(card => card.value === 11);
    if (index === -1) break;
    mapped = mapped.map((card, i) => (i === index) ? {...card, value: 1} : card);
}
return mapped;
}





// Get Cards functions

export const getGamerTwoCards = (hand: Card[], deck: Card[], points: number) => {
 
  for (let i = 0; i < 2; i++) {
    const card = getRandomCard(deck);
    hand.push(card);
    // fitAces(hand);
    points = getPoints(hand);
    cleanDeck(card, deck);
  }

  const numberOfCards = hand.length;

  return { points, numberOfCards, hand };
};

export const getAnotherCard = (hand: Card[], deck: Card[], points: number) => {

  const card = getRandomCard(deck);
  hand.push(card);
  // fitAces(hand);
  points = getPoints(hand);
  cleanDeck(card, deck);

  const numberOfCards = hand.length;

  return { hand, points, numberOfCards };
};

export const getCroupierTwoCards = (hand: Card[], deck: Card[], points: number) => {
  

  for (let i = 0; i < 2; i++) {
    const card = getRandomCard(deck);
    hand.push(card);
    // fitAces(hand);
    points = getPoints(hand);
    cleanDeck(card, deck);
  }

  const numberOfCards = hand.length;
  const firstCardPoints = hand[0].value;
  const firstCard = hand[0];

  return { points, numberOfCards, hand, firstCard, firstCardPoints};
};

export const getMoreCardsToCroupier = (hand: Card[], deck: Card[], points: number) => {
  while (points < 17) {
    const card = getRandomCard(deck);
    // fitAces(hand);
    points = getPoints(hand);
    hand.push(card);
    cleanDeck(card, deck);
  }
  const numberOfCards = hand.length;

  return { points, numberOfCards, hand };
};





























  export const sevenTeenRule = (cHand: Card[], deck: Card[], cPoints: number): Card[] => {
  while (cPoints < 17) {
    const card = getRandomCard(deck);
   // cHand.push(card);
  cHand = [...cHand, card]


  cPoints = getPoints(fitAces3(cHand));

  // cleanDeck(card, deck);
  }
  console.log(cHand);
  return cHand;
};





