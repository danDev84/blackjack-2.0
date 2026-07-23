
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
    sum += card?.value;
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

export const getAnotherCard = (hand: Card[], deck: Card[], points: number) => {

  const card = getRandomCard(deck);
  hand.push(card);
  // fitAces(hand);
  points = getPoints(hand);
  cleanDeck(card, deck);

  const numberOfCards = hand.length;

  return { hand, points, numberOfCards };
};

  export const sevenTeenRule = (cHand: Card[], deck: Card[], cPoints: number): Card[] => {
  while (cPoints < 17) {
    const card = getRandomCard(deck);
  cHand = [...cHand, card] // cHand.push(card);
  cPoints = getPoints(fitAces3(cHand));
  }
  // console.log(cHand);
  return cHand;
};





