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
;(()=>{
    "use strict";
    let _r_ = (n) => Math.round(Math.random()*n);
    window.r?window._r= _r_:window.r= _r_;
    let _ra_ = (n,m)=>{
        n = n || r(100)+1;
        m = m || r(100)+1;
        let a = [];
        for (let i=0;i<n;i++){
            a.push(r(m));
        }
        return a;
    }
    window.ra?window._ra= _ra_:window.ra= _ra_;
    let _newDOMdiv_ = (_DOMelement,text,_class_) => {
        let obj = document.createElement('div');
        text = document.createTextNode(text);
        _class_ = _class_ || 'cards';
        obj.appendChild(text);
        _DOMelement = _DOMelement || document.querySelector('body');
        _DOMelement.appendChild(obj);
        obj.className+=_class_;
    }
    window.addDE?window._addDE=_newDOMdiv_:window.addDE=_newDOMdiv_;
})();