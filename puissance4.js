/*
JS | Activité 2
*/

document.querySelector("#jeu").style.visibility = "hidden";

var j1 = new Object();
var j2 = new Object();

var current_player = 1;

j1.ins = false;
j2.ins = false;

//Rempli le plateau de pions
function init_plateau() {
  var plateau = document.querySelector("#plateau");
  /* Remplir le plateau */
  var divplateau = document.createElement("div");
  for (var i = 0; i < 49; i++) {
    /* Remplir le plateau des balises div ayant la class pion -> <div class="pion"></div> */
    var divpion = document.createElement("div");
    divpion.className = "pion";
    divpion.id = i;
    plateau.appendChild(divpion);
  }
  document.querySelector("#jeu").style.visibility = "visible";
}

//Fontion d'inscription
function ins(player) {
  // Completer pour vérifier l'inscription
  if (player == 1) {
    j1.ins = true;
    var x = document.getElementsByName("j1");
    x = x[0];
    /* Mettre le nom du joueur dans la balise #j1-name */
    document.querySelector("#j1-name").innerHTML = x.value;
    x.disabled = true;
  } else {
    j2.ins = true;
    var x = document.getElementsByName("j2");
    x = x[0];
    /* Mettre le nom du joueur dans la balise #j2-name */
    document.querySelector("#j2-name").innerHTML = x.value;
    x.disabled = true;
  }

  if (j1.ins && j2.ins) {
    // Retirer le panneau d'inscription
    var ins = document.getElementById("ins");
    /* retirer la balise div #ins du html */
    ins.style = "display:none";
    //Initialise le plateau
    init_plateau();

    //lien avec les logo
    j1.logo = document.querySelector(".fas.fa-user.j1");
    j2.logo = document.querySelector(".fas.fa-user.j2");

    //Instruction de jeu
    /* Mettre le nom du joueur dans la balise player-name */
    if (current_player == 1) {
      document.querySelector("#player-name").innerHTML =
        document.getElementsByName("j1").value;
    } else {
      document.querySelector("#player-name").innerHTML =
        document.getElementsByName("j2").value;
    }

    document.querySelector("#player-name").innerHTML = x.value;
    //ne joue pas pour le moment
    j2.logo.classList.toggle("fas");
    j2.logo.classList.toggle("far");
  }
}

function touch(id) {
  var pion = document.querySelectorAll(".pion")[0];
  var col = id % 7;
  console.log(col);
  col.pion.addEventListener("click", () => {
    j1.pion.style.background = blue;
  });
}

touch();
