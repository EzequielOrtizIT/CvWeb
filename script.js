let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};


const sr = ScrollReveal({
	distance: '50px',
	duration: 1000,
});

//sr.reveal('.logo', { delay: 200, origin: 'left' });
sr.reveal('.menu-btn', { delay: 520, origin: 'right' });
sr.reveal('.texto-inicio span', { delay: 200, origin: 'top' });
sr.reveal('.texto-inicio h1', { delay: 680, origin: 'left' });
sr.reveal('.texto-inicio h2', { delay: 680, origin: 'left' });
sr.reveal('.texto-inicio h3', { delay: 680, origin: 'left' });
sr.reveal('.texto-inicio p', { delay: 750, origin: 'right' });
sr.reveal('.main-btn', { delay: 860, origin: 'left' });
sr.reveal('.compartir', { delay: 650, origin: 'bottom' });
sr.reveal('.img-inicio', { delay: 850, origin: 'left' });
sr.reveal('.img-xp', { delay: 850, origin: 'left' });
sr.reveal('.img-xp-soft', { delay: 1050, origin: 'left' });
sr.reveal('.img-contacto', { delay: 1050, origin: 'left' });
sr.reveal('.contenedor', { delay: 1050, origin: 'bottom' });


if (document.querySelector('#container-slider')) {
	setInterval('funcionEjecutar("siguiente")', 5000);
}


//------------------------------ LIST SLIDER -------------------------
if (document.querySelector('.listslider')) {
	let link = document.querySelectorAll(".listslider li a");
	link.forEach(function (link) {
		link.addEventListener('click', function (e) {
			e.anteriorentDefault();
			let item = this.getAttribute('itlist');
			let arrItem = item.split("_");
			funcionEjecutar(arrItem[1]);
			return false;
		});
	});
}

function funcionEjecutar(side) {
	let parentTarget = document.getElementById('slider');
	let elements = parentTarget.getElementsByTagName('li');
	let curElement, siguienteElement;

	for (var i = 0; i < elements.length; i++) {

		if (elements[i].style.opacity == 1) {
			curElement = i;
			break;
		}
	}
	if (side == 'anterior' || side == 'siguiente') {

		if (side == "anterior") {
			siguienteElement = (curElement == 0) ? elements.length - 1 : curElement - 1;
		} else {
			siguienteElement = (curElement == elements.length - 1) ? 0 : curElement + 1;
		}
	} else {
		siguienteElement = side;
		side = (curElement > siguienteElement) ? 'anterior' : 'siguiente';

	}

	//PUNTOS INFERIORES
	let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
	elementSel[curElement].classList.remove("item-select-slid");
	elementSel[siguienteElement].classList.add("item-select-slid");
	elements[curElement].style.opacity = 0;
	elements[curElement].style.zIndex = 0;
	elements[siguienteElement].style.opacity = 1;
	elements[siguienteElement].style.zIndex = 1;
}



var actual = 0;
function puntos(n) {
	var ptn = document.getElementsByClassName("punto");
	for (i = 0; i < ptn.length; i++) {
		if (ptn[i].className.includes("activo")) {
			ptn[i].className = ptn[i].className.replace("activo", "");
			break;
		}
	}
	ptn[n].className += " activo";
}

function mostrar(n) {
	var imagenes = document.getElementsByClassName("imagen");
	for (i = 0; i < imagenes.length; i++) {
		if (imagenes[i].className.includes("actual")) {
			imagenes[i].className = imagenes[i].className.replace("actual", "");
			break;
		}
	}
	actual = n;
	imagenes[n].className += " actual";
	puntos(n);
}

function siguiente() {
	actual++;
	if (actual > 11) {
		actual = 0;
	}
	mostrar(actual);
}
function anterior() {
	actual--;
	if (actual < 0) {
		actual = 10;
	}
	mostrar(actual);
}

var velocidad = 2500;
var play = setInterval("siguiente()", velocidad);

function playpause() {
	var boton = document.getElementById("btn");
	if (play == null) {
		boton.src = "src/pause-circle-regular-24.png";
		play = setInterval("siguiente()", velocidad);
	} else {
		clearInterval(play);
		play = null;
		boton.src = "src/play-circle-regular-24.png";
	}
}
