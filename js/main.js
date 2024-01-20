
const navWidth = $("nav").innerWidth();
$("nav").css({ left: -navWidth })

$(".openNav").click(_ => {
    $("nav").animate({ left: 0 }, 1000)
})

$(".fa-xmark").click(_ => {
    $("nav").animate({ left: -navWidth }, 1000)
})

$(".bg-danger").click(function () {
    $(this).parent().siblings().find(".singerDetails").slideUp(1000)

    $(this).next().slideToggle(1000)
})


let partyDate;

$("input").on("input", function () {
    partyDate = $("input").val();
    getPartyTime()
})

function getPartyTime() {
    let x = setInterval(function () {
        let countDownDate = new Date(partyDate).getTime();

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#days").html(days + " d")
        $("#hours").html(hours + " h")
        $("#minutes").html(minutes + " m")
        $("#seconds").html(seconds + " s")

        if (distance < 0) {
            clearInterval(x);
            $("#days").html(days) = "0"
            $("#hours").html(hours) = "0"
            $("#minutes").html(minutes) = "0"
            $("#seconds").html(seconds) = "0"
        }
    }, 1000);
}

$("textarea").on("input", function () {

    if ($("textarea").val().length <= 100) {
        let messageLength = 100 - $("textarea").val().length
        $("#conter").html(messageLength)
    } else {
        $("#conter").html("your available character finished")
        $("textarea").val($("textarea").val().substring(0, 100))
    }
})
