# Blackjack 2.0

A browser-based Blackjack (21) game where the player competes against the computer, which acts as the dealer.

Built with **React + TypeScript**, **Zustand** for global state, and **Tailwind CSS** for styling.

This project was developed to strengthen the concepts covered in Fernando Herrera's JavaScript Moderno course. Rather than following the course's predefined solution, I took it as a challenge to test and push my programming skills further.

## How to play

1. Click **Start Game**: two cards are dealt to the player and two to the computer. Only one of the dealer's cards is visible.
2. Click **Ask for another card** to hit. Once you reach 21 or bust, you can't draw any more cards.
3. Click **Stop** to stand. The dealer reveals their cards and draws until reaching at least 17.
4. The result appears in the top panel.
5. Click **New Game** to start over.

### Implemented rules

- Number cards are worth their face value; J, Q and K are worth 10.
- An Ace is worth 11, or 1 if 11 would make the hand go over 21.
- The dealer stands on 17 or more.
- **Blackjack**: 21 with only two cards. It beats a 21 made with more cards.
- Going over 21 is a loss. If neither side busts, the higher score wins.
- Equal scores result in a tie (**Push / Tie**).

## Getting started

```bash
# Clone the repository
git clone <repository-url>
cd blackjack-2.0

# Install dependencies
npm install

# Start the development server
npm run dev
```

To create a production build:

```bash
npm run build
```

## Project structure

```
src/
├── assets/
│   ├── data/
│   │   ├── cardsArray.ts      # The 52-card deck
│   │   └── redBack.js         # Card back image
│   └── react.svg
├── components/
│   └── Card.tsx               # Card display component
├── stores/
│   ├── game/
│   │   └── game.store.ts      # Zustand store (hands, points, deck)
│   └── index.ts               # Store exports
├── types/                     # Type definitions (Card)
├── utils/
│   ├── card.utils.ts          # Draw a random card
│   ├── deck.utils.ts          # Remove cards from the deck
│   ├── game-result.ts         # Determines the game result
│   └── hand.utils.ts          # Points, Ace adjustment and the 17 rule
├── App.css
├── App.tsx                    # UI and button logic
├── index.css
└── main.tsx                   # Entry point
```

## Card images

Card images live in the `cartas/` folder and are loaded relative to the app's URL:
`${window.location.href}/cartas/<card-name>.png`

Each file is named after its card, for example `2c.png`, `10h.png`, `ks.png`, `as.png`.

The card images were taken from Fernando Herrera's JavaScript Moderno course.

## Author

Daniel Hazanow
