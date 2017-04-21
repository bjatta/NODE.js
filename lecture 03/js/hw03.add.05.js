/**
 * Created by Bjatta on 20.04.2017.
 */
((n)=> {
    var result = [];
    console.log('task #5: ... for n: '+n)
    for (let i = 1; i <= n; i++){
        for (let j = i; j <= n; j++) {
            if (0 != j%i || i == 1) {
                result.push({up:i,down:j,value:i/j});
            }
        }
    }
    console.log(result.sort((a,b)=>(a.value - b.value)).map((el)=>el.up+'/'+el.down).join(' '));
}
)(Math.round(Math.random()*15)+1);