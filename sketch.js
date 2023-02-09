function setup(){
createCanvas(450,450);
fill(66,201,227);
smooth();
noStroke();
background(255);
}
function draw(){
    if(mouseIsPressed) {
   fill(0);
  }
  
  else{
    fill(255);
  }
  ellipse(mouseX,mouseY,20,20);
}
