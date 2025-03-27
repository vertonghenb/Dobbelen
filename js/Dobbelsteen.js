export default class Dobbelsteen {
    #aantalOgen = 1;

    get aantalOgen() {
        return this.#aantalOgen;
    }

    static #getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }

    rol() {
        this.#aantalOgen = Dobbelsteen.#getRandomIntInclusive(1, 6);
    }

}