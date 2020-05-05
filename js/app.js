//global variables
var currscore = 0;
var highscore = 0;
var obsheight = 20;
var obswidth = 5;
var obsleft = 5;
var animaterand = 4000;
var createElementrand = 1500;
var u, u1, j, k, l;

var screenheight = screen.height;
var screenwidth = screen.width

const currentscore = document.querySelector('.cur-scr');
const highscor = document.querySelector('.high-scr');
var char = document.querySelector(".dino");
var child = document.querySelector(".sky");

function randomizer() {
    if (animaterand < 2000) {
        clearInterval(u);
    } else {
        animaterand = animaterand - 100;
        // createElementrand--;
    }

}

function randomizer1() {
    if (createElementrand < 700) {
        clearInterval(u1);
    } else {
        // animaterand = animaterand - 50;
        createElementrand = createElementrand - 50;
    }

}

var keyhold = 0;
var pi = 0;
//eventlisteners
window.addEventListener("click", gamestart, { once: true });
let longpresstimeout = -1;
const longpressdelay = 150;
window.addEventListener("keydown", (event) => {
    longpresstimeout = setTimeout(() => {
        $('.dino').animate({ 'top': '30vh' }, 300, 'swing');
        $('.dino').animate({ 'top': '60vh' }, 500, 'swing');
        console.log("longpress");
        pi = 1

    }, longpressdelay)
}, { once: false })
window.addEventListener("keyup", (event) => {
    clearTimeout(longpresstimeout);
    if (pi == 0) {
        $('.dino').animate({ 'top': '40vh' }, 200, 'swing');
        $('.dino').animate({ 'top': '60vh' }, 400, 'swing');
        console.log("shorpress");
        pi = 0;
    } else {
        pi = 0;
    }


});


function gamestart(e) {

    u = setInterval(randomizer, 5000);
    u1 = setInterval(randomizer1, 5000);


    //jumpstart();

    createelement();
    clouds();
    var counter = setInterval(updatetimer, 100);
    k = setInterval(collisioncheck, 10);
    var rand = 1000;
    var obs;


    var a = $('.dino').position();



}




function updatetimer() {
    currscore++;
    currentscore.innerHTML = currscore;



}








function clouds() {
    $('.clouds').animate({ left: "-15vw" }, 10000, function() {
        $(this).css({ "left": "100vw" });
        clouds();
    })
}


function createelement() {

    //console.log(animaterand, createElementrand);
    obs = document.createElement('div');
    obs.setAttribute('class', 'obstacle');
    child.appendChild(obs);

    $('.obstacle').animate({ left: "-5vw" }, animaterand, 'linear', function() {

        $(this).remove();


    });


    j = setTimeout(createelement, Math.floor(Math.random() * (3000 - 1000 + 1) + createElementrand));



}












function collisioncheck() {

    var w = window.innerWidth;
    var h = window.innerHeight;


    var a = $('.dino').position();
    var b = $('.obstacle').position();
    var c = Math.round(b.left);
    var d = Math.round(a.left);
    var e = Math.round(a.top);
    var vl = Math.round((c / w) * 100);
    var vl1 = Math.round((e / h) * 100);

    if (vl >= 8 && vl <= 10) {
        if (vl1 <= 60 && vl1 >= 50) {
            alert("gameover\nyourscore:" + currscore);




            window.location.reload();
            clearTimeout(j);
            clearInterval(k);
            clearInterval(l);



        }
    }




}