class Guerrier {
    constructor(nom, attaque, precision, pv) {
        this.nom = nom;
        this.attaque = attaque;
        this.precision = precision;
        this.pv = pv; 
    }
    Precision() {
        const nbr = Math.random();
        return nbr < this.precision;
    }
    
    attaquer(adversaire) {
        if (this.Precision()) {
            adversaire.pv -= this.attaque;
            console.log(`${this.nom} attaque ${adversaire.nom} et lui inflige ${this.attaque} points de dégâts. ${adversaire.nom} a maintenant ${adversaire.pv} PV.`);
        } 
        else {
            console.log(`${this.nom} attaque ${adversaire.nom} mais ne le touche pas.`);
        }
    }
    estEnVie() {
        return this.pv > 0;
    }
}
let alexis = new Guerrier("Alexis", 10, 0.8, 100);
let max = new Guerrier("Max", 15, 0.6, 90);

console.log("Le combat commence");
console.log(`${alexis.nom}/ ${alexis.pv} PV VS ${max.nom}/${max.pv} PV`);

while (alexis.estEnVie() || max.estEnVie()) {
    alexis.attaquer(max);
    if (!max.estEnVie()) {
        console.log(`${alexis.nom} remporte le combat`);
        break;
    }
    max.attaquer(alexis);
    if (!alexis.estEnVie()) {
        console.log(`${max.nom} remporte le combat`);
        break;
    }
}
console.log("fin du combat");