class Compte {
    constructor(titulaire, montant = 0) {

        this.titulaire = titulaire;
        this.solde = montant;

    }

    /**
     * Créditer le compte
     * @param {number} montant 
     */
    crediter(montant) {
        this.solde += montant;
    }

    /**
     * Débiter le compte
     * @param {number} montant 
     */
    debiter(montant) {
        this.solde -= montant;
    }


    afficherSolde() {
        console.log(`Le solde restant est de : ${this.solde}€ (euros)`);
    }
}