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
    let c = [cc(),cc(),cc(),cc(),cc(),];
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
    let offset_x = 1.8;
    let offset_y = 3.1;
    b.forEach((i,index)=>{
    let mainSection = document.querySelector('div.column');
    let row = addDE(mainSection,'section','','row',0,index*offset_y);
    let showCardBox = (cardText,index)=>{
        const regex = /[♢♡]/g;
        cardText.match(regex)
            ?addDE(row,'div',cardText,'red-text cards',index*offset_x,0,index)
            :addDE(row,'div',cardText,'cards',index*offset_x,0,index);
    };
    console.log(i);
    i.forEach(showCardBox);
    row = addDE(document.querySelector('body'),'div','','column2');
    row = addDE(row,'section','','row',0,b.length*offset_y+1+index*offset_y);
    c[index].forEach(showCardBox);
    });
}
)(ra());