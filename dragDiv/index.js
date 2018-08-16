var moveDiv = document.getElementById('moveDiv');
var outDiv = document.getElementById('outDiv');
var disTop;
var disLeft;
var outB, outL, outR, outT;
var moveL, moveT;

function mousedown() {

    disTop = event.clientY;
    disLeft = event.clientX;

    console.log(moveDiv);
    var movediv = moveDiv.getBoundingClientRect();
    var outdiv = outDiv.getBoundingClientRect();
    

    outT = outdiv.top;
    outL = outdiv.left;
    outR = outdiv.right;
    outB = outdiv.bottom;

    moveT = movediv.top;
    moveL = movediv.left;

    moveDiv.addEventListener('mousemove', mousemove, false);
    moveDiv.addEventListener('mouseup', mouseup, false);
}

function mousemove() {
    var realTop = event.clientY - disTop + moveT;
    var realLeft = event.clientX - disLeft + moveL;

    if(realLeft <= outL || realTop <= outT || realTop + 200 >= outB || realLeft + 200 >= outR) {
        return;
    }

    moveDiv.style.left = realLeft + 'px';
    moveDiv.style.top = realTop + 'px';
}

function mouseup() {
    console.log('hhhhaaaa');
    moveDiv.addEventListener('mousemove', mousemove, false);
}

moveDiv.addEventListener('mousedown', mousedown, false);



