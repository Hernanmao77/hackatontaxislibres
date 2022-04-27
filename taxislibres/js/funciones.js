jQuery(document).ready(listo);

function listo() {
    jQuery(".hamb").click(function(e) { //aca se ejecuta una funcion en otra 
        e.preventDefault(); // anula el subir y bajar el boton
        jQuery("header .container nav").toggleClass("open"); //si este
        jQuery(".hamb i").toggleClass("fa-times");

    });

    jQuery("header .container nav a").click(function() {

        jQuery("header .container nav").removeClass("open");
        jQuery(".hamb i").removeClass("fa-times");

        var dev = jQuery(this).attr("href");

        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top - 76
        })
    })
}