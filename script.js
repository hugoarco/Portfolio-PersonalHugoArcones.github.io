function Enviarmensaje() {
    const BotonContacto = document.querySelector(".BotonContacto");
    
    if (BotonContacto) {
        BotonContacto.addEventListener("click", function(event) {
            event.preventDefault();
            console.log("Formulario enviado correctamente");
            alert("Formulario enviado correctamente");
        });
    } else {
        console.error("ERROR: No se encontró el botón con clase .BotonContacto");
    }
}


Enviarmensaje();


const scrollBtn = document.createElement('button');
scrollBtn.id = 'scroll-top-btn';
scrollBtn.innerHTML = '↑';
scrollBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #0a7fe5, #7c3aed);
    color: white;
    border: none;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    font-size: 28px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 8px 25px rgba(10, 127, 229, 0.4);
`;
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
    } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
    }
});

scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});