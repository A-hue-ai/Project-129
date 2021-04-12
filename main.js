song = "";
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function  perload() 
{
    song = loadSound("music.mp3");    
    song = loadSound("");  
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses()
{
    if(results.length > 0);
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX+" leftWristY ="+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX+" rightWristY ="+ rightWristY);

    }
}

function draw() 
{
    image(video, 60, 30, 300, 300); 
    fill("#FF0000");   
    stroke("#FF0000");

    if (scoreRightWrist > 0.2)
    {
        circle(rightWristX,rightWristY,20);
    } 
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}