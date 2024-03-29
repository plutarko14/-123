noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() 
{
  video = createCapture(VIDEO);
  video.size(600, 700);
  canvas = createCanvas(600,500);
  canvas.position(700,130);
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);

}
function modelLoaded()
{
  console.log('iPoseNet está inicializado');
}






function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);

}
}
function draw()
{
background('blue');
//document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
document.getElementById("square_side").innerHTML = "El tamaño de la fuente es:" + difference+"px"; 
fill('#F90093');
stroke('#F90093');
//square(noseX, noseY, difference);
textSize(difference);
text("texto",noseX,noseY);
}


