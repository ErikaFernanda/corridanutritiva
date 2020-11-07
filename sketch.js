function setup() {
  createCanvas(w1, h1);
 }
var hp 
var hi

var wi
var pts =0;
hitem=0;
var pulo=0;
var t1=true;
var t2=false;

var w1=1260;
var h1=600;
var c = -100;
var recw = 100;
var rech = 40;
var p1 = (w1/2)-(recw/2);
var p2 = (h1/2)-(rech/2);



var c1btn1=300;
var c2btn1=300;
var c3btn1=100;

var c1btn2=300;
var c2btn2=300;
var c3btn2=100;

let item

function preload() {
  imggif = loadImage('gif.gif');
  imggif2 = loadImage('food2.gif');
  img = loadImage('img8.jpg');
  cenario = loadImage('rua2.jpg');
  agua = loadImage('agua.png');
  melancia = loadImage('melancia.png');
  pao = loadImage('pao.png');
   
}

// function windowResized() {
//   w1=400
//   h1=600
//   resizeCanvas(w1, h1);
  
// }

function draw() {
if(pts>=400){
  
  atingiuPontuacao()
}
  
  
if(t1==true){
 
  c=c+3;
  if (c>=w1){
    
    c=-100;
  }
 
  
  image(img,0,0,w1,h1);
  criarBtn1();
  criarBtn2();
  image(imggif2,(w1/2)-150,h1-130,300,130);
  image(imggif,c,h1-140,130,130);
  
   if (mouseIsPressed && (mouseX > p1 && mouseX<p1+recw)&& (mouseY > p2 && mouseY<p2+rech)) {
       t1=false
     t2=true
    }
}
if(t2==true){
  console.log(parseInt(wi)+"")
  if(parseInt(hp)-50-parseInt(hi)<5&&parseInt(wi)<80){
    pts++
  }
  
  c=c-4;
  if (c<(w1)*-1){
    c=0  
    sorteioItens()
  }
  movimentoCenario1()
  fill(0,0,0);
  rect((w1/2)-50/2, 2, 50, 40, 20);
  fill(300,300,300);
  text(pts,(w1/2)+30-(40),28);
  hp= h1-230-(pulo*10) +(130/2)
  itensCenario()
  image(imggif,0, h1-230-(pulo*10),130,130);   
  
  }
}
function criarBtn1(){
    
  fill(c1btn1,c2btn1,c3btn1)
  rect(p1, p2, recw, rech, 20);  
  fill(0,0,0);
  textSize(rech/3);
  let txtw1 = textWidth("Iniciar");
  text('Iniciar agora',(w1/2)-(txtw1/2),(h1/2));

}
function criarBtn2(){
  
  fill(c1btn2,c2btn2,c3btn2)
  rect(p1, p2+50, recw, rech, 20);     
  fill(0,0,0);
  textSize(rech/3);  
  let txtw2 =textWidth("Instruções")
  text('Instruções',(w1/2)-(txtw2/2),(h1/2)+50);
  
}
function mouseMoved() {
  
  if(t1==true ){
    if ((mouseX > p1 && mouseX<p1+recw)&& (mouseY > p2 && mouseY<p2+rech)) {
       
        tnc1=300
        c2btn1=90
        c2btn1=90
     console.log("btn1")
  
      }else{
    
        c1btn1=300
        c2btn1=300
        c3btn1=100
    }
     if((mouseY > p2+50 && mouseY<p2+50+rech)&&(mouseX > p1 && mouseX<p1+recw)) {

        c1btn2=300
        c2btn2=90
        c3btn2=90
        console.log("btn2")
      }
    else{
    
        c1btn2=300
        c2btn2=300
        c3btn2=100
    }
  }
  
}
 function keyReleased() {    
  
  
   if (keyCode === UP_ARROW ) {
     if(pulo>0){
       pulo=pulo;
     }else{
       pulo++
     }
  
  } else if (keyCode === DOWN_ARROW) {
     if(pulo<-10){
       pulo=pulo;
     }else{
       pulo--
     }
    
  }
   
}
function sorteioItens(){
  
  hitem=random(h1-50,h1-200);
  
  var vetor = [agua,melancia,pao]
  let r = random(vetor);
  item=r


}
function movimentoCenario1(){
  hi= hitem
  image(cenario,c,0,w1,h1);
  image(cenario,c+w1,0,w1,h1);
  //image(cenario,c+(w1)*2,0,w1,h1);
  
 
}
function itensCenario(){
  
  
  if(item!=null){
    hi= hitem
    wi= w1+c
    image(item,wi,hitem,50,50); 
  }
  
}
function atingiuPontuacao(){
  
  t1=true;
  t2=false
  pts=0
}
