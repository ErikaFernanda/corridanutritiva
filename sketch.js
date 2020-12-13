function setup() {
  createCanvas(w1, h1);
}

var hp
var hi
var wi
var pts = 0;
var hitem = 0;
var pulo = 0;
var tela1 = true;
var tela2 = false;
var telaInstrucao = false;
var telaPause = false;
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

var imggif;
var imggif2;
var img;
var cenario;
var agua;
// var melancia;
var instrucoes;
var fechar;
var titulo;

var imgreserva;

var imgenergia;
var gifhomealegre;
var bateria5;
var sorvete;
var brigadeiro;
var pause;
var nivel = 0;
var sortear = 0;

var listaLipidios;
var listaCarboidratos;
var listaProteinas;
var listaTodos;

var energia = 1000;
var saude = 1000;
var reserva = 1;

var queijo_p
var carne_p
var ovo_p
var leite_p

var pao;
var batata_c;
var mel_c;
var milho_c

var coco_l
var manteiga_l
var castanha_l
var abacate_l



function preload() {

  gifhomealegre = loadImage('Homealegre.gif');
  bateria5 = loadImage('bateria5.png');
  pause = loadImage('pause.png');
  imgreserva = loadImage('reserva.svg');
  imgenergia = loadImage('energia.png');

  imggif = loadImage('gif.gif');
  imggif2 = loadImage('food2.gif');
  img = loadImage('img8.jpg');
  cenario = loadImage('rua2.jpg');
  instrucoes = loadImage('instrucoes.png');
  fechar = loadImage('fechar.png');
  titulo = loadImage('titulo.gif');

  agua = loadImage('agua.png');

  // melancia = loadImage('melancia.png');
  brigadeiro = loadImage('brigadeiro.png')
  sorvete = loadImage('sorvete.png');

  batata_c = loadImage('batata_c.png')
  mel_c = loadImage('mel_c.png')
  milho_c = loadImage('milho_c.png')
  pao = loadImage('pao.png');
  listaCarboidratos=[batata_c,mel_c,milho_c,pao]

  queijo_p = loadImage('queijo_p.png');
  carne_p = loadImage('carne_p.png');
  ovo_p = loadImage('ovo_p.png');
  leite_p = loadImage('leite_p.png');
  listaProteinas=[queijo_p,carne_p,ovo_p,leite_p]

  coco_l = loadImage('coco_l.png');
  manteiga_l = loadImage('manteiga_l.png');
  castanha_l = loadImage('castanha_l.png');
  abacate_l = loadImage('abacate_l.png');
 listaLipidios =[coco_l,manteiga_l,castanha_l,abacate_l]

  listaTodos = [listaCarboidratos,listaLipidios,listaProteinas]

}

