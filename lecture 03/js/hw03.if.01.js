/**
 * Created by Bjatta on 20.04.2017.
 */
((speedInKmH,speedInMS) => {
    let speedDiff = Math.round(speedInKmH - speedInMS*3.6);
    if (!speedDiff)
        console.log( speedInKmH+' km/h both value are equal '+speedInMS +' m/s');
    else {
        if (speedDiff >0){
              console.log( speedInKmH+ ' km/h more than '+speedInMS +' m/s on: '
                  +speedDiff+' km/h or '+Math.round(speedDiff / 3.6)+' m/s.');
            } else {
            speedDiff*=-1;
            console.log( speedInKmH+' km/h less than '+speedInMS +' m/s on: '
                +speedDiff+' km/h or '+Math.round(speedDiff / 3.6)+' m/s.');
            }
        }
})
(Math.round(Math.random()*100),
 Math.round(Math.random()*30));