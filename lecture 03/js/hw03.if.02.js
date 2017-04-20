/**
 * Created by Bjatta on 20.04.2017.
 */
((v1,m1,v2,m2) => {
    let density1 = (m1/v1).toFixed(2)*1;
    let density2 = (m2/v2).toFixed(2)*1;
    let direction = 'less';
    if (density1 > density2) { direction = 'more'};
    console.log ( ' first body density: '
        + density1 + ' kg/m3 is '+direction+
        ' than second body density: '+density2+' kg/m3.');
    console.log(' first body is: '+v1
        + ' m3 volume and mass '+m1+' kg.');
    console.log('second body is: '+v2
        + ' m3 volume and mass '+m2+' kg.');

})
(Math.round(Math.random()*3)+0.01,
 Math.round(Math.random()*1500),
 Math.round(Math.random()*3)+0.01,
 Math.round(Math.random()*1500)
);