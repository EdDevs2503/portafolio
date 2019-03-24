ScrollReveal().reveal('.ani-1', { delay: 200, duration: 400 });

$("#portafolio-scroll").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".portafolio-d").offset().top
    }, 2000);
});
$("#caracteristicas-scroll").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".features-d").offset().top
    }, 1000);
});
$("#port-scroll").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".portafolio-d").offset().top
    }, 2000);
});