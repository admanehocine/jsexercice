class Voiture {
    constructor(marque, modele) {
        this.marque = marque;
        this.modele = modele;
    }

    info() {
        console.log(`Voiture : ${this.marque} ${this.modele}`);
    }
}

module.exports = Voiture;
