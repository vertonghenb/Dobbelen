import Speler from "./Speler.js";
import Spel from './Spel.js';

export default class AfrikaansDobbelen {
    #spel;


    #geefSpelers() {
        const aantal = prompt('Geef het aantal spelers');
        const spelers = [];

        for (let index = 1; index <= aantal; index++) {
            const naam = prompt(`naam van speler ${index}`);
            spelers.push(naam);
        }
        return spelers;
    }

    constructor() {
        this.#spel = new Spel(this.#geefSpelers());

        document.getElementById('play').onclick = () => {
            this.#spel.speel();
            this.#toHtml();
        }
        document.getElementById('scorebord').onclick = () => {
            alert(this.#spel.scoreOverzicht);
        }
        this.#toHtml();
    }

    #toHtml() {
        const { naam, score, dobbelstenen } = this.#spel.spelerAanZet;
        for (let index = 0; index < Speler.aantalDobbelstenen; index++) {
            const aantal = dobbelstenen[index].aantalOgen;
            document.getElementById(index + 1).src = `images/Dice${aantal}.png`;
        }
        document.getElementById('speler').innerText = `Speler aan zet: ${naam}`
        document.getElementById('score').innerText = `Score: ${score}`

        if (this.#spel.heeftWinaar) {
            alert(`${naam} u heeft gewonnen!`);
            document.getElementById('play').disabled = true;
        } else {
            if (document.getElementById("play").value === "Rol dobbelstenen") {
                document.getElementById("play").value = "Volgende speler";
                document.getElementById("play").onclick = () => {
                    this.#spel.bepaalVolgendeSpeler();
                    this.#toHtml();
                };
            } else {
                document.getElementById("play").value = "Rol dobbelstenen";
                document.getElementById("play").onclick = () => {
                    this.#spel.speel();
                    this.#toHtml();
                };
            }
        }
    }
}




















/***************************************************************************************** */
/* onderstaand stukje code heb je pas in de laatste stap van de oefening nodig (zie opgave) */
/***************************************************************************************** */
