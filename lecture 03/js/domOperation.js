/**
 * Created by Bjatta on 21.04.2017.
 */
function toggleCode(el) {
    let nextEl = el.nextElementSibling;
    if (hasClass(nextEl,'visible')) {
        removeClass(el.nextElementSibling,'visible');
        addClass(el.nextElementSibling,'hidden');
    }else{
        removeClass(el.nextElementSibling,'hidden');
        addClass(el.nextElementSibling,'visible');
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