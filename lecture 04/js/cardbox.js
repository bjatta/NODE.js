/*Created by Bjatta on 24.04.2017.*/
;((a)=> {
    "use strict";
    console.log('let\'s play a game');
    let cardBox = ()=> {
        let trump = ['♠', '♣', '♢', '♡'];
        let o = ['J', 'Q', 'K', 'A'];
        return () => {
            let cardBox = [];
            for (let j = 0; j < 4; j++) {
                for (let i = 2; i < 15; i++)
                    cardBox.push((i > 10 ? o[i - 11] : i) + trump[j]);
            }
            return cardBox;
        }
    }
    let cc = cardBox();
    let c = [cc(),cc(),cc()];
    let b = [];
    c.forEach((i)=>console.log(i));
    for (let j=0;j<6;j++) {
        for (let i = 0; i < c.length; i++) {
            let card = c[i].splice(r(c[i].length - 1),1)[0];
            b[i] = b[i] || [];
            b[i].push(card);
//            console.log('[' + j + ',' + i + ']:',card,b[i],c[i]);
        }
    }
    b.forEach((i,index)=>{
        console.log(i);
        let mainSection = document.querySelector('div.column');
        console.log(mainSection);
        i.forEach((cardText)=>addDE(mainSection,cardText));
        console.log(c[index]);
    });
}
)(ra());