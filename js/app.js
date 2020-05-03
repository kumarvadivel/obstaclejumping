//global variables
var currscore = 0;
var highscore = 0;
var obsheight = 20;
var obswidth = 5;
var obsleft = 5;

var screenheight = screen.height;
var screenwidth = screen.width
    //console.log(screenheight, screenwidth);
    //selectors
const currentscore = document.querySelector('.cur-scr');
const highscor = document.querySelector('.high-scr');
var char = document.querySelector(".dino");
var child = document.querySelector(".sky");




//eventlisteners
window.addEventListener("click", gamestart, { once: true });
window.addEventListener("keypress", jump);


function gamestart(e) {
    window.addEventListener('click', jumpstart);
    jumpstart();

    createelement();
    clouds();
    var counter = setInterval(updatetimer, 100);
    var t = setInterval(collisioncheck, 50);
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

/*function highscore() {
    if (currentscore > highscore) {

        localStorage.setItem("highscore", currentscore);
    }
}*/



//functions
//var f = setRandomInterval(function() { console.log("hello"); }, 1000, 10000);
//








function clouds() {
    $('.clouds').animate({ left: "-15vw" }, 10000, function() {
        $(this).css({ "left": "100vw" });
        clouds();
    })
}


function createelement() {
    //var x=document.querySelector('.clouds');

    obs = document.createElement('div');
    //obs.classList.add(obstacle);
    obs.setAttribute('class', 'obstacle');
    child.appendChild(obs);

    $('.obstacle').animate({ left: "-5vw" }, 5000, function() {

        $(this).remove();

        //j = setTimeout(createelement, Math.floor(Math.random() * (1000 - 100 + 1) + 100));

    });


    j = setTimeout(createelement, Math.floor(Math.random() * (2000 - 1000 + 1) + 1000));
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
    console.log(vl);
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