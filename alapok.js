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
