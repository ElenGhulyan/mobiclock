$(".many-to-save-tabs-item").on("click", function (){
    $(".many-to-save-tabs-item").removeClass('active');
    $(this).addClass('active');
    $('.many-to-save-body').removeClass('active');
    let data_id = $(this).data('id');
    let data_bg = $(this).data('bg');
    $(".many-to-save-section").addClass(data_bg);
    $('#' +  data_id).addClass('active');
});



$(".multiple-unique-features-tabs-item").on("click", function (){
    $(".multiple-unique-features-tabs-item").removeClass('active');
    $(this).addClass('active');
    $('.multiple-unique-features-body').removeClass('active');
    let data_id = $(this).data('id');
    $('#' +  data_id).addClass('active');
});

$(document).ready(function(){
    $('.customer-reviews-section-1-tabs').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]

    });
});

$(".customer-reviews-tabs-item").on("click", function (){
    $(".customer-reviews-tabs-item").removeClass('active');
    $(this).addClass('active');
    $('.customer-reviews-body').removeClass('active');
    let data_id = $(this).data('id');
    $('#' +  data_id).addClass('active');
});


$(".faq-section-box").on("click", function () {
    if(!$(this).hasClass("open-faq")) {
        $(".open-faq").find('.faq-body').slideUp(500);
        $(".open-faq").removeClass("open-faq");
    }
    $(this).find('.faq-body').slideToggle(500);
    $(this).toggleClass("open-faq");

    $(this).find('.fa').toggleClass('fa-angle-down').toggleClass('fa-angle-up')

});


let timer = 0;
function timeout() {
    setTimeout(function () {
        let rotate = 45 + timer;
        if (rotate === 45 || rotate > 90) {
            timer += 90;
        } else {
            timer += 45;
        }
        document.querySelector(".clock-img").style.transform = `rotate(${rotate}deg)`;

        timeout();
    }, 3000);
}
timeout();









let myMediaQuery = window.matchMedia('(max-width: 992px)');

function goSlick() {
    if(myMediaQuery.matches) {

        document.querySelectorAll('.under-line').forEach((item) => {
            item.classList.add('autoplay');

        });
        document.querySelectorAll('.line').forEach((item) => {
            item.classList.remove("active-Line")
            item.classList.remove("active-Line-blue")

        });

        $('.autoplay').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            autoplaySpeed: 3000,
        });
    } else {
        $('.autoplay').slick('unslick');
        document.querySelectorAll('.under-line').forEach((item) => {
            item.classList.remove('autoplay')
        });
    }


}

goSlick();
window.addEventListener('resize', goSlick);