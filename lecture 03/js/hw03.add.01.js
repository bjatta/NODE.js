/**
 * Created by Bjatta on 20.04.2017.
 */
(()=>{
  let m = 1;
  let n = 9000;
  let perfects = [];
  console.log('perfect numbers in range:',m,n);
  for (let i=m;i<=n;i++){
      let sum = 0;
      let dividers = [];
        for (let j=1;j<i;j++){
            if (i%j==0){
                sum += j;
                dividers.push(j);

            }
        }
    if (sum == i) console.log(i,dividers);
  }
}
)();