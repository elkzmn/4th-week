$(function(){

    let mixer = mixitup('.product__inner-box');

});

$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
});

$(".tab_item").not(":first").hide();
$(".product-one__content-tabs .tab, .settings-tabs .tab").click(function() {
	$(".product-one__content-tabs .tab, .settings-tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

