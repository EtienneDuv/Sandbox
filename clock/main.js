function init(){setInterval(setClock, 1000);}

function setClock() {
    let date = new Date(),
        s = date.getSeconds(),
        m = date.getMinutes(),
        h = date.getHours(),
        after = '';

    after = (h >= 12) ? 'PM' : 'AM';
    h = (h == 12) ? 00 : h;
    h = (h > 12) ? h-12 : h;

    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;

    const string = `${h}:${m}:${s} ${after}`;
    document.getElementById('clock2').innerText = string;
}

function toggleActive(element) {
    element.classList.toggle('active');
}