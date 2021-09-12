function Preload()
{

}

function setup()
{
canvas=createCanvas(640 , 480);
canvas.position(150 , 150);
video=createCapture(VIDEO);
video.hide();
}

function draw()
{
image(video, 15 , 10 , 600 , 480);
fill(255,0,0);
circle(100 , 50,40);
circle(500 , 50 , 40);
circle(100 , 450 , 40);
circle(500 , 450 , 40);
fill(0 , 0 , 0);
rect(100 , 50 , 400 , 20 );
rect(100 , 450 , 400 , 20);
}

function take_snapshot()
{
save("Picture.png");
}