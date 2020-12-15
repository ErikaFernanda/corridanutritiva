
function setup() {
  createCanvas(wTela, hTela);
}
var wItem = 90
var hItem = 90
var homeSizeW = 100
var homeSizeH = 100

var posicaoYitem1
var posicaoXitem1
var pts = 0;

var movimentoHomer = 0;
var telaMenu = true;
var telaJogo = false;
var telaInstrucao = false;
var telaPause = false;

var wTela = 1200;
var hTela = 600;
var contadorMovimento = -100;
var homerposicaoY;

var recw = 200;
var rech = 40;
var p1 = (wTela / 2) - (recw / 2);
var p2 = (hTela / 2) - (rech / 2);

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
var instrucoes;
var fechar;
var titulo;

var homebem;
var homenormal
var homecansado
var homemuitocansado
var statusSaude;

var sorvete;
var brigadeiro;
var pause;

var listaLipidios;
var listaCarboidratos;
var listaProteinas;
var listaTodos;
var listaAgua;
var listaBesteiras;

var besteira1;
var besteira2;
var besteira3;
var besteira4;
var besteira5;
var nivel = 0;
var energia = 2000;
var saude = 2000;
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

var imgenergia0
var imgenergia1;
var imgenergia2;
var imgenergia3;
var imgenergia4

var bateria5;
var bateria4
var bateria3
var bateria2
var bateria1;

var frutas;


function preload() {

  homebem = loadImage('bem.png');
  homenormal = loadImage('normal.png');
  homecansado = loadImage('cansado.png');
  homemuitocansado = loadImage('muitocansado.png');
  bateria5 = loadImage('bateria5.png');
  bateria4 = loadImage('bateria4.png');
  bateria3 = loadImage('bateria3.png');
  bateria2 = loadImage('bateria2.png');


  besteira5 = loadImage('besteira5.png');
  besteira4 = loadImage('besteira4.png');
  besteira3 = loadImage('besteira3.png');
  besteira2 = loadImage('besteira2.jpg');
  besteira1 = loadImage('besteira1.png');
  listaBesteiras = [besteira1, besteira2, besteira3, besteira4, besteira5]

  pause = loadImage('pause.png');

  imgenergia1 = loadImage('energia.png');
  imgenergia2 = loadImage('energia2.png');
  imgenergia3 = loadImage('energia3.png');
  imgenergia4 = loadImage('energia4.png');

  imgenergia0 = imgenergia1;
  statusSaude = homebem
  bateria1 = bateria5
  imggif = loadImage('gif.gif');
  imggif2 = loadImage('food2.gif');
  img = loadImage('img8.jpg');
  cenario = loadImage('rua1.jpg');
  instrucoes = loadImage('instrucoes.png');
  fechar = loadImage('fechar.png');
  titulo = loadImage('titulo.gif');



  agua = loadImage('agua.png');
  frutas = loadImage('frutas.png');
  listaAgua = [agua, frutas]
  batata_c = loadImage('batata_c.png')
  mel_c = loadImage('mel_c.png')
  milho_c = loadImage('milho_c.png')
  pao = loadImage('pao.png');
  listaCarboidratos = [batata_c, mel_c, milho_c, pao]

  queijo_p = loadImage('queijo_p.png');
  carne_p = loadImage('carne_p.png');
  ovo_p = loadImage('ovo_p.png');
  leite_p = loadImage('leite_p.png');
  listaProteinas = [queijo_p, carne_p, ovo_p, leite_p]

  coco_l = loadImage('coco_l.png');
  manteiga_l = loadImage('manteiga_l.png');
  // castanha_l = loadImage('castanha_l.png');
  abacate_l = loadImage('abacate_l.png');
  listaLipidios = [coco_l, manteiga_l, abacate_l]




  listaTodos = [listaCarboidratos, listaLipidios, listaProteinas, listaBesteiras, listaAgua]

}

