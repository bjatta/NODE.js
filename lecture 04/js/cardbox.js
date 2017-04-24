/*Created by Bjatta on 24.04.2017.*/
;(()=> {
    "use strict";
    console.log('let\'s play a game');
    let CardBoxSet = function () {
        let trump = ['♠', '♣', '♦', '♥'];
        let o = ['J', 'Q', 'K', 'A'];
        let cardBox = [];
        for (let j = 0; j < 4; j++) {
            for (let i = 2; i < 15; i++)
                cardBox.push((i > 10 ? o[i - 11] : i) + trump[j]);
        }
        return cardBox;
    };
    let c = []; // original, sorted array
    for (let index = 0; index < (r(4) + 2); index++) c.push(CardBoxSet());
    let b = []; // array for played cards
    c.forEach((i) => console.log(i));
    for (let i = 0; i < c.length; i++) {
        for (let j = 0; j < r(18); j++) {
            let card = c[i].splice(r(c[i].length - 1), 1)[0];
            b[i] = b[i] || [];
            b[i].push(card);
        }
    }
    // working with DOM
    let bColor = ['#F2E9E6','#E9F2E6','#F2F5F7','#F5F3F2','#F5F2F5','#FAF2ED','#F4FAF2'];
    let offset_x = 1.9;
    let offset_y = -0.5;
    b.forEach((i, index) => {
        let row = addDE({
            parent: document.querySelector('div.column'),
               tag: 'section',
             class: 'row',
            bColor: '#298057',
        });
        let showCardBox = (cardText, indexCard) => {
            const regex = /[♦♥]/g;
            let redCardSuit = '';
            cardText.match(regex)
                ? redCardSuit = 'red-text cards'
                : redCardSuit = 'cards';
            addDE({
                    parent: row,
                     class: redCardSuit,
                      left: indexCard * offset_x,
                      text: cardText,
                    zIndex: indexCard,
                    bColor: bColor[index],
                }
            );
        };
        console.log(i);
        i.forEach(showCardBox);
        row = addDE({
            parent: row,
               tag: 'section',
             class: 'row2',
               top: 4.5,
            bColor: '#298057',
        });
        c[index].forEach(showCardBox);
    });
}
)();