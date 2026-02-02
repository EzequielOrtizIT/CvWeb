// --- MANEJO DEL MENÚ MOBILE ---
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// --- ANIMACIONES CON SCROLLREVEAL ---
const sr = ScrollReveal({
    distance: '50px',
    duration: 700,
});


sr.reveal('.menu-btn', { delay: 520, origin: 'right' });
sr.reveal('.texto-inicio span', { delay: 200, origin: 'top' });
sr.reveal('.texto-inicio h1, .texto-inicio h2', { delay: 280, origin: 'left' });
sr.reveal('.texto-inicio h3', { delay: 480, origin: 'left' });
sr.reveal('.texto-inicio p', { delay: 550, origin: 'right' });
sr.reveal('.main-btn', { delay: 660, origin: 'left' });
sr.reveal('.img-inicio, .img-xp', { delay: 850, origin: 'left' });
sr.reveal('.img-xp-soft, .img-contacto', { delay: 1050, origin: 'left' });
sr.reveal('.contenedor', { delay: 1050, origin: 'bottom' });
sr.reveal('.proyectos-hero h1', { delay: 400, origin: 'left' });
sr.reveal('.proyectos-hero p', { delay: 600, origin: 'right' });
sr.reveal('.proyectos-container .proyecto-card, .habilidades-container .proyecto-card', { delay: 200, origin: 'bottom', interval: 150 });
sr.reveal('span', { delay: 600, interval: 150 });
sr.reveal('.proyectos-container .hitos-card', { delay: 200, origin: 'bottom', interval: 150 });


// --- WEB COMPONENT: FOOTER ---
class MiFooter extends HTMLElement {
    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
            <footer>
                <p>© ${year} Ezequiel Ortiz • <a href="legales.html">Aviso legal y Privacidad</a></p>
            </footer>
        `;
    }
}
customElements.define('mi-footer', MiFooter);


// --- WEB COMPONENT: REDES SOCIALES ---
class MiSocial extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="compartir">
                <div class="social">
                    <a href="https://www.linkedin.com/in/ezequiel-l-ortiz/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/EzequielOrtizIT" target="_blank"><i class='bx bxl-github'></i></a>
                    <a href="https://api.whatsapp.com/send?phone=+5491130091589&text=Hola,%20estoy%20interesado%20en%20contactarte."
                        target="_blank"><i class='bx bxl-whatsapp-square'></i></a>
                </div>
            </div>
        `;

        const socialDiv = this.querySelector('.compartir');
        sr.reveal(socialDiv, { delay: 350, origin: 'bottom' });
    }
}
customElements.define('mi-social', MiSocial);