function draw() {

  if (pts >= 110) {
    atingiuPontuacao()
  }
  if (telaMenu == true) {
    verMenu();
  }
  if (telaJogo == true) {
    verJogo();
  }
  if (telaInstrucao == true) {
    verInstrucoes();
  }
  if (telaPause == true) {
    verPause();
  }
}
function verMenu() {
  contadorMovimento = contadorMovimento + 3;
  if (contadorMovimento >= wTela) {
    contadorMovimento = -100;
  }
  image(img, 0, 0, wTela, hTela);
  criarBtn1();
  criarBtn2();
  image(imggif2, (wTela / 2) - 150, hTela - 200, 300, 130);
  image(imggif, contadorMovimento, hTela - 140, 130, 130);
  image(titulo, (wTela / 2) - 400, 100, 800, 100);
  if (mouseIsPressed && (mouseX > p1 && mouseX < p1 + recw) && (mouseY > p2 && mouseY < p2 + rech)) {
    telaMenu = false
    telaJogo = true
    telaInstrucao = false
  }
  if (mouseIsPressed && ((mouseY > p2 + 50 && mouseY < p2 + 50 + rech) && (mouseX > p1 && mouseX < p1 + recw))) {
    telaMenu = false
    telaJogo = false
    telaInstrucao = true
  }
}
function verJogo() {
  energia = energia - 1;
  saude = saude - 1;
  movimentoCenario1()
  homerposicaoY = hTela - 200 - (movimentoHomer * 10)

  fill(100, 100, 100);
  rect(wTela - (wTela / 4) * 4 + 10, 50, 110, 20);
  fill(100, 20, 100);
  rect(wTela - (wTela / 4) * 4 + 10, 50, pts, 20);

  fill(300, 300, 100);
  rect(wTela - 250, 4, textWidth(" Energia "), 40, 20);
  fill(0, 0, 0);
  text("Energia", wTela - 250, 35);
  image(bateria1, wTela - 280, 50, 155, 50);
  fill(300, 300, 100);
  rect(wTela - (wTela / 4) * 2, 4, textWidth(" Reserva Energetica "), 40, 20);
  fill(0, 0, 0);
  text("Reserva energética", wTela - (wTela / 4) * 2, 35);
  if (imgenergia0 != null) {
    image(imgenergia0, wTela - (wTela / 4) * 2, 50, 50, 50);
  }
  fill(300, 300, 100);
  rect(wTela - (wTela / 4) * 3, 4, textWidth(" Saúde Física "), 40, 20);
  fill(0, 0, 0);
  text("Saúde Física", wTela - (wTela / 4) * 3, 35);
  image(statusSaude, wTela - (wTela / 4) * 3 + 15, 50, 80, 80);
  fill(300, 300, 100);
  rect(wTela - (wTela / 4) * 4 + 10, 4, 100, 40, 20);
  fill(0, 0, 0);
  text("Nivel : " + nivel, wTela - (wTela / 4) * 4 + 10, 35);
  itensCenario()

  if (saude < 0) {
    telaMenu = true
    telaJogo = false;
    resetarValores();
    alert("SUA SAÚDE FICOU MUITO RUIM E VOCÊ PERDEU O JOGO")
  }

  if (energia < 0) {
    telaMenu = true
    telaJogo = false
    resetarValores();
    alert("VOCÊ FICOU COM BAIXA ENERGIA E PERDEU O JOGO ")
  }

  if (saude > 1500) {
    statusSaude = homebem
  }
  if (saude > 1000 && saude < 1500) {
    statusSaude = homenormal
  } else if (saude > 500 && saude < 1000) {
    statusSaude = homecansado
  }
  if (saude > 0 && saude < 500) {
    statusSaude = homemuitocansado
  }

  if (energia > 1500) {
    bateria1 = bateria5
  }
  if (energia > 1000 && energia < 1500) {
    bateria1 = bateria4
  }
  if (energia > 500 && energia < 1000) {
    bateria1 = bateria3
  }
  if (energia > 0 && energia < 500) {
    bateria1 = bateria2
  }

  var posicaoChoque = posicaoYitem1 - (homerposicaoY + (homeSizeH / 3))

  if (posicaoXitem1 < 25 && (posicaoChoque > -25 && posicaoChoque < 25)) {
    if (listaAgua.includes(item) == true) {
      energia = energia + 500;
      saude = saude + 500;
      if (reserva < 4) {
        reserva = reserva + 2;
      }

      fill(0, 300, 100);
      rect(wTela - 180, 140, textWidth("Água") + 8, 60);
      fill(0, 0, 0);
      text("Água", wTela - 180, 180);

    }
    if (listaCarboidratos.includes(item) == true) {
      energia = energia + 100;
      saude = saude + 50
      fill(0, 300, 100);
      rect(wTela - 180, 140, textWidth("Carboidrato") + 8, 60);
      fill(0, 0, 0);
      text("Carboidrato", wTela - 180, 180);

    }
    if (listaBesteiras.includes(item) == true) {
      energia = energia + 100;
      saude = saude - 50
      fill(0, 300, 100);
      rect(wTela - 180, 140, textWidth("Carboidrato") + 8, 60);
      fill(0, 0, 0);
      text("Carboidrato", wTela - 180, 180);

    }
    if (listaProteinas.includes(item) == true) {
      saude = saude + 200
      fill(0, 300, 100);
      rect(wTela - 180, 140, textWidth("Proteina") + 8, 60);
      fill(0, 0, 0);
      text("Proteina", wTela - 180, 180);

    }
    if (listaLipidios.includes(item) == true) {
      // alert("lipidios"+ reserva)
      fill(0, 300, 100);
      rect(wTela - 180, 140, textWidth("Lipidio") + 8, 60);
      fill(0, 0, 0);
      text("Lipidio", wTela - 180, 180);
      if (reserva >= 4) {
        saude = saude - 100;
      }
      if (reserva < 4) {
        reserva = reserva + 0.05
      }
      if (reserva > 4) {
        reserva = 4;
      }


      if (reserva >= 0 && reserva < 1) {
        imgenergia0 = imgenergia1
      }
      else if (reserva >= 1 && reserva < 2) {
        imgenergia0 = imgenergia2
      }
      else if (reserva >= 2 && reserva < 3) {
        imgenergia0 = imgenergia3
      }
      else if (reserva >= 3 && reserva <= 4) {
        imgenergia0 = imgenergia4
      }
    }
    pts = pts + 2;
  }

  contadorMovimento = contadorMovimento - (nivel + 4);
  if (contadorMovimento < (wTela) * -1) {
    contadorMovimento = 0
    sorteioItens()
  }




  // rect(posicaowitem1,posicaohitem1,wItem,hItem)
  // rect( 0, hTela - 200 - (movimentoHomer * 10), 100, 100)
  image(imggif, 0, homerposicaoY, homeSizeW, homeSizeH);

}
function criarBtn1() {

  fill(c1btn1, c2btn1, c3btn1)
  rect(p1, p2, recw, rech, 20);
  fill(0, 0, 0);
  textSize(rech / 2);
  textStyle(BOLD);
  let txtw1 = textWidth("Iniciar");
  text('Iniciar', (wTela / 2) - (txtw1 / 2), (hTela / 2));

}
function criarBtn2() {

  fill(c1btn2, c2btn2, c3btn2)
  rect(p1, p2 + 50, recw, rech, 20);
  fill(0, 0, 0);
  textSize(rech / 2);
  textStyle(BOLD);
  let txtw2 = textWidth("Instruções")
  text('Instruções', (wTela / 2) - (txtw2 / 2), (hTela / 2) + 50);

}
function mouseMoved() {

  if (telaMenu == true) {
    if ((mouseX > p1 && mouseX < p1 + recw) && (mouseY > p2 && mouseY < p2 + rech)) {
      c2btn1 = 90
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
    if (movimentoHomer < 0) {
      movimentoHomer++
    }

  } else if (keyCode === DOWN_ARROW) {
    if (movimentoHomer > -10) {
      movimentoHomer--
    }

  }
  else if (keyCode === ESCAPE) {

    telaJogo = false;
    telaPause = true;

  }
  else if (keyCode === ENTER) {

    // alert(reserva + " -- " + energia + " -- " + saude)

    if (reserva <= 0) {
      alert("você não pegou lipidios suficientes")
      return
    }
    if (energia <= 2000) {
      energia = energia + 500;
    }

    if (reserva > 0 && reserva <= 1) {
      reserva = 0;
      imgenergia0 = null
    } else if (reserva > 1 && reserva <= 2) {
      reserva = 1
      imgenergia0 = imgenergia1
    } else if (reserva > 2 && reserva <= 3) {
      reserva = 2
      imgenergia0 = imgenergia2
    } else if (reserva > 3 && reserva <= 4) {
      reserva = 3
      imgenergia0 = imgenergia3
    }
  }
}
function sorteioItens() {

  posicaoYitem1 = random(hTela - 50, hTela - 200);

  var list = random(listaTodos);
  let r = random(list);
  item = r
  posicaoXitem1 = wTela + contadorMovimento

  image(item, posicaoXitem1, posicaoYitem1, wItem, hItem);


}
function movimentoCenario1() {
  image(cenario, contadorMovimento, 0, wTela, hTela);
  image(cenario, contadorMovimento + wTela, 0, wTela, hTela);

}
function itensCenario() {
  if (item != null) {

    posicaoXitem1 = wTela + contadorMovimento
    image(item, posicaoXitem1, posicaoYitem1, 50, 50);

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
  image(instrucoes, (wTela / 2) - (sizex / 2), 80, sizex, sizey);
  image(fechar, (wTela / 2) + (sizex / 2) - 40, 80, 40, 40);
  var c = (wTela / 2) + (sizex / 2) - 40;


  if (mouseIsPressed && ((mouseY >= 80 && mouseY < 110) && (mouseX > c && mouseX < c + 100))) {

    telaMenu = true
    telaJogo = false
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


  image(pause, (wTela / 2) - (sizex / 2), 80, sizex, sizey);


  if (mouseIsPressed && ((mouseX > retx && mouseX < retx + 250) && (mouseY > rety1 && mouseY < rety1 + 80))) {
    // alert("restart")
    telaPause = false
    telaJogo = true
    resetarValores();

  }
  if (mouseIsPressed && ((mouseX > retx && mouseX < retx + 250) && (mouseY > rety2 && mouseY < rety2 + 80))) {
    // alert("return")
    telaPause = false
    telaJogo = true
  }
  if (mouseIsPressed && ((mouseX > retx && mouseX < retx + 250) && (mouseY > rety3 && mouseY < rety3 + 80))) {
    // alert("exit")
    telaPause = false
    telaMenu = true
    resetarValores();

  }
}
function resetarValores() {
  nivel = 0
  pts = 0
  energia = 2000
  saude = 2000
  reserva = 1
  imgenergia0 = imgenergia1;
  statusSaude = homebem
  bateria1 = bateria5



}