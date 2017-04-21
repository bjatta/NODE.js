/**
 * Created by Bjatta on 20.04.2017.
 * произведения (1, 2, 3 - вершины треугольника, 0 - точка):
 (x1 - x0) * (y2 - y1) - (x2 - x1) * (y1 - y0)
 (x2 - x0) * (y3 - y2) - (x3 - x2) * (y2 - y0)
 (x3 - x0) * (y1 - y3) - (x1 - x3) * (y3 - y0)
 Если они одинакового знака, то точка внутри треугольника,
 если что-то из этого - ноль, то точка лежит на стороне,
 иначе точка вне треугольника.
 */
(()=> {
    let r = (n) => Math.round(Math.random()*n);
    let p0 = [r(15),r(15)];
    let p1 = [r(15),r(15)];
    let p2 = [r(15),r(15)];
    let p3 = [r(15),r(15)];

    console.log('task #4: ',p0);
    console.log('triangle:',p1,p2,p3);

    let a = (p1[0] - p0[0])*(p2[1] - p1[1]) - (p2[0] - p1[0])*(p1[1] - p0[1]);
    let b = (p2[0] - p0[0])*(p3[1] - p1[1]) - (p3[0] - p2[0])*(p2[1] - p0[1]);
    let c = (p3[0] - p0[0])*(p1[1] - p1[1]) - (p1[0] - p3[0])*(p3[1] - p0[1]);

    console.log(a,b,c);
    if (a && b && c) {
        if ((a < 0 && b < 0 && c < 0)
         || (a > 0 && b > 0 && c > 0)) console.log ('inside');
        else console.log('outside');
    }
    else {
        console.log(' on a side!');
    }
}
)();