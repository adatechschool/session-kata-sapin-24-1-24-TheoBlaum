/* 1.1 */
/* function afficherEtoiles(n){
    console.log("*".repeat(n));
}

afficherEtoiles(2);
afficherEtoiles(5); */

/* 1.2 */
/* function afficherRectangle(hauteur, largeur){
    for(let i = 0; i < hauteur; i++){   
        console.log("*".repeat(largeur));
    }
}

afficherRectangle(5, 5); */

/* 1.3 */
/* function afficherTriangleDroite(n){
    for(let i = 0; i < n; i++){
        console.log("*".repeat(i)+"\\");
    }
}

afficherTriangleDroite(5);

/* 1.4 */
/* function afficherTriangleGauche(n){
    for(let i = 0; i < n; i++){
        console.log(" ".repeat(n-i)+"/"+"*".repeat(i));
    }
}

afficherTriangleGauche(5); */

/* 1.5 */
/* function afficherPointeSapin(n){
    console.log(" ".repeat(n) + "+");
    for(let i = 0; i < n; i++){
        console.log(" ".repeat(n-i-1)+"/"+"*".repeat(i)+"|"+"*".repeat(i)+"\\");
    }
}

afficherPointeSapin(1);
afficherPointeSapin(2);
afficherPointeSapin(3); */

/* 2.1 */
/* function afficherEtage(hauteur, pointe_offset) {
    for(let i = pointe_offset; i < hauteur + pointe_offset; i++){
        let espaces = " ".repeat(Math.max(0, 2 - (i - pointe_offset)));
        console.log(espaces + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\");
    }
}

afficherEtage(3, 0);
afficherEtage(3, 1);
afficherEtage(3, 2); */

/* 2.2 */
/* function afficherEtage(hauteur, pointe_offset, espacement) {
    for(let i = pointe_offset; i < hauteur + pointe_offset; i++){
        let espacesAlignement = " ".repeat(espacement);
        let espacesTriangle = " ".repeat(Math.max(0, 2 - (i - pointe_offset)));
        console.log(espacesAlignement + espacesTriangle + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\");
    }
}

afficherEtage(3, 0, 3);
afficherEtage(3, 1, 2);
afficherEtage(3, 2, 1); */

/* Peut-on observer un pattern entre l’évolution de la valeur des variables espacement et pointe_offset ?
On observe que lorsque la valeur de pointe_offset augmente la valeur de espacement diminue proportionnellement. */

/* 2.3 */
function afficherSapin(etages, hauteur_etage) {
    for(let etage = 0; etage < etages; etage++) {
        for(let ligne = etage; ligne < hauteur_etage + etage; ligne++) {
            let espacesAlignement = " ".repeat(etages - etage);
            let espacesTriangle = " ".repeat(Math.max(0, 2 - (ligne - etage)));
            console.log(espacesAlignement + espacesTriangle + "/" + "*".repeat(ligne) + "|" + "*".repeat(ligne) + "\\");
        }
    }
}

afficherSapin(3,3);
/* Les étages se décalent si la valeur de hauteur_etage dépasse 3 */