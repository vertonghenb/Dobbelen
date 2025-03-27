import Speler from "./Speler.js";

export default class AfrikaansDobbelen {
    #speler;

    constructor() {
        this.#speler = new Speler('Kirikou')

        document.getElementById('play').onclick = () => {
            this.#speler.speel();
            this.#toHtml();
        }
        this.#toHtml();
    }

    #toHtml() {
        const { naam, score, dobbelstenen } = this.#speler;
        for (let index = 0; index < Speler.aantalDobbelstenen; index++) {
            const aantal = dobbelstenen[index].aantalOgen;
            document.getElementById(index + 1).src = `images/Dice${aantal}.png`;
        }
        document.getElementById('speler').innerText = `Naam: ${naam}`
        document.getElementById('score').innerText = `Score: ${score}`
    }
}




















/***************************************************************************************** */
/* onderstaand stukje code heb je pas in de laatste stap van de oefening nodig (zie opgave) */
/***************************************************************************************** */
// if (document.getElementById("play").value === "Rol dobbelstenen") {
//   document.getElementById("play").value = "Volgende speler";
//   document.getElementById("play").onclick = () => {
//     this.#spel.bepaalVolgendeSpeler();
//     this.toHtml();
//   };
// } else {
//   document.getElementById("play").value = "Rol dobbelstenen";
//   document.getElementById("play").onclick = () => {
//     this.#spel.speel();
//     this.toHtml();
//   };
// }