var fixedRect,movingRect; obj3;
function setup() {
  createCanvas(800,400);
  
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";

  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
  obj3= createSprite(400, 200, 80, 30);
  obj3.shapeColor="green";
  
}

function draw() {
  background(255,255,255);  
console.log(movingRect.x-fixedRect.x);
movingRect.x = mouseX
movingRect.y = mouseY
 if (isTouching(movingRect,fixedRect)){
fixedRect.shapeColor="red";
movingRect.shapeColor="red";
 } else {
fixedRect.shapeColor="green";
movingRect.shapeColor="green";
 }
 if (isTouching(movingRect,obj3)){
obj3.shapeColor="red";
movingRect.shapeColor="red";
 } else {
obj3.shapeColor="green";
movingRect.shapeColor="green";
 }

if (isTouching)
  drawSprites();
}

function isTouching(obj1,obj2){
/*collision algorithm states that whenever two objects collide, the distance between them will be the 
 sum of thier half of the width*/
if (obj2.x - obj1.x<obj2.width/2+obj1.width/2 && 
obj1.x - obj2.x<obj2.width/2+obj1.width/2 &&
obj2.y - obj1.y<obj2.height/2+obj1.height/2 &&
obj1.y - obj2.y<obj2.height/2+obj1.height/2
){
return true;
  } else {
return false;
  }

}
