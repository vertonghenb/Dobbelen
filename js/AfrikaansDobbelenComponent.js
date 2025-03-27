import Dobbelsteen from "./Dobbelsteen.js";

export default class AfrikaansDobbelen {
    #dobbelsteen;

    constructor() {
        this.#dobbelsteen = new Dobbelsteen();
        this.#toHtml();
    }

    #toHtml() {
        const imgElement = document.getElementById('1');
        imgElement.src = `images/Dice${this.#dobbelsteen.aantalOgen}.png`;
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