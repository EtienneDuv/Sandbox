function init(){
    initClockCSS();
    setInterval(setClock, 1000);
}

function setClock() {
    let date = new Date(),
        s = date.getSeconds(),
        m = date.getMinutes(),
        h = date.getHours(),
        after = '';

    after = (h >= 12) ? 'PM' : 'AM';
    h = (h%12 === 0) ? 12 : h;
    h = (h > 12) ? h-12 : h;

    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;
    const string = `${h}:${m}:${s} ${after}`;
    document.getElementById('clockDigital').innerText = string;

    var d = new Date()
    rotate(sec_SVG, 6 * s)
    rotate(min_SVG, 6 * m)
    rotate(hour_SVG, 30 * (h % 12) + m / 2)

}

function toggleActive(element) {
    element.classList.toggle('active');
}

function toggleHidden(element) {
    element.classList.toggle('hidden');
}

function rotate(element, deg) {
    element.setAttribute('transform', `rotate(${deg} 50 50)`);
}

function rotateZ(element, deg) {
    element.style.webkitTransform = `rotateZ(${deg}`;
    element.style.transform =  `rotateZ(${deg}deg)`;
}

function initClockCSS(){

    let date = new Date(),
        s = date.getSeconds(),
        m = date.getMinutes(),
        h = date.getHours();

    rotateZ(sec_CSS, 6 * s)
    rotateZ(min_CSS, 6 * m)
    rotateZ(hour_CSS, 30 * (h % 12) + m / 2)
}