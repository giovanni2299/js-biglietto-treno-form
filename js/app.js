// console.log('ciao mamma')

// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Modifichiamo la logica dell’esercizio di ieri in modo che i dati non arrivino da un prompt ma da un form che l’utente deve compilare.
// Usando esclusivamente due input: un input per i km e un input per l’età, e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. Cliccando sul bottone recuperate i valori delle input e calcolate il prezzo nello stesso modo che avete usato ieri.
// La risposta finale (o output) sarà anch’essa da scrivere in console.
// ATTENZIONE!!!!
// Non usate il tag form, altrimenti al click del bottone verrà inviato e verrà ricaricata la pagina e non vedrete funzionare il javascript
// MILESTONE 2:
// Solo una volta che il milestone 1
// sostituite l’input dell’età con una select dove l’utente potrà selezionare il tipo di sconto scegliendo tra queste 3 opzioni:
// nessuno (default)
// minorenne
// over 65
// Questo necessariamente vi porta a dover modificare le condizioni dell’if con cui andate a calcolare lo sconto.
// Infine stampate nella pagina tutte le informazioni di recap del viaggio:
// prezzo base del biglietto
// percentuale di sconto applicata
// prezzo totale
// MILESTONE 3
// Pensate alla grafica. abbellite il form e la ui della pagine e anche della stampa del biglietto.
// Potete usare bootstrap se volete ma siete liberi di usare tutta la vostra creatività.
// BONUS:
// aggiungete un input dove l’utente potrà inserire il nome del passeggero che verrà stampato insieme alle info di recap del biglietto
// Aggiungete la validazione dei dati, il calcolo dovrà essere eseguito solo se:
//  i km sono > 0 ed è un numero valido
// il nome del passeggero è diverso da stringa vuota
// Consigli
// ricordatevi di partire sempre dallo pseudocodice, questo vi evita di perdervi durante l’esecuzione dell’esercizio e di sapere sempre quello che state andando a fare
// usate i consolo log per fare debug e controllare di volta in volta che le cose funzionino
// Usate la documentazioni MDN per rivedere e approfondire il funzionamento di tutti i metodi e proprietà viste oggi in classe
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


//CHIEDERE AL PASSEGGERO IL PROPRIO NOMINATIVO/ETA
// let age = parseInt(prompt('write your age')); //number
// console.log('your age:',age); //number


//EVOLUZIONE NOMINATIVO


//EVOLUZIONE CHIEDERE L'ETA
const selectAgeRangeElement = document.getElementById('ageRange')
console.log(selectAgeRangeElement)




//CHIEDERE AL PASSEGGIERO DI IMPOSTARE IL NUMERO DI KM
// let KM = parseInt(prompt('write your distance')); //number
// console.log('distance to do in KM:',KM); //number


//Evoluzione




//PREZZOBASE
const prezzoBase = inputDistanceElement * 0.21;
// console.log('prezzo base:' ,prezzoBase)



//SUBMIT
const submitElement = document.getElementById('submit')
console.dir(submitElement)

submitElement.addEventListener('click' ,function(){
    //nome
    const inputNameElement = document.getElementById('name')
    console.log(inputNameElement)

    //km
    const inputDistanceElement = document.getElementById('distance')
    console.log(inputDistanceElement)

    //SCONTO
let discount = 0;

//SCONTO PER MINORENNI
if(selectAgeRangeElement < 18){
    //SE eta < 18
    //calcolo lo sconto del 20%
    discount = prezzoBase * 0.2;

}else if (selectAgeRangeElement > 65){
    //ALTRIMENTI SE eta > 65
    //calcolo lo sconto del 40%
    discount = prezzoBase * 0.4;
}
})










