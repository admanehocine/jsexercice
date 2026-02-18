class Course {
    constructor(voiture, pilote) {
        this.voiture = voiture;
        this.pilote = pilote;
        this.vitesse = 0; // km/h
        this.temps = 0;   // durée de course en minutes
    }

    // Générer vitesse aléatoire entre min et max
    genererVitesse(min, max) {
        this.vitesse = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Générer durée aléatoire de la course
    genererTemps(min, max) {
        this.temps = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    categorie() {
        switch (true) {
            case this.vitesse < 100:
                console.log(`${this.pilote.nom} avec ${this.voiture.marque} : Lent`);
                break;
            case this.vitesse < 200:
                console.log(`${this.pilote.nom} avec ${this.voiture.marque} : Moyen`);
                break;
            default:
                console.log(`${this.pilote.nom} avec ${this.voiture.marque} : Rapide`);
        }
    }

    afficherCourse() {
        console.log(`${this.pilote.nom} roule à ${this.vitesse} km/h avec ${this.voiture.marque} (temps: ${this.temps} min)`);
    }
}

module.exports = Course;
