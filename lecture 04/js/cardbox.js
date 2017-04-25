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
    let b = []; // array for played cards filled in random order 6-42 cards in each
    c.forEach((i) => console.log(i));
    for (let i = 0; i < c.length; i++) {
        for (let j = 0; j < (r(36)+6); j++) {
            let card = c[i].splice(r(c[i].length - 1), 1)[0];
            b[i] = b[i] || [];
            b[i].push(card);
        }
    }
    // working with DOM
    let bColor = ['#F2E9E6',
        '#E9F2E6',
        '#F2F5F7',
        '#F5F3F2',
        '#F5F2F5',
        '#FAF2ED',
        '#F4FAF2'];
    let offset_x = 1;
//    let offset_y = -0.5;
    b.forEach((i, index) => {
        let row = addDE({
            parent: document.querySelector('section[id="main-container"]'),
               tag: 'section',
             class: 'row',
            bColor: '#298057',
        });
        let showCardBox = (cardText, indexCard) => {
            const regex = /[♦♥]/g;
            let redCardSuit = '';
            cardText.match(regex)
                ? redCardSuit = 'red-text'
                : redCardSuit = '';
            let currentCard = addDE({
                    parent: row,
                      left: indexCard * offset_x,
                    zIndex: indexCard,
                    bColor: bColor[index],
                });
            addDE({
                parent: currentCard,
                class: redCardSuit+' left-corner',
                text: cardText,
                bColor: bColor[index],
            });
            addDE({
                parent: currentCard,
                class: redCardSuit+' right-corner',
                text: cardText,
                bColor: bColor[index],
            });
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