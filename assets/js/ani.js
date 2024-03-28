    /** JavaScript puro */

/*
Agrega el cambio en el color de background cuando el usuario se
desplaza hacia abajo por la página, logrando que el texto del Navbar
no se funda con los fondos claros
*/  

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 1300) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



    /** jQuery */

/** 
Al hacer click, añade un mensaje de alerta indicándole al usuario
que su mensaje ha sido enviado satisfactoriamente. Además, cambia el
color del botón a verde luego de la acción. 
 */

$(function(){

    $(".msgalert").click(function(){
        $(this).addClass("ftrbtngreen");
        alert("Tu mensaje se ha enviado satisfactoriamente! Pronto nos comunicaremos contigo para asesorarte con todas tus dudas.\n\nFeliz Día !");
    })
    
})
