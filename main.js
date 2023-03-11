/*const recupIMC = prompt('Mon IMC:');
const imc = recupIMC;
if(imc < 18.5 ){
    console.log('imc, Insuffisance pondérale');
}else if(imc >= 18.5 && imc <=25){
    console.log('corpulence');
}else if(imc < 25 && imc <= 30){
    console.log('surpoids');
}else if(imc < 30 && imc <=35){
    console.log('obésité modérée');
}else if(imc < 35 && imc <= 40){
    console.log('Obésité sévère');
}else
{
    console.log('démarer un régime');
}*/

/*const nbr1 = 5;
const nbr2 = 2;
const operator = '+';
console.log(resp);

if(operator == '+'){
    const resp = nbr1 + nbr2;
    console.log(resp);
} else{
    const resp = nbr1 - nbr2;
    console.log(resp);
}
    

Resultat = 0;
   if(operator === '+'){
    resultat = nbr1 + nbr2;
   } 
if(operator === '/'){
    resultat =nbr1 / nbr2;
}
if(operator === '*'){
    resultat = nbr1 * nbr2;
}
if(operator === '-'){
    resultat = nbr1 - nbr2;
}

console.log('Resultat : ', resultat);*/

// EXERCE 

    // Moyenne élève
    //const note = [1,4,6,7];
    // Faire un carrée
    
/*for (const notes of note){
    console.log(note);
    let i = 0;
    i++;
    if(i = note.length)
    i/3;
}*/


/*let carre = '';
    for(let i = 0; i < nbr; i++) {
        console.log('i', i);
        for(let j = 0; j < nbr; j++) {
           console.log(j)
            carre += '*';
        }
        carre += '\n';
    }
    console.log(carre);*/

    //const nbr = 4;
   // PETIT EXERICES 

/*const eleves = [
    {
        name: 'Bernard',
        notes: [1, 2, 3, 4]
    },
    {
        name: 'Chloé',
        notes: [14, 12, 9, 4]
    },
    {
        name: 'Luc',
        notes: [17, 12, 14, 15]
    }
]

//Faire une fonction Moyenne
function moyenneEleve(notes){
    smm = 0;
    for (let note of notes){
        console.log(note);
        smm = smm + note;
       
    }
    return smm /notes.length;
}
for(let i in eleves) {
    console.log(moyenneEleve(eleves[i]['notes']));}
//Faire une fonction qui récupère le nom et la note de la personne



//Récupérer la liste des eleves avec leur nom et leur note
function recupEleve(nom, moyenne){

}*/

/*class Pokemon{
    constructor(nom, attaque, vie,  type){
        this.nom = nom;
        this.attaque = attaque;
        this.vie = vie;
        this.type = type;
    }
    get fullName() {
        return this.nom,this.type;
    }
       attaquePokemone () {
        let i = 0;
        if( i < this.vie){    
            let pv = this.vie-this.attaque;
            return pv;       
        }

    }
       
}
const Pokemon1 = new Pokemon('Carapuse', 10, 100, 'eau');
const Pokemon2 = new Pokemon('Salameche', 5, 100, 'feu');
Pokemon2.attaquePokemone(Pokemon1);
console.log(Pokemon1.vie);*/

//fonction (ucfirst) 1ère lettre en majuscule
/*const mot = 'koutsotsa chris';
function ucfirst(world){
    return world[0].toUpperCase()+world.substring(1, ucfirst[length-1]);
}
console.log(ucfirst(mot));
        //Créer une fonction (capitalize) qui va faire :1ère lettre de chaque mot en Majuscule
    function capitalize(str){
        const v = str.split(' ');
        console.log(v.map(aze => {
            return ucfirst(aze)
        }).join(' '));
    }
capitalize('bonjour monde');

       // Créer une fonction palindrome qui va faire :
        //kayak = kayak prend un nom en entrée et vérifie si c’est un palindrome
        function palindrome(str){
            //console.log(str.split());
            //console.log(str.split(''));
            //console.log(str.split('').reverse());
            console.log(str.split('').reverse().join());
            console.log(str.split('').reverse().join(''));
            if(str.split('').reverse().join('') === str){
                console.log(str + " :oui,c'est un palindrome");
            }else{
                console.log(str + " :non,ce n'est pas un palindrome");
            }
        }
        palindrome('kayak');

        //Créer une fonction (reverse_word) qui va faire :
        //Inverser la position des mots d’une phrase 
            function reverse_word(str){
                    return str.split(' ').reverse().join(' ');
            }
            console.log(reverse_word('hello world'));

            //Créer une fonction (verlan) qui va faire :
            //Inverser chaque mot d’une phrase
            function verlan(str){
                    const r = str.split(' ');
                    return r.map(wor => wor.split('').reverse().join('')).join(' ');
            }
            console.log(verlan('hello world'));*/

            console.log(window);