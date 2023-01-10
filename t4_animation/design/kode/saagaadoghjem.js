window.addEventListener("load", titleScreen);
let points;
let lives;
let rndNum;

function titleScreen() {
  console.log("titleScreen");
  hideAllScreens();
  document.querySelector("#start").classList.remove("hide");
  document.querySelector("#startknap1").addEventListener("click", visInstruktion);
  document;
}
function visInstruktion() {
  console.log("visInstruktion");
  hideAllScreens();
  document.querySelector("#instruktion").classList.remove("hide");
  document.querySelector("#startknap2").addEventListener("click", spilStarter);
}
function spilStarter() {
  //Starter baggrundsmusik
  document.querySelector("#baggrundsmusik").play();
  printPoints();
  hideAllScreens();
  points = 0;
  lives = 3;
  document.querySelector("#points").textContent = points;
  document.querySelector("#lives").textContent = lives;
  //timer starter
  document.querySelector("#flaske").classList.add("flasketimer");
  document.querySelector("#vin").addEventListener("animationend", stopSpillet);

  //postion og animation – vand
  rndNum = generateRandomNumber(10);
  document.querySelector("#vand_container").classList.add("pos" + rndNum);
  document.querySelector("#vand_container").classList.add("fald");

  document.querySelector("#vand_container2").classList.add("pos" + rndNum);
  document.querySelector("#vand_container2").classList.add("fald");

  document.querySelector("#vand_container3").classList.add("pos" + rndNum);
  document.querySelector("#vand_container3").classList.add("fald");

  //postion og animation – øl
  rndNum = generateRandomNumber(10);
  document.querySelector("#oel_container").classList.add("pos" + rndNum);
  document.querySelector("#oel_container").classList.add("fald");

  document.querySelector("#oel_container2").classList.add("pos" + rndNum);
  document.querySelector("#oel_container2").classList.add("fald");

  //postion og animation – cognac
  rndNum = generateRandomNumber(10);
  document.querySelector("#cognac_container").classList.add("pos" + rndNum);
  document.querySelector("#cognac_container").classList.add("fald");

  //Elementerne forsvinder, når man klikker
  document.querySelector("#vand_container").addEventListener("click", forsvind_glas);
  document.querySelector("#vand_container").addEventListener("animationiteration", genstartVand);

  document.querySelector("#vand_container2").addEventListener("click", forsvind_glas2);
  document.querySelector("#vand_container2").addEventListener("animationiteration", genstartVand2);

  document.querySelector("#vand_container3").addEventListener("click", forsvind_glas3);
  document.querySelector("#vand_container3").addEventListener("animationiteration", genstartVand3);

  document.querySelector("#oel_container").addEventListener("click", forsvind_oel);
  document.querySelector("#oel_container").addEventListener("animationiteration", genstartOel);

  document.querySelector("#oel_container2").addEventListener("click", forsvind_oel2);
  document.querySelector("#oel_container2").addEventListener("animationiteration", genstartOel2);

  document.querySelector("#cognac_container").addEventListener("click", forsvind_cognac);
  document.querySelector("#cognac_container").addEventListener("animationiteration", genstartCog);
}

