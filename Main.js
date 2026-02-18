const Voiture = require("./Voiture.js");
const Pilote = require("./Pilote.js");
const Course = require("./Course.js");

// Création voitures
let v1 = new Voiture("Ferrari", "F8");
let v2 = new Voiture("Porsche", "911");
let v3 = new Voiture("Tesla", "Model S");

// Création pilotes
let p1 = new Pilote("Alice", 25);
let p2 = new Pilote("Bob", 30);
let p3 = new Pilote("Charlie", 22);

// Création courses
let c1 = new Course(v1, p1);
let c2 = new Course(v2, p2);
let c3 = new Course(v3, p3);

let courses = [c1, c2, c3];

// Générer vitesse et temps aléatoire
for (let c of courses) {
    c.genererVitesse(80, 300);
    c.genererTemps(50, 120); // minutes
    c.afficherCourse();
    c.categorie();
}

// 🔹 Calculer le classement (le plus rapide = premier)
let classement = courses.slice(); // copie du tableau

// Tri simple avec if/else pour trouver 1er et 2ème place
let premier = classement[0];
let deuxieme = classement[1];
let troisieme = classement[2];

if (deuxieme.vitesse > premier.vitesse) {
    let temp = premier;
    premier = deuxieme;
    deuxieme = temp;
}

if (troisieme.vitesse > premier.vitesse) {
    let temp = premier;
    premier = troisieme;
    troisieme = temp;
}

if (troisieme.vitesse > deuxieme.vitesse) {
    let temp = deuxieme;
    deuxieme = troisieme;
    troisieme = temp;
}

console.log("\n🏆 Classement final :");
console.log(`1ère place : ${premier.pilote.nom} avec ${premier.voiture.marque} (${premier.vitesse} km/h)`);
console.log(`2ème place : ${deuxieme.pilote.nom} avec ${deuxieme.voiture.marque} (${deuxieme.vitesse} km/h)`);
console.log(`3ème place : ${troisieme.pilote.nom} avec ${troisieme.voiture.marque} (${troisieme.vitesse} km/h)`);
