window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".animation");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

let item_1 = document.getElementById('box-1');
let item_2 = document.getElementById('box-2');
let item_3 = document.getElementById('box-3');
let item_4 = document.getElementById('box-4');
let clock_section = document.getElementById('clock-section');
item_1.addEventListener('mouseenter', (event) => {
    clock_section.className = 'clock-section box-1-hover';

})
item_2.addEventListener('mouseenter', (event) => {
    clock_section.className = 'clock-section box-2-hover';

})
item_3.addEventListener('mouseenter', (event) => {
    clock_section.className = 'clock-section box-3-hover';

})
item_4.addEventListener('mouseenter', (event) => {
    clock_section.className = 'clock-section box-4-hover';

})






$(".faq-section-box").on("click", function () {

    $(this).find('.faq-body').toggle(500);
    $(this).toggleClass("open-faq");
    $(this).find('.fa').toggleClass('fa-angle-down').toggleClass('fa-angle-up')

});



/*$(".faq-body").on("click", function () {


    $(this).hide(500).css("background" ,"#000");
    $(this).find('.fa').toggleClass('fa-angle-down').toggleClass('fa-angle-up')

});*/




$(".many-to-save-tabs-item").on("click", function (){
    $(".many-to-save-tabs-item").removeClass('active');
    $(this).addClass('active');
    $('.many-to-save-body').removeClass('active');
    let data_id = $(this).data('id');
    let data_bg = $(this).data('bg');
    $(".many-to-save-section").addClass(data_bg);
    $('#' +  data_id).addClass('active');
});


$(".customer-reviews-tabs-item").on("click", function (){
    $(".customer-reviews-tabs-item").removeClass('active');
    $(this).addClass('active');
    $('.customer-reviews-body').removeClass('active');
    let data_id = $(this).data('id');
    $('#' +  data_id).addClass('active');
});



$(".multiple-unique-features-tabs-item").on("click", function (){
    $(".multiple-unique-features-tabs-item").removeClass('active');
    $(this).addClass('active');
    $('.multiple-unique-features-body').removeClass('active');
    let data_id = $(this).data('id');
    $('#' +  data_id).addClass('active');
});

$('.owl-carousel').owlCarousel({
    items:2,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

var timer = 0;
clockTimer(timer);
function clockTimer(timer){
    setTimeout(function () {
        console.log(6*timer)
        //$('head').append('<style>.clock-section:before{transform: rotate('+6*timer+'deg)}</style>');
        timer+=1;
        clockTimer(timer);
    }, 1000)
}