function forsvind_glas() {
  document.querySelector("#vand_container").removeEventListener("click", forsvind_glas);

  document.querySelector("#vand_sprite").classList.add("forsvind");

  lives = lives - 1;
  document.querySelector("#lives").textContent = lives;
  if (lives <= 0) {
    stopSpillet();
  }
  //Afspiller alarm-lyd
  document.querySelector("#lyd_alarm").play();
  document.querySelector("#vand_container").addEventListener("animationiteration", genstartVand);
}
function forsvind_glas2() {
  document.querySelector("#vand_container2").removeEventListener("click", forsvind_glas2);

  document.querySelector("#vand_sprite2").classList.add("forsvind");

  lives = lives - 1;
  document.querySelector("#lives").textContent = lives;
  if (lives <= 0) {
    stopSpillet();
  }
  //Afspiller alarm-lyd
  document.querySelector("#lyd_alarm").play();
  document.querySelector("#vand_container2").addEventListener("animationiteration", genstartVand2);
}
function forsvind_glas3() {
  document.querySelector("#vand_container3").removeEventListener("click", forsvind_glas3);

  document.querySelector("#vand_sprite3").classList.add("forsvind");

  lives = lives - 1;
  document.querySelector("#lives").textContent = lives;
  if (lives <= 0) {
    stopSpillet();
  }
  //Afspiller alarm-lyd
  document.querySelector("#lyd_alarm").play();

  document.querySelector("#vand_container3").addEventListener("animationiteration", genstartVand3);
}
function forsvind_oel() {
  document.querySelector("#oel_sprite").classList.add("forsvind");
  document.querySelector("#oel_container").addEventListener("animationiteration", genstartOel);
  addPoint();
  printPoints();
  //Afspiller glas-lyd
  document.querySelector("#lyd_glas").play();
}
function forsvind_oel2() {
  document.querySelector("#oel_sprite2").classList.add("forsvind");
  document.querySelector("#oel_container2").addEventListener("animationiteration", genstartOel2);
  addPoint();
  printPoints();
  //Afspiller glas-lyd
  document.querySelector("#lyd_glas").play();
}
function forsvind_cognac() {
  document.querySelector("#cognac_sprite").classList.add("forsvind");
  document.querySelector("#cognac_container").addEventListener("animationiteration", genstartCog);
  addPoint();
  printPoints();
  //Afspiller glas-lyd
  document.querySelector("#lyd_glas").play();
}

//Random position
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function addPoint() {
  points = points + 1;
}

function printPoints() {
  document.querySelector("#points").textContent = points;
}

//Genstart 'Vand'
function genstartVand() {
  document.querySelector("#vand_container").removeEventListener("animationend", genstartVand);

  //fjerner alle klasser fra container og sprite
  document.querySelector("#vand_container").classList = "";
  document.querySelector("#vand_sprite").classList = "";

  //force reflow
  document.querySelector("#vand_container").offsetLeft;

  //genstarter container faldeanimation
  document.querySelector("#vand_container").classList.add("fald");

  rndNum = generateRandomNumber(10);

  document.querySelector("#vand_container").classList.add("pos" + rndNum);

  document.querySelector("#vand_container").addEventListener("click", forsvind_glas);
}

//Genstart 'Vand2'
function genstartVand2() {
  document.querySelector("#vand_container2").removeEventListener("animationend", genstartVand2);

  //fjerner alle klasser fra container og sprite
  document.querySelector("#vand_container2").classList = "";
  document.querySelector("#vand_sprite2").classList = "";

  //force reflow
  document.querySelector("#vand_container2").offsetLeft;

  //genstarter container faldeanimation
  document.querySelector("#vand_container2").classList.add("fald");

  rndNum = generateRandomNumber(10);

  document.querySelector("#vand_container2").classList.add("pos" + rndNum);

  document.querySelector("#vand_container2").addEventListener("click", forsvind_glas2);
}

//Genstart 'Vand3'
function genstartVand3() {
  document.querySelector("#vand_container3").removeEventListener("animationend", genstartVand3);

  //fjerner alle klasser fra container og sprite
  document.querySelector("#vand_container3").classList = "";
  document.querySelector("#vand_sprite3").classList = "";

  //force reflow
  document.querySelector("#vand_container3").offsetLeft;

  //genstarter container faldeanimation
  document.querySelector("#vand_container3").classList.add("fald");

  rndNum = generateRandomNumber(10);

  document.querySelector("#vand_container3").classList.add("pos" + rndNum);

  document.querySelector("#vand_container3").addEventListener("click", forsvind_glas3);
}

//Genstart 'Øl'
function genstartOel() {
  document.querySelector("#oel_container").removeEventListener("animationend", genstartOel);

  //fjerner alle klasser fra container og sprite
  document.querySelector("#oel_container").classList = "";
  document.querySelector("#oel_sprite").classList = "";

  //force reflow
  document.querySelector("#oel_container").offsetLeft;

  //genstarter container faldeanimation
  document.querySelector("#oel_container").classList.add("fald");

  rndNum = generateRandomNumber(10);

  document.querySelector("#oel_container").classList.add("pos" + rndNum);

  document.querySelector("#oel_container").addEventListener("click", forsvind_oel);
}

