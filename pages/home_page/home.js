$(document).ready(function () {
    console.log("jQuery loaded correctly");
});


$(".hero-primary-button").click(function () {
    $("html, body").animate(
        {
            scrollTop: $(".featured_yacht_header").offset().top
        },
        800
    );
});



$(".hero-booking-form").submit(function (e) {
    e.preventDefault();

    const location = $(this).find("input").eq(0).val().trim();
    const fromDate = $(this).find("input").eq(1).val().trim();
    const toDate = $(this).find("input").eq(2).val().trim();

    if (!location || !fromDate || !toDate) {
        alert("Please fill in all booking fields.");
        return;
    }

    alert("Booking request submitted!");
});



$(".services-card-item").hover(
    function () {
        $(this).css("transform", "translateY(-8px)");
    },
    function () {
        $(this).css("transform", "translateY(0)");
    }
);



$(".primaryAction__button").click(function () {
    $(this)
        .animate({ opacity: 0.5 }, 200)
        .animate({ opacity: 1 }, 200);
});


$(".galleryUpdates__grid img").click(function () {
    $(".galleryUpdates__grid img").css("opacity", "0.5");
    $(this).css("opacity", "1");
});
