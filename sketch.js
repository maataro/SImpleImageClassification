
let mobilenet; // Classifier
let puffin;

function modelReady() {
  console.log('Model is ready!!!');
  mobilenet.predict(puffin, gotResults); 
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].label;
    let confidence = results[0].confidence;
    fill(0);
    textSize(64);
    text(label, 10, height - 10);
    createP(label);
    createP(confidence);
  }
}

function imageReady() {
  image(puffin, 0, 0, width, height);
}

function setup() {
 createCanvas(640, 480);

 puffin = createImg('images/tosainu.jpg', imageReady);  
 puffin.hide();  // Canvas上にのみイメージを配置したい。
 background(0);

 // generate Image classification object (model name, callback function)
 mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}