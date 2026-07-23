 export const printGameResult = (a: number, b: number, x: number, y: number): string => {
    
    switch(true) {

        case (a > 21):
            return "You got more than 21 points; THE DEALER WON";

        case (b > 21):
            return "The dealer went over 21 points; YOU WON!";
        
        case (a === 21 && b !== 21 && x === 2):
            return "BLACKJACK: YOU WON!";

        case (b === 21 && a !== 21 && y === 2):
            return "BLACKJACK: THE DEALER WON";

        case (a === 21 && b !== 21 && x > 2):
            return "21 YOU WON!";

        case (b === 21 && a !== 21 && y > 2):
            return "21: THE DEALER WON";

        case ((a === 21 && b === 21) && (x === 2 && y === 2)):
            return "PUSH: TIE";

        case ((a === 21 && b === 21) && (x > 2 && y === 2)):
            return "BLACKJACK: THE DEALER WON";

        case ((a === 21 && b === 21) && (x === 2 && y > 2)):
            return "BLACKJACK: YOU WON!";
            
        case ((a < 21 && b < 21) && a > b):
            return "YOU WON! YOU SCORED MORE POINTS THAN THE DEALER";
            
        case ((a < 21 && b < 21) && a < b):
            return "THE DEALER WON";
        
        case ((a < 21 && b < 21) && a === b):
            return "TIE";
    
        default:
             return "UNFORESEEN CASE";
    }
 }
