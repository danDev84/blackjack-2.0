import type { Card } from "../types/card";

const cleanDeck = (outGoingCard: Card, deck: Card[]) => deck?.filter(item => item.id !== outGoingCard.id);
const hasBeenRemoved = (outGoingCard: Card, deck: Card[]) => console.log(!deck.some(item => item.id == outGoingCard.id));

export {
    cleanDeck,
    hasBeenRemoved,
}