// Card[]
import { cards } from "../../assets/data/cardsArray";
import { cleanDeck } from "../../utils/deck.utils";
import { create } from 'zustand';
import { fitAces3, sevenTeenRule } from "../../utils/hand.utils";
import { getPoints } from '../../utils/hand.utils';
import { printGameResult } from '../../utils/game-result';
import type { Card } from '../../types/card';
import { getRandomCard } from "../../utils/card.utils";

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
    increaseComputerPoints: () => void,
    increaseGamerPoints: () => void,
    showComputerCards:() => void,
    showGameResult:() => void,
    updateDeck: (newCard: Card) => void,
    getRandomCards: () => void,
    dealCard: (to: 'gamer' | 'computer') => void
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

    getRandomCards: () => set((state) => sevenTeenRule([...state.computerHand], [...state.deck])),
    dealCard: (to: 'gamer' | 'computer') => set((state) => { const card = getRandomCard(state.deck); const deck = cleanDeck(card, state.deck); return to === 'gamer' ? { gamerHand: [...state.gamerHand, card], deck } : { computerHand: [...state.computerHand, card], deck }; }),
    addCardToComputerHand: (newCard: Card) => set((state) => ({ computerHand: [...state.computerHand, newCard]})),
    addCardToGamerHand: (newCard: Card) => set((state) => ({ gamerHand: [...state.gamerHand, newCard] })),
    feedRandomCards : (newCard: Card) => set((state) => ({ randomCards: [...state.randomCards, newCard] })),
    increaseComputerPoints: () => set((state) => ({ computerPoints: getPoints(fitAces3([...state.computerHand]))})),
    increaseGamerPoints: () => set((state) => ({ gamerPoints: getPoints(fitAces3([...state.gamerHand]))})),
    showComputerCards: () => set(() => ({ isShowingFullCards: true })),
    showGameResult: () => set((state) => ({ isGameOver: printGameResult(getPoints(fitAces3([...state.gamerHand])), getPoints(fitAces3([...state.computerHand])), [...state.gamerHand].length , [...state.computerHand].length )})),
    updateDeck: (newCard: Card) => set((state) => ({ deck: cleanDeck(newCard, state.deck)})),

}))


