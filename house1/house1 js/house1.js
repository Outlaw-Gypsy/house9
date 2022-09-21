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
    second.style.background = "#222"
    second.style.borderBottomLeftRadius = "15px"
    second.style.borderBottomRightRadius = "15px"
    aside.style.color = "#fff"
    aside.style.background = "#222"
    aside.style.borderBottomLeftRadius = "15px"
    aside.style.borderBottomRightRadius = "15px"
    bed1.style.background = "#222"
    bed2.style.background = "#222"
    amenBtn.style.background = "#222"
    amenBtn.style.color = "#fff"
    amenBtn.style.border = "1px solid lightgray"
    amenities.style.background = '#222'
    amHead.style.background = '#222'
    amenClose.style.color = '#fff'
    bm.style.color = "#fff"
    out.style.color = "#fff"
    bl.style.color = "#fff"
    fam.style.color = "#fff"
    ent.style.color = "#fff"
    io.style.color = "#fff"
    kd.style.color = "#fff"
    left.style.color = "#fff"
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
    second.style.background = "#fff"
    second.style.borderBottomLeftRadius = "15px"
    second.style.borderBottomRightRadius = "15px"
    aside.style.color = "#222"
    aside.style.background = "#fff"
    aside.style.borderBottomLeftRadius = "15px"
    aside.style.borderBottomRightRadius = "15px"
    bed1.style.background = "#fff"
    bed2.style.background = "#fff"
    amenBtn.style.background = "#fff"
    amenBtn.style.color = "#222"
    amenBtn.style.border = "1px solid lightgray"
    amenities.style.background = '#fff'
    amHead.style.background = '#fff'
    amenClose.style.color = '#222'
    bm.style.color = "#222"
    out.style.color = "#222"
    bl.style.color = "#222"
    fam.style.color = "#222"
    ent.style.color = "#222"
    io.style.color = "#222"
    kd.style.color = "#222"
    left.style.color = "#222"
    help.style.color = "#222"
    contactButton.style.border = "none"
    contactButton.style.color = "#222"
    contactButton.style.background = "#fff"
    contactButton.style.boxShadow = "1px 2px 2px lightgray"
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


var modeBtn2 = document.getElementById('mode-con-btn2');
var modeWrap2 = document.getElementById('mode-wrap2');
var moon = document.getElementById('moon');
var sun = document.getElementById('sun');
var header = document.getElementById('header');
var first = document.getElementById('first');
var second = document.getElementById('second');
var aside = document.getElementById('aside1');
var bed1 = document.getElementById('bed1');
var bed2 = document.getElementById('bed2');
var amenities = document.getElementById('amenities');
var amHead = document.getElementById('am-head');
var amenClose = document.getElementById('amen-close');
var bm = document.getElementById('bm-list');
var out = document.getElementById('out-list');
var bl = document.getElementById('bl-list');
var fam = document.getElementById('fam-list');
var ent = document.getElementById('ent-list');
var io = document.getElementById('io-list');
var kd = document.getElementById('kd-list');
var left = document.getElementById('left');
var help = document.getElementById('help');
var loc = document.getElementById('loc');
var leftList = document.getElementById('left-list');
var midList = document.getElementById('mid-list');
var rightList = document.getElementById('right-list');
var fbBtn = document.getElementById('fb-btn');
var waBtn = document.getElementById('wa-btn');
var igBtn = document.getElementById('ig-btn');

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
    second.style.background = "#222"
    second.style.borderBottomLeftRadius = "0px"
    second.style.borderBottomRightRadius = "0px"
    aside.style.color = "#fff"
    aside.style.background = "#222"
    aside.style.borderBottomLeftRadius = "0px"
    aside.style.borderBottomRightRadius = "0px"
    bed1.style.background = "#222"
    bed2.style.background = "#222"
    amenBtn.style.background = "#222"
    amenBtn.style.color = "#fff"
    amenBtn.style.border = "1px solid lightgray"
    amenities.style.background = '#222'
    amHead.style.background = '#222'
    amenClose.style.color = '#fff'
    bm.style.color = "#fff"
    out.style.color = "#fff"
    bl.style.color = "#fff"
    fam.style.color = "#fff"
    ent.style.color = "#fff"
    io.style.color = "#fff"
    kd.style.color = "#fff"
    left.style.color = "#fff"
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
    second.style.background = "#fff"
    second.style.borderBottomLeftRadius = "15px"
    second.style.borderBottomRightRadius = "15px"
    aside.style.color = "#222"
    aside.style.background = "#fff"
    aside.style.borderBottomLeftRadius = "15px"
    aside.style.borderBottomRightRadius = "15px"
    bed1.style.background = "#fff"
    bed2.style.background = "#fff"
    amenBtn.style.background = "#fff"
    amenBtn.style.color = "#222"
    amenBtn.style.border = "1px solid lightgray"
    amenities.style.background = '#fff'
    amHead.style.background = '#fff'
    amenClose.style.color = '#222'
    bm.style.color = "#222"
    out.style.color = "#222"
    bl.style.color = "#222"
    fam.style.color = "#222"
    ent.style.color = "#222"
    io.style.color = "#222"
    kd.style.color = "#222"
    left.style.color = "#222"
    help.style.color = "#222"
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


var amenBtn = document.getElementById('amen-btn');
var amenities = document.getElementById('amenities');
var amenCloseBtn = document.getElementById('amen-close');

amenBtn.addEventListener('click', function() {
    if (amenities.classList.contains('show')) {
        amenities.classList.remove('show');
        amenities.classList.add('hide');
    } else {
        amenities.classList.add('show');
        amenities.classList.remove('hide');
    }
})

amenCloseBtn.addEventListener('click', function() {
    if (amenities.classList.contains('show')) {
        amenities.classList.remove('show');
        amenities.classList.add('hide');
    } else {
        amenities.classList.add('show');
        amenities.classList.remove('hide');
    }
})