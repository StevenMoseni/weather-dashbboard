$(document).ready(function () {
    var searchHistory = [];

    const momentDay = moment().format('dddd, MMMM Do');
    $('.todayDate').prepend(momentDay);

    for (var i = 1; i < 6; i++) {
        $(`#${i}Date`).text(moment().add(i, 'd').format('dddd, MMMM Do'));

    
        $('form').on('submit', function (event) {
            event.preventDefault();
            let city = $('input').val();
            if (city === '') {
                return;
            }
    