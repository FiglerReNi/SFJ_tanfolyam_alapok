//2. video
/*
- memória (ez az  asztal teteje, ha újraindítjuk a gépet ez kiürül)
- merevlemez (itt van minden tárolva, ha vmi-vel dolgozunk innen kerül a memóriába)
- CPU (gépi kódot ért)
- fordító (ez fordítja gépi kódra a programot, minden programozási nyelvnek más-más fordítója van)
        1. szintaktikai elemzés (van-e elgépelés)
        2. szemantikai elemzés (kód tartalmát vizsgálja)
 */
//3.video
/*
változó:
    név: kötelező a létrehozásor
    érték: nem kötelező, de amíg nincs, a változó állapota undefined, viszont ha üres az értéke az már nem undefined, hanem null állapot,
           ami nem egyenlő a nullával.
    deklarál: változó létrehozása
    inicializálás: érték adás
    explicit: ha megadjuk az értéket már az elején pedig nem kötelező
*/
var a = 1;
var b = 2;
var c;
c = a + b;
//alert(c);
//4.video
/*
-number
-string
-boolean
*/
//5.video
var ageOfGyula = 16;
if (ageOfGyula < 16) {
//    alert('Gyula nem vezethet!');
} else if (ageOfGyula == 16) {
//    alert('Gyula már majdnem vezethet!');
} else {
//    alert('Gyula vezethet!');
}
//6.video
var x = 'Gyuri';
switch(x){
    case 'Rudi':
//        alert('Rudi!');
        break;
    case 'Monika':
//        alert('Monika!');
        break;
    default:
//        alert('Semmi sem igaz ebből!');
}
//7.video
var fruits = ['grape', 'apple', 'banana'];
fruits.sort();
// alert(fruits[3]); //undefined
// alert(fruits[0]);
// alert(fruits);
//8.video - 9.video
/*
primitivek: változók, kevés adat fér rájuk, ha egy változót egyenlővé teszünk egy másikkal az értéke és a típusa is true lesz
            mert lemásolja (undefined, null, szám, szöveg, boolean lehet a primitiv)
objektumok: pl.:tömb, a neve egy referencia, ami egy mutató a helyére vonatkozóan (utalás a valódi érték helyére)
            két azonos értékekkel rendelkező tomb érték és típus összehasonlítása is false lesz, mert más helyre mutat a nevük. Két különböző helyen élnek
            ha az egyiket egyenlővé teszem a másikkal akkor ezek true-t adnak, mert ugyanarra fognak mutatni
== összehasonlítás->érték
=== összehasonlítás -> érték + adattípus
 */
//primitivek
var j = 17;
var k = 17;
// j == k ->true;
// j === k ->true;
var elso = '18';
var masodik = elso;
// elso == masodik ->true;
// elso === masodik ->true;
//objektumok
var tomb1 = ['alma', 'körte'];
var tomb2 = ['alma', 'körte'];
// tomb1 == tomb2 ->false;
// tomb1 === tomb2 ->false;
var tomb3 = ['alma', 'körte'];
var tomb4 = tomb3;
// tomb3 == tomb4 ->true
// tomb3 === tomb4 ->true
//ha módosítok a tomb4-en, akkor a tomb3 is változik
//ha primitiveknél módosítok a masodik-on az elso nem fog változni
//10.video - 11.video - 12.video
/*
-while()
-do() while()
-for()
 */
//13.video
/*
Minden program kap egy bizonyos memóriát a teljes memóriából, amivel gazdálkodhat.
Memória túlcsordulás (stack overflow): pl ha végtelen ciklust csinálunk, elfogy a memóriánk
i++ -> előbb adja át az értéket és utána növeljük az értéket
++i -> egyből növel az értéken és utána adja át
 */
var pelda = 0;
var pelda3 = 0;
var pelda1 = pelda++; // pelda = 1; pelda1 = 0
//alert(pelda + ' ' + pelda1);
var pelda2 = ++pelda3; // pelda3 = 1; pelda2 = 1
//alert(pelda3 + ' ' + pelda2);
//14.video
/*
-metódusok
-függvények : van visszatérési értéke, olyan metódusok
 */
//15.video
/*
-paraméter -> kivülről
-attribútum/argumentum -> belülről
 */
//16.video - 17.video
var text = 'A kutya nagyon aranyos kutya.';
var toChange = 'kutya';
var newWord = 'macska';

function censor(text, toChange, newWord) {
    var toReturn = text;
    while(toReturn.includes(toChange)){
        toReturn = toReturn.replace(toChange, newWord) //első előfordulást cseréli
    }
    return toReturn;
}

var result = censor(text, toChange, newWord);
//alert(result);
//18.video
var osztaly = ['Laci', 'Gyula', 'Tomi', 'Gábor'];
function listaz(lista) {
    var vissza = '';
    for(i = 0; i < lista.length; i++){
        vissza = vissza + (i+1) + '. ' + lista[i] + '\n';
    }
    return vissza
}
var eredmeny = listaz(osztaly);
alert(eredmeny);
//21.video
/*
\ -> escape karakter
 */
var i = 2;
for(i = 0; i < 3; i++){
    //belül az i nulla lesz, mert helyi változóként létre hoztuk
}
for(j = 0; j < 3; j++){
    //hozzáfér a külső i-hez de kint nem férünk hozzá a j-hez
}
//22.video
/*
-operátorok
 */