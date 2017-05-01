/**
 * Created by Bjatta on 01.05.2017 at 16:08.
 */
;(() => {
    "use strict";
    exports.data=()=>{
    };
    exports.menu=()=> {
        return [
            {
                title: 'home',
                href: '/'
            },
            {
                title: 'main',
                href: '/main'
            },
            {
                title: 'about',
                href: '/about'
            },
            {
                title: 'jumpy',
                href: './views/jumpy.html'
            },
        ];
    };
    exports.getMenuTitle=(url)=> {
        let menu_items = exports.menu();
        for (let i = 0; i < menu_items.length; i++) {
            if (menu_items[i].href === url) return menu_items[i].title;
        }
        return '404';
    };
})();