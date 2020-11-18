let bodypix;
let video;
let prediction;
let img;
let videoLoaded = false;

const options = {
    outputStride: 8, // 8, 16, or 32, default is 16
    segmentationThreshold: 0.3 // 0 - 1, defaults to 0.5 
}

function preload(){
    
}

function setup(){
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    bodypix =  new ml5.bodyPix(options);

    const vid = document.querySelector('video');

    vid.addEventListener('loadeddata', (event) => {
        bodypix.segment(video, gotResults);
    });
}
    


function draw(){
    translate(width, 0)
    scale(-1, 1);

    image(video, 0, 0);
}

function modelReady() {
  // segment the image given
  
}

function gotResults(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
  prediction = result;
  image(prediction.personMask);
  //prediction.backgroundMask();
  // log the result
  bodypix.segment(video, gotResults);
}