/**
 * Created by Bjatta on 20.04.2017.
 */
((bankNotes,coins) => {
    let bankNotesString = '';
    let coinsString = '';

    switch (bankNotes%10){
        case 1: bankNotesString = ' рубль '; break;
        case 2:
        case 3:
        case 4: bankNotesString = ' рубля '; break;
        default: bankNotesString = ' рублей ';
    }
    switch (coins%10){
        case 1: coinsString = ' копейка '; break;
        case 2:
        case 3:
        case 4: coinsString = ' копейки '; break;
        default: coinsString = ' копеeк ';
    }
    console.log(
        ((bankNotes)?bankNotes+bankNotesString:'')
        +((coins)?coins+coinsString:''));
})
(Math.round(Math.random()*100),
 Math.round(Math.random()*100)
);