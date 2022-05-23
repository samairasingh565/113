function preload() {

}

function setup() {
canvas = createCanvas(400,400); 
canvas.position(50,150);
video = createCapture(VIDEO);
video.hide();

}

function draw() {
image(video,0,0,400,400);
fill(0,128,0)
stroke(0,128,0)
rect(15, 20, 350, 20);
fill(255,0,0)
stroke(255,0,0)
circle(350, 30, 60);
fill(255,0,0)
stroke(255,0,0)
circle(30, 30, 60,);
fill(0,128,0)
stroke(0,128,0)
rect(15, 350, 350, 20);
fill(255,0,0)
stroke(255,0,0)
circle(350, 357, 60);
fill(255,0,0)
stroke(255,0,0)
circle(30, 357, 60,);
fill(0,128,0)
stroke(0,128,0)
rect(16, 30, 25, 350);
fill(255,0,0)
stroke(255,0,0)
circle(30, 30, 60);
fill(255,0,0)
stroke(255,0,0)
circle(30, 357, 60,);
fill(0,128,0)
stroke(0,128,0)
rect(342, 30, 25, 350);
fill(255,0,0)
stroke(255,0,0)
circle(350, 30, 60,);
fill(255,0,0)
stroke(255,0,0)
circle(350, 357, 60);


}

function take_snapshot() {
save("student_name.png");
}
