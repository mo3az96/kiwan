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
    $("#datepick").datepicker();
    $('.way-2').click(function () {
        $('.way--2 #datepick').removeAttr('disabled');
        $('.way--2').removeClass("opa");
    });
    $('.way-1').click(function () {
        $('.way--2 #datepick').attr('disabled');
        $('.way--2').addClass("opa");
    });
    $('#fromcity').click(function () {
        $('.select-div').toggleClass("select-div-show");
        $('ul.lvl.l2').removeClass("transorm-origin");
    });

    $('body').click(function () {
        $('.select-div').removeClass("select-div-show");
        $('ul.lvl.l2').removeClass("transorm-origin");
    });
    $('.select').click(function (e) {
        e.stopPropagation();
    });

    $('.city').click(function (e) {
        var x = $(this).html()
        $("#fromcity").html(x);
        $('.select-div').removeClass("select-div-show");
        $('ul.lvl.l2').removeClass("transorm-origin");
    });
    $('.omenu').click(function () {
        $('ul.lvl.l2').addClass("transorm-origin");
    });
    $('.back').click(function () {
        $('ul.lvl.l2').removeClass("transorm-origin");
    });
});
