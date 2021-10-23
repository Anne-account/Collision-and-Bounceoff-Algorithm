var fixedrect,movingrect;

function setup() {
  createCanvas(400,400);

  fixedrect=createSprite(200,200,50,50);
  movingrect=createSprite(200,200,50,50);

  fixedrect.shapeColor="yellow";
  movingrect.shapeColor="red";

  movingrect.debug=true;
  fixedrect.debug=true;
}

function draw() {
  background(0);  

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;


  console.log(movingrect.x-fixedrect.x);

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
      fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2 )
  {

    fixedrect.shapeColor="blue";
    movingrect.shapeColor="blue";
  }
else {

  fixedrect.shapeColor="yellow";
  movingrect.shapeColor="red";
}

  drawSprites();
}
/*

var fixedrect,movingrect;
function setup() {
  createCanvas(400,400);
  fixedrect=createSprite(200,100,50,50);
  movingrect=createSprite(200,300,50,50);
  movingrect.shapeColor="red";
  fixedrect.shapeColor="yellow";
  movingrect.debug=true;
  fixedrect.debug=true; 
  movingrect.velocityY=-5;
  fixedrect.velocityY=5;
}

function draw() {
  background(0);  
  //console.log(movingrect.x-fixedrect.x);
  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
     fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2 )
  {
    movingrect.velocityX=movingrect.velocityX * (-1);
    fixedrect.velocityX=fixedrect.velocityX * (-1);
  }
  if(movingrect.y-fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
    fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2 )
  {
    movingrect.velocityY=movingrect.velocityY * (-1);
    fixedrect.velocityY=fixedrect.velocityY * (-1);
  }
  drawSprites();
}*/