import type { Card } from "../types/card.ts"

const random = (deck: Card[]) => Math.round(Math.random() * deck.length);
const getRandomCard = (deck: Card[]) => deck[random(deck) - 1];



export {
    getRandomCard,
    random,
}