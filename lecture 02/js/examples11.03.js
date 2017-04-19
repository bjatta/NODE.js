/**
 * Created by Bjatta on 19.04.2017. from 11.03
 */
((...vars)=> {
    let array15a = [];
    let array15b = [];
    let array15c = [];
    let array15d = [];
    let array15e = [];

    for (let i=0;i<16;i++) array15a.push(Math.random().toFixed(6)*1);
    console.log('а',array15a);
    for (let i=0;i<16;i++) array15b.push((Math.random() * (23 - 22) + 22).toFixed(2)*1);
    console.log('б',array15b);
    for (let i=0;i<16;i++) array15c.push((Math.random()*10).toFixed(2)*1);
    console.log('в',array15c);
    for (let i=0;i<16;i++) array15d.push((Math.random()*100 - 50).toFixed(2)*1);
    console.log('г',array15d);
    for (let i=0;i<16;i++) array15e.push(Math.round(Math.random()*10));
    console.log('д',array15e);
})(1,2,3,4,5,6,7,8,9,0);