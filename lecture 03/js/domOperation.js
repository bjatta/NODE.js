/**
 * Created by Bjatta on 21.04.2017.
 */
function toggleCode(el,pictureName) {
    let nextEl = document.querySelector('div[id="full-screen"]');
    let body   = document.querySelector('section[id="main-container"]');
    pictureName = pictureName || '';
    nextEl.style.backgroundImage = pictureName ? 'url("img/' + pictureName + '.png")':'';
    if (hasClass(nextEl,'visible')) {
        removeClass(nextEl,'visible');
        removeClass(body,'muted');
        addClass(nextEl,'hidden');
    }else{
        removeClass(nextEl,'hidden');
        addClass(nextEl,'visible');
        addClass(body,'muted');
    }

}

function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className)
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        el.className=el.className.replace(reg, ' ')
    }
}