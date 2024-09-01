$('.navbar').on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    <!-- Include jQuery before your script -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Include custom JavaScript for Smooth Scrolling -->
    <script>
        $('.navbar').on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });
    </script>
});