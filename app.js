$(document).on('ready', function() {

    var winHeight = $(window).height(),
        docHeight = $(document).height(),
        progressBar = $('progress'),
        max, value;

    /* Sets max scrollable area */
    max = docHeight - winHeight;
    progressBar.attr('max', max);

    $(document).on('scroll', function() {
        value = $(window).scrollTop();
        progressBar.attr('value', value);

    });
    $('img').click(function() {
        $(this).attr('src', 'assets/images/complete_on.png');
        console.log('im working!');

    });
});