//Genstart 'Øl2'
function genstartOel2() {
  document.querySelector("#oel_container2").removeEventListener("animationend", genstartOel2);

  //fjerner alle klasser fra container og sprite
  document.querySelector("#oel_container2").classList = "";
  document.querySelector("#oel_sprite2").classList = "";

  //force reflow
  document.querySelector("#oel_container2").offsetLeft;

  //genstarter container faldeanimation
  document.querySelector("#oel_container2").classList.add("fald");

  rndNum = generateRandomNumber(10);

  document.querySelector("#oel_container2").classList.add("pos" + rndNum);

  document.querySelector("#oel_container2").addEventListener("click", forsvind_oel2);
}

//Genstart 'Cognac'
function genstartCog() {
  document.querySelector("#cognac_container").removeEventListener("animationend", genstartCog);

  //fjerner alle klasser fra container og sprite
  document.querySelector("#cognac_container").classList = "";
  document.querySelector("#cognac_sprite").classList = "";

  //force reflow
  document.querySelector("#cognac_container").offsetLeft;

  //genstarter container faldeanimation
  document.querySelector("#cognac_container").classList.add("fald");

  rndNum = generateRandomNumber(10);

  document.querySelector("#cognac_container").classList.add("pos" + rndNum);

  document.querySelector("#cognac_container").addEventListener("click", forsvind_cognac);
}
function stopSpillet() {
  console.log("StopSpillet");
  if (lives === 0) {
    gameover();
  } else {
    levelcomplete();
  }
  if (points >= 15) {
    levelcomplete();
  } else {
    gameover();
  }
  document.querySelector("#flaske").classList.remove("flasketimer");
  document.querySelector("#vin").removeEventListener("animationend", stopSpillet);
}

function levelcomplete() {
  console.log("levelcomplete");
  document.querySelector("#vand_container").classList.remove("fald");
  document.querySelector("#oel_container").classList.remove("fald");
  document.querySelector("#cognac_container").classList.remove("fald");
  document.querySelector("#vand_container2").classList.remove("fald");
  document.querySelector("#oel_container2").classList.remove("fald");
  document.querySelector("#vand_container3").classList.remove("fald");

  document.querySelector("#vand_container").removeEventListener("animationend", genstartVand);
  document.querySelector("#oel_container").removeEventListener("animationend", genstartOel);
  document.querySelector("#cognac_container").removeEventListener("animationend", genstartCog);
  document.querySelector("#vand_container2").removeEventListener("animationend", genstartVand2);
  document.querySelector("#oel_container2").removeEventListener("animationend", genstartOel2);
  document.querySelector("#vand_container3").removeEventListener("animationend", genstartVand3);
  hideAllScreens();
  document.querySelector("#levelcomplete").classList.remove("hide");
  document.querySelector("#startigen2").addEventListener("click", spilStarter);
  //Afspiller timesup-lyd
  document.querySelector("#timesup").play();
}

function gameover() {
  console.log("gameover");
  document.querySelector("#vand_container").classList.remove("fald");
  document.querySelector("#oel_container").classList.remove("fald");
  document.querySelector("#cognac_container").classList.remove("fald");
  document.querySelector("#vand_container2").classList.remove("fald");
  document.querySelector("#oel_container2").classList.remove("fald");
  document.querySelector("#vand_container3").classList.remove("fald");

  document.querySelector("#vand_container").removeEventListener("animationend", genstartVand);
  document.querySelector("#oel_container").removeEventListener("animationend", genstartOel);
  document.querySelector("#cognac_container").removeEventListener("animationend", genstartCog);
  document.querySelector("#vand_container2").removeEventListener("animationend", genstartVand2);
  document.querySelector("#oel_container2").removeEventListener("animationend", genstartOel2);
  document.querySelector("#vand_container3").removeEventListener("animationend", genstartVand3);

  hideAllScreens();
  document.querySelector("#gameover").classList.remove("hide");
  document.querySelector("#startigen1").addEventListener("click", spilStarter);
  //Afspiller timesup-lyd
  document.querySelector("#timesup").play();
}

function hideAllScreens() {
  console.log("hideAllScreens");
  document.querySelector("#gameover").classList.add("hide");
  document.querySelector("#levelcomplete").classList.add("hide");
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#instruktion").classList.add("hide");
}
