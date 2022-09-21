var body = document.getElementById('body');
var contactButton = document.getElementById('con-btn');
var contactWrap = document.getElementById('con-wrap');
var contactButton2 = document.getElementById('con-btn2');
var main = document.getElementById('main');

contactButton.addEventListener('click', function() {
    if (contactWrap.classList.contains('show')) {
        contactWrap.classList.remove('show');
        contactWrap.classList.add('hide');
    } else {
        contactWrap.classList.add('show');
        contactWrap.classList.remove('hide');
    }
})

contactButton2.addEventListener('click', function() {
    if (contactWrap.classList.contains('show')) {
        contactWrap.classList.remove('show');
        contactWrap.classList.add('hide');
    } else {
        contactWrap.classList.add('show');
        contactWrap.classList.remove('hide');
    }
})


var modeBtn = document.getElementById('mode-con-btn');
var modeWrap = document.getElementById('mode-wrap');
var dark = document.getElementById('dark');
var light = document.getElementById('light');

var header = document.getElementById('header');
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var help = document.getElementById('help');
var loc = document.getElementById('loc');
var leftList = document.getElementById('left-list');
var midList = document.getElementById('mid-list');
var rightList = document.getElementById('right-list');
var fbBtn = document.getElementById('fb-btn');
var waBtn = document.getElementById('wa-btn');
var igBtn = document.getElementById('ig-btn');

modeBtn.addEventListener('click', function() {
    if (modeWrap.classList.contains('show')) {
        modeWrap.classList.remove('show');
        modeWrap.classList.add('hide');
    } else {
        modeWrap.classList.add('show');
        modeWrap.classList.remove('hide');
    }
})

dark.addEventListener('click', function() {
    if (modeWrap.classList.contains('show')) {
        modeWrap.classList.remove('show');
        modeWrap.classList.add('hide');
    } else {
        modeWrap.classList.add('show');
        modeWrap.classList.remove('hide');
    }
    body.style.background = "#222"
    header.style.background = "#222"
    modeBtn.style.background = "#222"
    modeBtn.style.borderColor = "#fff"
    modeBtn.style.color = "#fff"
    first.style.color = "#fff"
    second.style.color = "#fff"
    third.style.color = "#fff"
    fourth.style.color = "#fff"
    help.style.color = "#fff"
    contactButton.style.border = "1px solid #fff"
    contactButton.style.color = "#fff"
    contactButton.style.background = "#222"
    contactButton.style.boxShadow = "none"
    loc.style.color = "#fff"
    contactWrap.style.background = "#222"
    contactWrap.style.boxShadow = "1px 1px 2px lightgray"
    fbBtn.style.border = "1px solid #fff"
    igBtn.style.border = "1px solid #fff"
    waBtn.style.border = "1px solid #fff"
    fbBtn.style.background = "#222"
    igBtn.style.background = "#222"
    waBtn.style.background = "#222"
    fbBtn.style.boxShadow = "none"
    waBtn.style.boxShadow = "none"
    igBtn.style.boxShadow = "none"
})

light.addEventListener('click', function() {
    if (modeWrap.classList.contains('show')) {
        modeWrap.classList.remove('show');
        modeWrap.classList.add('hide');
    } else {
        modeWrap.classList.add('show');
        modeWrap.classList.remove('hide');
    }
    body.style.background = "#fff"
    header.style.background = "#fff"
    modeBtn.style.background = "#fff"
    modeBtn.style.borderColor = "#222"
    modeBtn.style.color = "#222"
    first.style.color = "#222"
    second.style.color = "#222"
    third.style.color = "#222"
    fourth.style.color = "#222"
    help.style.color = "#222"
    contactButton.style.border = "none"
    contactButton.style.color = "#222"
    contactButton.style.background = "#fff"
    contactButton.style.boxShadow = "1px 2px 2px lightgray"
    loc.style.color = "#222"
    contactWrap.style.background = "#fff"
    contactWrap.style.boxShadow = "1px 2px 2px lightgray"
    fbBtn.style.border = "none"
    igBtn.style.border = "none"
    waBtn.style.border = "none"
    fbBtn.style.background = "#fff"
    igBtn.style.background = "#fff"
    waBtn.style.background = "#fff"
    fbBtn.style.boxShadow = "1px 2px 4px lightgray"
    waBtn.style.boxShadow = "1px 2px 4px lightgray"
    igBtn.style.boxShadow = "1px 2px 4px lightgray"
})



