function preload()
{

}

function setup()
{
canvas=createCanvas(640, 480);
canvas.position(110, 250);
video=createCapture(VIDEO);
video.hide();

tint_colour = " ";
}

function draw()
{
image(video, 0 , 0 , 640 , 480);
tint(tint_colour);
}

function filter_snapshot()
{
tint_colour=document.getElementById("colour_name").value;
}

function take_snapshot()
{
save('Snapshot.png');
}