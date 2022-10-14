$(function () {
  $('.round').click((e) => {
    console.log($(e.target).css("background-color"));

    $('.round').map(() => {
      $('.round').removeClass('checked');
    })

    $('body').css("background-color", $(e.target).css("background-color"));

    $('i').css("background-color", $(e.target).css("background-color"));

    $('.btn_login').css("background-color", $(e.target).css("background-color"));
    $(e.target).addClass('checked');

    console.log('addClass 이후');
  });
});