var modeBtn2 = document.getElementById('mode-con-btn2');
var modeWrap2 = document.getElementById('mode-wrap2');
var moon = document.getElementById('moon');
var sun = document.getElementById('sun');

modeBtn2.addEventListener('click', function() {
    if (modeWrap2.classList.contains('show')) {
        modeWrap2.classList.remove('show');
        modeWrap2.classList.add('hide');
    } else {
        modeWrap2.classList.add('show');
        modeWrap2.classList.remove('hide');
    }
})

moon.addEventListener('click', function() {
    if (modeWrap2.classList.contains('show')) {
        modeWrap2.classList.remove('show');
        modeWrap2.classList.add('hide');
    } else {
        modeWrap2.classList.add('show');
        modeWrap2.classList.remove('hide');
    }
    body.style.background = "#222"
    header.style.background = "#222"
    modeBtn2.style.background = "#222"
    modeBtn2.style.borderColor = "#fff"
    modeBtn2.style.color = "#fff"
    first.style.color = "#fff"
    second.style.color = "#fff"
    third.style.color = "#fff"
    fourth.style.color = "#fff"
    help.style.color = "#fff"
    contactButton2.style.border = "1px solid #fff"
    contactButton2.style.color = "#fff"
    contactButton2.style.background = "#222"
    contactButton2.style.boxShadow = "none"
    loc.style.color = "#fff"
    contactWrap.style.background = "#222"
    contactWrap.style.boxShadow = "1px 1px 2px lightgray"
    fbBtn.style.border = "1px solid #fff"
    igBtn.style.border = "1px solid #fff"
    waBtn.style.border = "1px solid #fff"
    fbBtn.style.background = "#222"
    igBtn.style.background = "#222"
    waBtn.style.background = "#222"
    fbBtn.style.boxShadow = "none"
    waBtn.style.boxShadow = "none"
    igBtn.style.boxShadow = "none"
})

sun.addEventListener('click', function() {
    if (modeWrap2.classList.contains('show')) {
        modeWrap2.classList.remove('show');
        modeWrap2.classList.add('hide');
    } else {
        modeWrap2.classList.add('show');
        modeWrap2.classList.remove('hide');
    }
    body.style.background = "#fff"
    header.style.background = "#fff"
    modeBtn2.style.background = "#fff"
    modeBtn2.style.borderColor = "#222"
    modeBtn2.style.color = "#222"
    first.style.color = "#222"
    second.style.color = "#222"
    third.style.color = "#222"
    fourth.style.color = "#222"
    help.style.color = "#222"
    contactButton2.style.border = "none"
    contactButton2.style.color = "#222"
    contactButton2.style.background = "#fff"
    contactButton2.style.boxShadow = "1px 2px 2px lightgray"
    loc.style.color = "#222"
    contactWrap.style.background = "#fff"
    contactWrap.style.boxShadow = "1px 2px 2px lightgray"
    fbBtn.style.border = "none"
    igBtn.style.border = "none"
    waBtn.style.border = "none"
    fbBtn.style.background = "#fff"
    igBtn.style.background = "#fff"
    waBtn.style.background = "#fff"
    fbBtn.style.boxShadow = "1px 2px 4px lightgray"
    waBtn.style.boxShadow = "1px 2px 4px lightgray"
    igBtn.style.boxShadow = "1px 2px 4px lightgray"
})