// an interactive Jquery code

$(".footer-links-wrapper h3").click( function (){
    if(window.innerWidth <= 768) {
    $(this).next().slideToggle()
    $(this).toggleClass("expanded")
    $(this).toggleClass("add remove")
}
})

$(window).on("resize", function (){
    if(window.innerWidth >768){
        $(".footer-links-wrapper ul").show()
    }
})
