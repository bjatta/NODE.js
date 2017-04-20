/**
 * Created by Bjatta on 20.04.2017.
 */
(()=> {
    let str='for';
    let words = Math.round(Math.random()*12)+4;
    for (let i=0; i < words; i++)
        str+=' '+
            Math.random()
                .toString(36)
                .replace(/\d|\./g,'');

    let wordsArray = str.split(' ');
    for (let i=0; i < wordsArray.length; i++) console.log(i+':'+wordsArray[i]);
})();