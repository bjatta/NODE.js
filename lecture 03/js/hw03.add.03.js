/**
 * Created by Bjatta on 20.04.2017.
 */
(()=> {
    let birthdate = {
        year: new Date().getFullYear(),
        month: Math.round(Math.random() * 11) + 1,
        day: Math.round(Math.random() * 30) + 1
    };
    birthdate.getDate = () =>
                birthdate.year+'/'
       + ('0' + birthdate.month).slice(-2) + '/'
       + ('0' + birthdate.day).slice(-2);

    let d = new Date();
    let currentDate = {
        year: d.getFullYear(),
        month: d.getMonth(),
        day: d.getDay()
    };
    let bd = new Date(birthdate.getDate());

    console.log('left '
        + Math.round((bd - d) / (1000 * 60 * 60 * 24))
        + ' days to: ' + birthdate.getDate());

    if (bd-d < 0)
        console.log('till next left '
            + (Math.round((bd - d) / (1000 * 60 * 60 * 24))+365)
            + ' days to: ' + birthdate.getDate());
}
)();