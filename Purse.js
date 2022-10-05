Status = "";
Purse = "";

function preload(){
    Purse= loadImage("c.png");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(400,250);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(Purse,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(Purse,0,0,640,350);
}