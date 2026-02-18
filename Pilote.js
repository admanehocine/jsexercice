class Pilote {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    presentation() {
        console.log(`Pilote : ${this.nom}, Age : ${this.age}`);
    }
}

module.exports = Pilote;
