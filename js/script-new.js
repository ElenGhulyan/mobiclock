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
        autoplaySpeed: 50000,
    });
});