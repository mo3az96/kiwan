$(document).ready(function () {
    $(".button-mob").click(function () {
        $('.mob-nav').addClass('open');
        $('.moboverlay').fadeIn('fast');
        $('body').addClass('ovh');
    });
    $(".mob-nav i").click(function () {
        $('.mob-nav').removeClass('open');
        $('.moboverlay').fadeOut('fast');
        $('body').removeClass('ovh');
    });
    $('.moboverlay').click(function () {
        $(".mob-nav i").trigger('click');
        $('body').removeClass('ovh');
    });


    $('.checkmark').click(function () {
        var x = $(this).attr('id');
        $('input[name=radio]').removeAttr('checked');
        $('input' + '#' + x).attr("checked", "checked");
    });
    $('.selectpicker').selectpicker({
        dropupAuto: false
    });

    $("#datepicker").datepicker();
    $('.way-2').click(function () {
        $('.way--2 #datepicker').removeAttr('disabled');
        $('.way--2').removeClass("opa");
    });
    $('.way-1').click(function () {
        $('.way--2 #datepicker').attr('disabled');
        $('.way--2').addClass("opa");
    });
});
