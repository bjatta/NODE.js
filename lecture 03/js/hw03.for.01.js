/**
 * Created by Bjatta on 20.04.2017.
 */
((n) => {
    let sum = 0;
    for (let i=1; i <= n; i++){
        sum+= Math.pow(i,3);
    }
    console.log(n,sum);
})(Math.round(Math.random()*20)+1);