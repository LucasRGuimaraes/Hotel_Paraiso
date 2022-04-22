/* ANCORA ANIMAÇAO */
function animate(elem, style, unit, from, to, time, prop) {
  if (!elem) {
    return;
  }
  var start = new Date().getTime(),
    timer = setInterval(function () {
      var step = Math.min(1, (new Date().getTime() - start) / time);
      if (prop) {
        elem[style] = (from + step * (to - from)) + unit;
      } else {
        elem.style[style] = (from + step * (to - from)) + unit;
      }
      if (step === 1) {
        clearInterval(timer);
      }
    }, 25);
  if (prop) {
    elem[style] = from + unit;
  } else {
    elem.style[style] = from + unit;
  }
}
function nome(id) {
  var target = document.getElementById(id);
  animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 500, true);
}

/* AMPLIAÇAO DAS IMAGEM */
var modal = document.getElementById("modalImagens")

function openModal(id) {
  var img = document.getElementById(id)
  var modalImg = document.getElementById("img01")
  var captionText = document.getElementById("caption")

  modal.style.display = "block"
  modalImg.src = img.src
  captionText.innerHTML = img.alt
}

var span = document.getElementsByClassName("close")[0]
span.onclick = function () {
  modal.style.display = "none";
}

/* CADASTRAR EMAIL */
function cadastrar() {
  var email = document.getElementById("email");
  if (email.value != "") {
    alert(`Seu email foi cadastrado: ${email.value}`)
  } else {
    alert(`Preencha o campo por favor!`)
  }
}

