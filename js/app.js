//global variables
var currscore = 0;
var highscore = 0;
var obsheight = 20;
var obswidth = 5;
var obsleft = 5;
var animaterand = 5000; //decrement upto 3000
var createElementrand = 1500; //decrement upto 500

var screenheight = screen.height;
var screenwidth = screen.width
    //console.log(screenheight, screenwidth);
    //selectors
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
    if (createElementrand < 500) {
        clearInterval(u1);
    } else {
        // animaterand = animaterand - 50;
        createElementrand = createElementrand - 50;
    }

}

//eventlisteners
window.addEventListener("click", gamestart, { once: true });
window.addEventListener("keypress", jump);


function gamestart(e) {

    var u = setInterval(randomizer, 5000);
    var u1 = setInterval(randomizer1, 5000);

    window.addEventListener('click', jumpstart);
    jumpstart();

    createelement();
    clouds();
    var counter = setInterval(updatetimer, 100);
    var t = setInterval(collisioncheck, 10);
    var rand = 1000;
    var obs;


    var a = $('.dino').position();



}

function jumpstart() {
    $(".dino").animate({ top: '40vh' }, 200);
    $(".dino").animate({ top: '60vh' }, 400);
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

    console.log(animaterand, createElementrand);
    obs = document.createElement('div');
    obs.setAttribute('class', 'obstacle');
    child.appendChild(obs);

    $('.obstacle').animate({ left: "-5vw" }, animaterand, function() {

        $(this).remove();

        //j = setTimeout(createelement, Math.floor(Math.random() * (1000 - 100 + 1) + 100));

    });


    j = setTimeout(createelement, Math.floor(Math.random() * (3000 - 1000 + 1) + createElementrand));

    //  $('.obstacle').css({ left: "105%" });

    // obs.remove();
    //console.log('r');
    //  var t = setInterval(collisioncheck, 500);



}




function jump(e) {

    if (e.which == 32) {
        var bleep = new Audio();
        bleep.src = "../img/jump.wav";
        bleep.play();
        $(".dino").animate({ top: '40vh' }, 200);
        $(".dino").animate({ top: '60vh' }, 400);
    }


}






function collisioncheck() {
    //  var widhcal = parseInt($('.obstacle').css('left'));
    //var widthi = Math.round((widhcal / screenwidth) * 100);
    //var topcal = parseInt($('.dino').css('top'));
    //var topthi = Math.round((topcal / screenheight) * 100);
    //console.log("obstacle:" + parseInt($('.obstacle').css('left')));
    //console.log("player" + topcal + "%");
    var w = window.innerWidth;
    var h = window.innerHeight;


    var a = $('.dino').position();
    var b = $('.obstacle').position();
    var c = Math.round(b.left);
    var d = Math.round(a.left);
    var e = Math.round(a.top);
    var vl = Math.round((c / w) * 100);
    var vl1 = Math.round((e / h) * 100);
    //  console.log(vl);
    // alert(vl1 + "vh");
    if (vl >= 8 && vl <= 10) {
        if (vl1 <= 60 && vl1 >= 50) {

            alert("gameover\nyourscore:" + currscore);
            // console.log("out", d);
            window.location.reload();
            clearInterval(t);
            clearTimeout(j);
            // highscore();

        }
    }


    //if (c < 149 && c > 109 && e > 109) {
    //  alert("collisi");
    //}


    //console.log(c);

    // console.log($(".obstacle").css("left"));
    // console.log("near");
}
//collisioncheck();
//console.log(a.top, a.left);

// //this line will stop moving elements horizontally
// //this line will stop the