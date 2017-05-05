/**
 * Created by Bjatta on 01.05.2017 at 16:08.
 */
;(() => {
    "use strict";
    let users = [
        {name:'anonymous'   ,email:'anonymous@cia.us'},
        {name:'bjatta'      ,email:'me@bjatta.ru'},
        {name:'admin'       ,email:'admin@trainingcenter.by'},
    ];
    exports.data=()=>{
    };
    exports.menu=()=> {
        return [
            {
                title: 'home',
                 icon: '⌂',
                 href: '/'
            },
            {
                title: 'main',
                 icon: '汜',
                 href: '/main'
            },
            {
                title: 'about',
                 icon: 'ℹ',
                 href: '/about'
            },
            {
                title: 'jumpy',
                 icon: '跃',
                 href: '/views/jumpy.html'
            },
            {
                title: 'my certificates',
                 icon: '&#xe333',
                 href: '/views/certificates.html'
            },
                {
                    title: 'users',
                    icon: '👤',
                    href: '/users'
                },
        ];
    };
    exports.getMenuTitle=(url)=> {
        let menu_items = exports.menu();
        url = url.path || url;
        for (let i = 0; i < menu_items.length; i++) {
            if (menu_items[i].href === url) return menu_items[i].title;
        }
        return '404';
    };
    exports.getUser=(username)=>{
        username = username || 'anonymous';
        let userIs=users[0];
        users.forEach((user)=> {
            if (user.name === username) {
                userIs = user;
            }
        });
        return userIs;
    };
    exports.getAllUsers=()=>{
      return users;
    };
})();
/*
 U+1F511 🔑 KEY (128273 decimal)
 U+26BF  ⚿ SQUARED KEY
 U+1F510 🔐 CLOSED LOCK WITH KEY
 U+1F512 🔒 LOCK
 U+1F513 🔓 OPEN LOCK
 U+1F50F 🔏 LOCK WITH INK PEN
*/