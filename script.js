'use strict';

//Scrivi un programma che stampi i numeri da 1 a 100
//per i multipli di 3 stampi “Fizz” al posto del numero 
//per i multipli di 5 stampi Buzz.
//per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for(let i = 0; i < 100; i++) {

    //utilizzata una doppia condizione con modale
    //(simbolo percentuale -> divisione per n, ma stampa il resto)
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');

    //se condizione vera stampa Fizz
    } else if (i % 3 === 0) {
        console.log('Fizz');
    
    //se condizione vera stampa Buzz
    } else if (i % 5 === 0) {
        console.log('Buzz');

    //se condizione vera stampa stringa alternativa
    } else {
        console.log('Non è multiplo ne di 3 ne di 5')
    }
    
}