var rndrp = [];

function setup() {
  createCanvas(800,400);
  
  rndrp[1] =  new raindrop(random(0,width),random(20,50));
}

function draw() {
  background(0); 
  if(frameCount % 5 === 0){
    rndrp.push(new raindrop(random(0,width),random(20,50)));
  }
  for(var i = 1; i < rndrp.length; i++){
    rndrp[i].display();
  }
}