// créer objet voiture

const voiture = {
    marque: "Ford",
    annee: 2009,
    couleur: "Jaune",
    rouler: () => {
        console.log("roule");
    }
}
console.log(`La ${voiture.marque} vite`);