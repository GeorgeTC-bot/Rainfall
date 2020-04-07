var rndrp = [];

function setup() {
  createCanvas(800,400);
  
  rndrp[1] =  new raindrop(random(0,width),random(20,50));
}

function draw() {
  background(0); 
  if(frameCount % 5 === 0){
    rndrp.push(new raindrop(random(0,width),random(10,30)));
  }
  if(rndrp.length > 50){
    rndrp.splice(0,1);
  }
  for(var i = 1; i < rndrp.length; i++){
    rndrp[i].display();
  }
}