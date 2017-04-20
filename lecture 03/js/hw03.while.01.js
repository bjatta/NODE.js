/**
 * Created by Bjatta on 20.04.2017.
 */
(() => {
    let randomNumber = Math.round(Math.random()*10);
    let i = 0;
    let sum = randomNumber;
    console.log(i,randomNumber);
    while ((randomNumber != 0)&&(randomNumber != 10)) {
        randomNumber = Math.round(Math.random()*10);
        sum+=randomNumber
        i++;
        console.log(i,randomNumber);
    }
    console.log('total: ' + i +' times and value: '+ sum);
})();