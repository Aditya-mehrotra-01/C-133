img="";
 status="";
 object = "";
function preload() {
    img=loadImage("drawing.jpg");
    
}
function draw() {
  if (status != "") {
    image(img, 0, 0, 640, 420);
    for (i = 0; i < object.length; i++) {
      document.getElementById("status").innerHTML = "Object Detected";
      fill("#FF0000");
      percent = floor(object[i].confidence * 100);
      text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
      noFill();
      stroke("#FF0000");
      rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
  }}



function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML="Status = Detecting object";

}

function modelLoaded() {
    console.log( " MODEL LOADED ");
    status = true;
    objectDetector.detect(img,gotResults)
} 

function gotResults(error,results) {
  if (error ) {
 console.log(error);

  }
  console.log(results);
}


