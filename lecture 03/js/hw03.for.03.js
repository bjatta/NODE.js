/**
 * Created by Bjatta on 20.04.2017.
 * factor (n) / factor (m) / factor (n - m);
 */
((n)=> {
    let triangle = [];
    let f = (n) => {
        if (!n) return 1;
        let f = 1;
        for (let i=1;i<=n;i++){
            f*=i;
        }
        return f;
    };
    for (let i=0; i < n ; i++){
        let triangle=[];
        for (let j=0 ;j < i+1; j++){
            triangle[j]=f(i) / f(j) / f(i - j);
        }
        console.log(triangle);
    }
})(Math.round(Math.random()*15));