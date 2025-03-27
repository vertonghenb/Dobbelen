import Speler from './Speler.js'

export default class Spel {
    #spelers = [];
    #spelerAanZet;

    constructor(spelerNamen) {
        for (const naam of spelerNamen) {
            this.#spelers.push(new Speler(naam))
        }
        this.#spelerAanZet = this.#spelers[0];
    }

    get spelerAanZet() {
        return this.#spelerAanZet;
    }

    get aantalSpelers() {
        return this.#spelers.length;
    }
    get heeftWinaar() {
        return this.#spelers.some(x => x.score >= 1000);
    }
    get scoreOverzicht() {
        let overzicht = '';

        for (const s of this.#spelers) {
            overzicht += `${s.naam} : ${s.score}\n`;
        }
        return overzicht;
    }
    speel() {
        if (this.heeftWinaar)
            return;

        this.#spelerAanZet.speel();
    }
    bepaalVolgendeSpeler() {
        if (this.heeftWinaar)
            return;

        const indexNext = (this.#spelers.indexOf(this.#spelerAanZet) + 1) % this.#spelers.length;
        this.#spelerAanZet = this.#spelers[indexNext];
    }
}