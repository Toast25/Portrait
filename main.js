function setup(){
 canvas =   createCanvas(750,600);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function preload() {
}
function draw() {
    rect(30,30,600,400);
    circle(60,60,100);
    circle(60,400,100);
    circle(600,400,100);
    circle(600,60,100);
image(video, 100,100,450,280);
}