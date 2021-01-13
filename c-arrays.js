// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen in op.              // bijv. 2020, 2019, 2018 en 2017
// ==========================================
let jaartallen = [1956, 1978, 1981, 1987];
console.log(jaartallen);

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies in op.         // bijv. schaken, koekjes eten en muziek luisteren
// ==========================================
let myHobby = ["kleermaken", "dansen", "lezen"];
console.log(myHobby);
// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Log de waarde 3 uit de array in de terminal                                          // geeft 3
// ==========================================
let waardes = [3, 4, 5, 7, 2];
console.log(waardes[0]);

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje
// 4b. Log de waarde blauw uit de array in de terminal                                      // geeft blauw
// 4c. Log de waarde geel uit de array in de terminal                                       // geeft geel
// ==========================================
let color = ["groen", "geel", "rood", "paars", "blauw", "oranje"];
console.log(color[4]);
console.log(color[1]);


// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25
// 5b. Pas een van de items in de array aan zodat de cijferreeks netjes doorloopt
// 5c. Log de de array in de terminal                                                       // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================
let nummers = [21, 22, 23, 25, 25];
nummers[3] = 24;
console.log(nummers);

// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Verander daarna de waarde bladerdeeg in lasagne bladen
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================
let ingredienten = ["bladerdeeg", "knoflook", "spinazie"];
console.log(ingredienten);
ingredienten.length;
console.log(ingredienten.length);