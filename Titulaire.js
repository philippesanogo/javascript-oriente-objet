/**
 * Création d'une class Titulaire
 */

class Titulaire {
    /**
     * Titulaire de compte banquaire
     * @param {string} nom 
     * @param {string} prenom 
     */
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    afficheTitulaireInfos() { 
        console.log(`Le titualire du compte, s'appelle ${this.prenom} ${this.nom}`);
    }
}