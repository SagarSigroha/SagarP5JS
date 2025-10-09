let size=100
function setup() {
  createCanvas(innerWidth, innerHeight);
    
  
}
function draw(){
  background(220);
for(let j=0; j<height; j=j+size)
   {for(let i=0; i<width; i=i+size)
  {ellipse(i,j,size)}
}
}