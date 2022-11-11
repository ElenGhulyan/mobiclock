$(".faq-section-box").on("click", function () {
    $(this).find('.faq-body').slideToggle(500);
    $(this).find('.fa').toggleClass('fa-angle-down').toggleClass('fa-angle-up')
});



$(".many-to-save-tabs-item").on("click", function (){
    $(".many-to-save-tabs-item").removeClass('active');
    $(this).addClass('active');
    $('.many-to-save-body').removeClass('active');
    let data_id = $(this).data('id');
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
    margin:30,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});