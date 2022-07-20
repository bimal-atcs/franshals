jQuery(document).ready(function() {
    jQuery(".slide-panel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
