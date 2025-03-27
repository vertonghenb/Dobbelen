import Speler from './Speler.js'

export default class Spel {
    #spelers = [];
    #spelerAanZet = 0;

    constructor(spelerNamen) {
        for (const naam of spelerNamen) {
            this.#spelers.push(new Speler(naam))
        }
    }

    get spelerAanZet() {
        return this.#spelerAanZet;
    }

    get aantalSpelers() {
        return this.#spelers.length;
    }
    get heeftWinaar() {
        return this.#spelers.some(x => x.score >= 10000);
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

        this.#spelerAanZet = this.#spelers.indexOf(this.#spelerAanZet) + 1 % aantalSpelers;
    }
}