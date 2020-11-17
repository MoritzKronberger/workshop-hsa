let video;
let handPose;
let predictions = [];

//standard p5 structure
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  handPose = ml5.handpose(video, modelLoaded);
  handPose.on("predict", function(results) {
    predictions = results;
  });
  video.hide();
  noStroke();
  fill(245,245,245,150);
}


function draw(){
    background(255)
    translate(width,0)
    scale(-1,1);
    //tint(255,128)
    image(video, 0, 0, width, height);
    drawPoints();   
}


//Custom
const modelLoaded = () => {
  console.log('Model should be loaded')
}

function drawPoints (){
  // Loop through all the poses detected
  if(predictions.length>0){
      let c =0;
    for(let i=0; i<predictions[0]['landmarks'].length; i++){
        ellipse(predictions[0]['landmarks'][i][0], predictions[0]['landmarks'][i][1],2*(predictions[0]['landmarks'][i][2]*(-1)),2*(predictions[0]['landmarks'][i][2]*(-1)));
    }
  }
}