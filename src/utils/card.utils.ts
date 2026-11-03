import type { Card } from "../types/card";

const random = (deck: Card[]) => Math.floor(Math.random() * deck.length);
const getRandomCard = (deck: Card[]) => deck[random(deck)];

export {
    getRandomCard,
    random,
}