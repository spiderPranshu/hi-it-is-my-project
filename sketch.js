var database;
var drawing = [];
var currentPath = [];
function setup() {
  createCanvas(400,400);
 canvas.mousePressed(startPath);
 //Canvas.mouseRelease(endPath);
  var firebaseConfig = {
  apiKey: "AIzaSyA1lSFaquC2fSekFaDHKhlsdl1UDheaaYc",
    authDomain: "hi-it-s-my-project.firebaseapp.com",
    databaseURL: "https://hi-it-s-my-project.firebaseio.com",
    projectId: "hi-it-s-my-project",
    storageBucket: "hi-it-s-my-project.appspot.com",
    messagingSenderId: "598094132271",
    appId: "1:598094132271:web:529afcd94776672ba782da"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
   var  database = firebase.database;
}
console.log(firebase)
function startPath() {
currentPath = [];
drawing.push(currentPath);
}
//function endPath(){
  
//}

function draw() {
  background(0);  


  if (mouseIsPressed){
    var point  = {
      x : mouseX,
      y : mouseY
    }
   
  

 
  stroke(255);
  strokeWeight(4);
  noFill();
  for (var i = 0;i<drawing.length; i++ ){

var path = drawing[i];
beginShape();
  }
  for (var j = 0;j<path.length; j++ ){
vertex(path[j].x,path[j].y)
  } 
  endShape();

  }
}
