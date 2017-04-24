/**
 * Created by Bjatta on 24.04.2017.
 */
(()=> {
        let complexNumerator = (n) => Math.sqrt(n) + n;
        let complexNab = (a, b) => Math.sqrt(a) + b;
        let complexNba = (a, b) => a + Math.sqrt(b);
        let a = (n) => complexNumerator(n) / 2;
        let x = {};
        x['a'] = a(6) + a(13) + a(21);
        let b = (n, m) => complexNumerator(n) / complexNumerator(m);
        x.b = b(5, 7) + b(12, 8) + b(31, 2);
        let c = (n, m) => complexNba(n, m) / complexNba(m, n);
        x['c'] = c(15, 8) + c(6, 12) + c(7, 21);
        let d = (n,m) => complexNab(n, m) / complexNab(m, n);
        x.d = d(13, 7) + d(15, 12) + d(21, 32);
        console.log(x);
    }
)();