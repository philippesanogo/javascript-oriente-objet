class Compte {
    constructor(titulaire, montant = 0) {

        this.titulaire = titulaire;
        this.solde = montant;

    }

    crediter(montant) {
        this.solde += montant;
    }
}