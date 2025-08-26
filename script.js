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
sr.reveal('.texto-inicio h1', { delay: 480, origin: 'left' });
sr.reveal('.texto-inicio h2', { delay: 480, origin: 'left' });
sr.reveal('.texto-inicio h3', { delay: 480, origin: 'left' });
sr.reveal('.texto-inicio p', { delay: 450, origin: 'right' });
sr.reveal('.main-btn', { delay: 860, origin: 'left' });
sr.reveal('.compartir', { delay: 650, origin: 'bottom' });
sr.reveal('.img-inicio', { delay: 850, origin: 'left' });
sr.reveal('.img-xp', { delay: 250, origin: 'left' });
sr.reveal('.img-xp-soft', { delay: 450, origin: 'left' });
sr.reveal('.img-contacto', { delay: 450, origin: 'left' });
sr.reveal('.contenedor', { delay: 450, origin: 'bottom' });
sr.reveal('.event event--cnc', { delay: 450, origin: 'bottom' });
sr.reveal('.event--it .event__content', {origin: 'left',distance: '40px',duration: 900,	interval: 120,easing: 'ease-out',viewOffset: { top: 80, bottom: 0 }});

// Timeline: rama CNC desde la derecha
sr.reveal('.event--cnc .event__content', {
	origin: 'right',
	distance: '40px',
	duration: 900,
	interval: 120,
	easing: 'ease-out',
	viewOffset: { top: 80, bottom: 0 }
});


if (document.querySelector('#container-slider')) {
	setInterval('funcionEjecutar("siguiente")', 5000);
}

//------------------------------ LIST SLIDER -------------------------
if (document.querySelector('.listslider')) {
	let link = document.querySelectorAll(".listslider li a");
	link.forEach(function (link) {
		link.addEventListener('click', function (e) {
			e.preventDefault();
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

// ====== GA4: tracking de CV y Experiencia CNC ======
document.addEventListener('DOMContentLoaded', function () {
  // Helper seguro para enviar eventos a GA4
  function sendEvent(name, params) {
    if (typeof gtag === 'function') {
      gtag('event', name, params || {});
    } else {
      console.warn('gtag no disponible aún. Evento omitido:', name, params);
    }
  }

  // 1) Clic en "Descargar CV" (mismo id="cv-ti" en las páginas donde exista)
  (function bindCvClick(){
    var el = document.getElementById('cv-ti');
    if (!el) return;
    el.addEventListener('click', function (e) {
      var href = el.getAttribute('href') || '';
      var file = href.split('/').pop() || 'CV_Ortiz.pdf';
      sendEvent('download_cv', {
        cv_role: 'IT',
        file_name: file,
        page_path: location.pathname
      });
    });
  })();

  // 2) Clic en el link hacia la página "Experiencia CNC" (desde timeline.html)
  (function bindExpLink(){
    var linkExp = document.getElementById('nav-exp-cnc') 
               || document.querySelector('a[href="experiencia.html"]');
    if (!linkExp) return;
    linkExp.addEventListener('click', function () {
      sendEvent('view_experiencia_cnc_link_click', {
        link_text: (linkExp.textContent || '').trim(),
        link_target: 'experiencia.html',
        page_path: location.pathname
      });
    });
  })();

  // 3) Si estamos en experiencia.html, logueá una visita explícita
  if (location.pathname.endsWith('experiencia.html')) {
    sendEvent('view_experiencia_cnc_page', { page_path: location.pathname });
  }
});
// ====== /GA4 ======

