import Dobbelsteen from "./Dobbelsteen.js";

export default class Speler {
    static #aantalDobbelstenen = 5;
    #naam;
    #score;
    #dobbelstenen = [];


    constructor(naam) {
        this.#naam = naam;
        this.#score = 0;
        for (let index = 0; index < Speler.#aantalDobbelstenen; index++) {
            this.#dobbelstenen.push(new Dobbelsteen());
        }
    }

    static get aantalDobbelstenen() {
        return Speler.#aantalDobbelstenen;
    }

    get naam() {
        return this.#naam;
    }
    get score() {
        return this.#score;
    }
    get dobbelstenen() {
        return this.#dobbelstenen;
    }

    speel() {
        for (const d of this.#dobbelstenen) {
            d.rol();
            if (d.aantalOgen === 1) {
                this.#score += 100;
            } else if (d.aantalOgen === 5) {
                this.#score += 50;
            }
        }
    }
}
