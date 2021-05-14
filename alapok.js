//Példák

var a = 1;
var b = 2;
var c;
c = a + b;
alert(c);

var ageOfGyula = 16;
if (ageOfGyula < 16) {
    alert('Gyula nem vezethet!');
} else if (ageOfGyula == 16) {
    alert('Gyula már majdnem vezethet!');
} else {
    alert('Gyula vezethet!');
}

var x = 'Gyuri';
switch(x){
    case 'Rudi':
        alert('Rudi!');
        break;
    case 'Monika':
        alert('Monika!');
        break;
    default:
        alert('Semmi sem igaz ebből!');
}

var fruits = ['grape', 'apple', 'banana'];
fruits.sort();
 alert(fruits[3]); 
 alert(fruits[0]);
 alert(fruits);

var j = 17;
var k = 17;
// j == k ->true;
// j === k ->true;
var elso = '18';
var masodik = elso;
// elso == masodik ->true;
// elso === masodik ->true;

var tomb1 = ['alma', 'körte'];
var tomb2 = ['alma', 'körte'];
// tomb1 == tomb2 ->false;
// tomb1 === tomb2 ->false;
var tomb3 = ['alma', 'körte'];
var tomb4 = tomb3;
// tomb3 == tomb4 ->true
// tomb3 === tomb4 ->true

var pelda = 0;
var pelda3 = 0;
var pelda1 = pelda++; // pelda = 1; pelda1 = 0
//alert(pelda + ' ' + pelda1);
var pelda2 = ++pelda3; // pelda3 = 1; pelda2 = 1
alert(pelda3 + ' ' + pelda2);

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
alert(result);

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

var i = 2;
for(i = 0; i < 3; i++){
    //belül az i nulla lesz, mert helyi változóként létre hoztuk
}
for(j = 0; j < 3; j++){
    //hozzáfér a külső i-hez de kint nem férünk hozzá a j-hez
}
