/**
 * Created by Bjatta on 01.05.2017 at 16:08.
 */
;(() => {
    "use strict";
    let users = [
        {name:'anonymous'   ,email:'anonymous@cia.us', descriptionTitle:'for ANY nor found in list users:',
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis ex iure libero numquam omnis placeat provident qui, ullam ut. Cupiditate delectus dicta est numquam provident qui repellat sed velit.',
        },
        {name:'bjatta'      ,email:'me@bjatta.ru', descriptionTitle:'this simple server setUp AUTHOR:',
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis ex iure libero numquam omnis placeat provident qui, ullam ut. Cupiditate delectus dicta est numquam provident qui repellat sed velit.',
        },
        {name:'admin'       ,email:'admin@trainingcenter.by', descriptionTitle:'funny ADMIN this whole organisation:',
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis ex iure libero numquam omnis placeat provident qui, ullam ut. Cupiditate delectus dicta est numquam provident qui repellat sed velit.',
        },
        {name:'Young'       ,email:'young@user.me', descriptionTitle:'Young User Icon transparent:',
            description:"You can download in a tap this free Young User Icon transparent PNG image. As you can see, there's no background. Use it for your creative projects or simply as a sticker you'll share in messaging apps or on Tumblr.",
        },
        {name:'MaleUser'       ,email:'male.user@user.me', descriptionTitle:'Male User Icon transparent:',
            description:"You can download in a tap this free Male User Icon transparent PNG image. As you can see, there's no background. Use it for your creative projects or simply as a sticker you'll share in messaging apps or on Tumblr.",
        },
        {name:'Female'       ,email:'Female@user.me', descriptionTitle:'Female User Icon transparent:',
            description:'You can now download for free this Female User Icon transparent PNG image. It has no background. Use it in a creative project, or as a sticker you can share on Tumblr or via messaging apps.',
        },
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