function draw() {

  if (pts >= 110) {
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
    image(titulo, (w1 / 2) - 400, 100, 800, 100);
    if (mouseIsPressed && (mouseX > p1 && mouseX < p1 + recw) && (mouseY > p2 && mouseY < p2 + rech)) {
      tela1 = false
      tela2 = true
    }
    if (mouseIsPressed && ((mouseY > p2 + 50 && mouseY < p2 + 50 + rech) && (mouseX > p1 && mouseX < p1 + recw))) {
      // alert("sdfdf")
      tela1 = false
      tela2 = false
      telaInstrucao = true
    }
  }
  if (tela2 == true) {
    if (parseInt(hp) - 50 - parseInt(hi) < 5 && parseInt(wi) < 80) {
      if(listaCarboidratos.includes(item)==true){
        bateria5 = loadImage('bateria2.png');
        energia=energia+20;
      }
      if(listaProteinas.includes(item)==true){
        saude=saude+20
      }
      if(listaLipidios.includes(item)==true){
        if(reserva<4){
          reserva=reserva+1
        }
        
      }
      pts++
    }

    c = c - (nivel + 4);
    if (c < (w1) * -1) {
      c = 0
      sorteioItens()
    }

    movimentoCenario1()
    fill(100, 100, 100);
    rect(w1 - (w1 / 4) * 4 + 10, 50, 110, 20);
    fill(100, 20, 100);
    rect(w1 - (w1 / 4) * 4 + 10, 50, pts, 20);

    fill(300, 300, 100);
    rect(w1 - 250, 4, textWidth(" Energia "), 40, 20);
    fill(0, 0, 0);
    text("Energia", w1 - 250, 35);
    image(bateria5, w1 - 280, 50, 155, 50);


    // text(pts, w1 - 250, 25);

    fill(300, 300, 100);
    rect(w1 - (w1 / 4) * 2, 4, textWidth(" Reserva Energetica "), 40, 20);
    fill(0, 0, 0);
    text("Reserva energética", w1 - (w1 / 4) * 2, 35);
    var reservax=55
    while(reserva>0){
      image(imgenergia, w1 - (w1 / 4) * 2, reservax, 50, 50);
      reservax=reservax+10
    }
    


    fill(300, 300, 100);
    rect(w1 - (w1 / 4) * 3, 4, textWidth(" Saúde Física "), 40, 20);
    fill(0, 0, 0);
    text("Saúde Física", w1 - (w1 / 4) * 3, 35);
    // image(h, w1-(w1/4)*3, 35,100,90);
    image(gifhomealegre, w1 - (w1 / 4) * 3 + 15, 50, 90, 70);
    fill(300, 300, 100);
    rect(w1 - (w1 / 4) * 4 + 10, 4, 100, 40, 20);
    fill(0, 0, 0);
    text("Nivel : " + nivel, w1 - (w1 / 4) * 4 + 10, 35);


    hp = h1 - 230 - (pulo * 10) + (130 / 2)

    image(imggif, 0, h1 - 230 - (pulo * 10), 130, 130);
    itensCenario()

  }
  if (telaInstrucao == true) {
    verInstrucoes();
  }
  if (telaPause == true) {
    verPause();
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
  else if (keyCode === ESCAPE) {

    tela2 = false;
    telaPause = true;

  }
}
function sorteioItens() {

  hitem = random(h1 - 50, h1 - 200);

  var list =random(listaTodos);
  let r = random(list);
  item = r

  hi = hitem
  wi = w1 + c
  image(item, wi, hitem, 50, 50);


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

  // tela1 = true;
  // tela2 = false
  pts = 0
  nivel = nivel + 1
}


function verInstrucoes() {
  fill(320, 320, 20, 10);
  var sizex = 800
  var sizey = 500
  image(instrucoes, (w1 / 2) - (sizex / 2), 80, sizex, sizey);
  image(fechar, (w1 / 2) + (sizex / 2) - 40, 80, 40, 40);
  var c = (w1 / 2) + (sizex / 2) - 40;


  if (mouseIsPressed && ((mouseY >= 80 && mouseY < 110) && (mouseX > c && mouseX < c + 100))) {

    tela1 = true
    tela2 = false
    telaInstrucao = false
  }

}
function verPause() {
  var sizex = 400
  var sizey = 500
  var retx = 480;
  var rety1 = 265;
  var rety2 = 365;
  var rety3 = 475;
  rect(retx, rety1, 250, 80);
  rect(retx, rety2, 250, 80);
  rect(retx, rety3, 250, 80);


  image(pause, (w1 / 2) - (sizex / 2), 80, sizex, sizey);


  if (mouseIsPressed && ((mouseX > retx && mouseX < retx + 250) && (mouseY > rety1 && mouseY < rety1 + 80))) {
    // alert("restart")
    telaPause = false
    tela2 = true
    nivel = 0
    pts = 0

  }
  if (mouseIsPressed && ((mouseX > retx && mouseX < retx + 250) && (mouseY > rety2 && mouseY < rety2 + 80))) {
    // alert("return")
    telaPause = false
    tela2 = true
  }
  if (mouseIsPressed && ((mouseX > retx && mouseX < retx + 250) && (mouseY > rety3 && mouseY < rety3 + 80))) {
    // alert("exit")
    telaPause = false
    tela1 = true
    nivel = 0
    pts = 0


  }
}