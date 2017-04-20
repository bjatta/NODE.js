/**
 * Created by Bjatta on 20.04.2017.
 */
((n) => {
    let sum=1;
    let i = 1;
    let numbersArray =[];

    numbersArray.push(i);
    while (sum<n){
        i++;
        sum+=i;
        numbersArray.push(i);
    }
    console.log(i,sum,numbersArray);
})(Math.round(Math.random()*121));