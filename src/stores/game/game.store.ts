// Card[]
import { cards } from "../../assets/data/cardsArray";
import { cleanDeck } from "../../utils/deck.utils";
import { create } from 'zustand';
import { fitAces3 } from "../../utils/hand.utils";
import { getPoints } from '../../utils/hand.utils';
import { printGameResult } from '../../utils/game-result';
import type { Card } from '../../types/card';

import { sevenTeenRule } from "../../utils/hand.utils";




interface GameState {

    computerHand: Card[],
    computerPoints: number,
    deck: Card[],
    gamerHand: Card[],
    gamerPoints: number,
    isGameOver: string;
    isShowingFullCards: boolean;
    randomCards: Card[],

    addCardToComputerHand: (newCard: Card) => void,
    addCardToGamerHand: (newCard: Card) => void,
    feedRandomCards: (newCard: Card) => void,
    increaseComputerPoints: (newCard: Card) => void,
    increaseGamerPoints: (newCard: Card) => void,
    showComputerCards:() => void,
    showGameResult:() => void,
    updateDeck: (newCard: Card) => void,
    getRandomCards: () => void,
}

export const useHandStore = create<GameState>()((set) => ({

    computerHand: [],
    computerPoints: 0,
    deck: [...cards],
    gamerHand: [],
    gamerPoints: 0,
    isGameOver: "Game Result will appear here",
    isShowingFullCards: false,
    randomCards: [],

    getRandomCards: () => set((state) => ({ computerHand: sevenTeenRule([...state.computerHand], state.deck, getPoints(fitAces3([...state.computerHand])))})),
    addCardToComputerHand: (newCard: Card) => set((state) => ({ computerHand: [...state.computerHand, newCard]})),
    addCardToGamerHand: (newCard: Card) => set((state) => ({ gamerHand: [...state.gamerHand, newCard] })),
    feedRandomCards : (newCard: Card) => set((state) => ({ randomCards: [...state.randomCards, newCard] })),
    increaseComputerPoints: () => set((state) => ({ computerPoints: getPoints(fitAces3([...state.computerHand]))})),
    increaseGamerPoints: () => set((state) => ({ gamerPoints: getPoints(fitAces3([...state.gamerHand]))})),
    showComputerCards: () => set(() => ({ isShowingFullCards: true })),
    showGameResult: () => set((state) => ({ isGameOver: printGameResult(getPoints(fitAces3([...state.gamerHand])), getPoints(fitAces3([...state.computerHand])), [...state.gamerHand].length , [...state.computerHand].length )})),
    updateDeck: (newCard: Card) => set((state) => ({ deck: cleanDeck(newCard, state.deck)})),

}))


