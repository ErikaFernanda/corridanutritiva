function setup() {
  createCanvas(w1, h1);
}

var hp
var hi
var wi
var pts = 0;
var hitem = 0;
var pulo = 0;
var tela1= true;
var tela2 = false;
var telaInstrucao = false;
var w1 = 1200;
var h1 = 600;
var c = -100;
var recw = 200;
var rech = 40;
var p1 = (w1 / 2) - (recw / 2);
var p2 = (h1 / 2) - (rech / 2);

var c1btn1 = 300;
var c2btn1 = 300;
var c3btn1 = 100;

var c1btn2 = 300;
var c2btn2 = 300;
var c3btn2 = 100;

let item

function preload() {
  imggif = loadImage('gif.gif');
  imggif2 = loadImage('food2.gif');
  img = loadImage('img8.jpg');
  cenario = loadImage('rua2.jpg');
  agua = loadImage('agua.png');
  melancia = loadImage('melancia.png');
  pao = loadImage('pao.png');
  instrucoes = loadImage('instrucoes.png');
  fechar = loadImage('fechar.png');
  titulo = loadImage('titulo.gif');

}

function draw() {
  if (pts >= 400) {
    atingiuPontuacao()
  }
  if (tela1 == true) {
    c = c + 3;
    if (c >= w1) {
      c = -100;
    }


    image(img, 0, 0, w1, h1);
    criarBtn1();
    criarBtn2();
    image(imggif2, (w1 / 2) - 150, h1 - 200, 300, 130);
    image(imggif, c, h1 - 140, 130, 130);
    image(titulo, (w1/2)-400, 100, 800, 100);

    if (mouseIsPressed && (mouseX > p1 && mouseX < p1 + recw) && (mouseY > p2 && mouseY < p2 + rech)) {
      tela1 = false
      tela2 = true
    }
    
    if (mouseIsPressed &&( (mouseY > p2 + 50 && mouseY < p2 + 50 + rech) && (mouseX > p1 && mouseX < p1 + recw))) {
    // alert("sdfdf")
        tela1 = false
      tela2 = false
      telaInstrucao=true
    }
  }
  if (tela2 == true) {
    
    if (parseInt(hp) - 50 - parseInt(hi) < 5 && parseInt(wi) < 80) {
      pts++
    }

    c = c - 4;
    if (c < (w1) * -1) {
      c = 0
      sorteioItens()
    }
    movimentoCenario1()

    fill(0, 0, 0);
    rect(w1-250,4 , 100, 40, 20);
    fill(300, 300, 300);
    text("energia", w1-250, 35);
    text(pts, w1-250, 25);

    fill(0, 0, 0);
    rect(w1-(w1/4)*2, 4, 100, 40, 20);
    fill(300, 300, 300);
    text("reserva",w1-(w1/4)*2, 35);
    
    fill(0, 0, 0);
    rect(w1-(w1/4)*3, 4, 100, 40, 20);
    fill(300, 300, 300);
    text("Saúde Física",w1-(w1/4)*3, 35);

    fill(0, 0, 0);
    rect(w1-(w1/4)*4, 4, 100, 40, 20);
    fill(300, 300, 300);
    text("Nivel",w1-(w1/4)*4, 35);


    hp = h1 - 230 - (pulo * 10) + (130 / 2)
    itensCenario()
    image(imggif, 0, h1 - 230 - (pulo * 10), 130, 130); 
  }
  if(telaInstrucao==true){
    verInstrucoes();

  }
}
function criarBtn1() {

  fill(c1btn1, c2btn1, c3btn1)
  rect(p1, p2, recw, rech, 20);
  fill(0, 0, 0);
  textSize(rech / 2);
  textStyle(BOLD);
  let txtw1 = textWidth("Iniciar");
  text('Iniciar', (w1 / 2) - (txtw1 / 2), (h1 / 2));

}
function criarBtn2() {

  fill(c1btn2, c2btn2, c3btn2)
  rect(p1, p2 + 50, recw, rech, 20);
  fill(0, 0, 0);
  textSize(rech / 2);
  textStyle(BOLD);
  let txtw2 = textWidth("Instruções")
  text('Instruções', (w1 / 2) - (txtw2 / 2), (h1 / 2) + 50);

}
function mouseMoved() {

  if (tela1 == true) {
    if ((mouseX > p1 && mouseX < p1 + recw) && (mouseY > p2 && mouseY < p2 + rech)) {

      tnc1 = 300
      c2btn1 = 90
      c2btn1 = 90
      console.log("btn1")

    } else {

      c1btn1 = 300
      c2btn1 = 300
      c3btn1 = 100
    }
    if ((mouseY > p2 + 50 && mouseY < p2 + 50 + rech) && (mouseX > p1 && mouseX < p1 + recw)) {

      c1btn2 = 300
      c2btn2 = 90
      c3btn2 = 90

      console.log("btn2")
    }
    else {

      c1btn2 = 300
      c2btn2 = 300
      c3btn2 = 100
    }
  }

}
function keyReleased() {


  if (keyCode === UP_ARROW) {
    if (pulo > 0) {
      pulo = pulo;
    } else {
      pulo++
    }

  } else if (keyCode === DOWN_ARROW) {
    if (pulo < -10) {
      pulo = pulo;
    } else {
      pulo--
    }

  }

}
function sorteioItens() {

  hitem = random(h1 - 50, h1 - 200);

  var vetor = [agua, melancia, pao]
  let r = random(vetor);
  item = r


}
function movimentoCenario1() {
  hi = hitem
  image(cenario, c, 0, w1, h1);
  image(cenario, c + w1, 0, w1, h1);
  //image(cenario,c+(w1)*2,0,w1,h1);


}
function itensCenario() {


  if (item != null) {
    hi = hitem
    wi = w1 + c
    image(item, wi, hitem, 50, 50);
  }

}
function atingiuPontuacao() {

  tela1 = true;
  tela2 = false
  pts = 0
}


function verInstrucoes() {
  fill(320, 320, 20,10);
  var sizex= 800
  var sizey= 500
  image(instrucoes,(w1 / 2) - (sizex / 2),80,sizex,sizey);
  image(fechar,(w1/2)+(sizex/2)-40,80,40,40);
  var c=(w1/2)+(sizex/2)-40;
  
  
  if (mouseIsPressed &&((mouseY >=80 && mouseY<110) && (mouseX >c && mouseX<c+100 ))) {

      tela1 = true
      tela2 = false
      telaInstrucao=false
    }

}