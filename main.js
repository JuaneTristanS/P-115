function preload() {
}

function setup() {
    canvas = createCanvas(450, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded) 

    poseNet.on('pose',gotPoses)
}

function draw() {
image(video,0,0,450,300)
}

function snapshot() {
    save("tophat_image.png");
}

function modelLoaded() {
    console.log('PoseNet is Loaded')
}

function gotPoses(results) {
    if(results.length > 0 ) {
        console.log(results);
        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);
    }
    
}