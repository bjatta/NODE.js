/**
 * Created by Bjatta on 16.04.2017.
 */
function SeriesSum(n){
    switch (n){
        case 0: return '0.00';
        case 1: return '1.00';
        case 2: return '1.25';
        default:
            var value = 1.25;
            for (var i=1; i<(n-1);i++) {
                value += 1/(4+(3*i))};
            return parseFloat(value).toFixed(2)+'';
    }
}


for (var i=1;i<75;i++) console.log(SeriesSum(i));

// next challenge
function findShort(s){
    return s.split(" ").sort((a,b)=>a.length-b.length)[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));

// next.challenge

function DNAStrand(dna){
    var newDNA = [];
    dna.split('')
        .forEach(function (letter){
            switch (letter.toUpperCase()){
                case 'A': newDNA.push('T');break;
                case 'T': newDNA.push('A');break;
                case 'C': newDNA.push('G');break;
                case 'G': newDNA.push('C');break;
            }
        })
    return newDNA.join('');
}

console.log(DNAStrand("AAAA"),"TTTT","String AAAA is");
console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
console.log(DNAStrand("GTAT"),"CATA","String GTAT is");

function divisors(integer) {
    var newArr = [];
    for (i=2;i<integer;i++){
        if (!(integer%i)) newArr.push(i);
    }
    if (newArr.length) return newArr;
    else return integer+' is prime';
};

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));