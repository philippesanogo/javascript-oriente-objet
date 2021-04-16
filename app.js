/**
 * Création d'instances de la class Titulaire
 * Pour utiliser la class Titutlaire, je lie le fichier Titulaire.js dans index.html, au-dessus de app.js.
 */

// instances de la class Titulaire
let titulaire1 = new Titulaire("Shade", "Tinem");
console.log(titulaire1);

let titulaire2 = new Titulaire("M.", "Philou");
console.log(titulaire2);

let titulaire3 = new Titulaire("Jean", "Talu");
console.log(titulaire3);

// utilise la methode créee dans le constructeur de la class Titulaire
titulaire1.afficheTitulaireInfos();
titulaire2.afficheTitulaireInfos();


// instance de la class Compte
let compte1 = new Compte(titulaire1, 500);
console.log(compte1);


// exercice 1: créer une methode qui permet de crediter le compte d'un montant entré par l'utilisateur
console.log(`
exercice 1:`);
compte1.crediter(250);
console.log(compte1);

// exercice 2: créer une methode qui permet de débiter le compte d'un montant retirer par l'utilisateur
console.log(`
exercice 2:`);
compte1.debiter(450);
console.log(compte1);
console.log(`Le solde restant: ${compte1.solde}€`);