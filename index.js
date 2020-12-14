// Work on your tasks here
$("input.submit").click(function (e) {
    e.stopPropagation();
    let modal = $("div.modal");
    modal.show();

    $("body").click(function (event) {
        if ($(event.target).is("span.modal-close")) {
            modal.hide();
        } else if (
            $(event.target.parentNode).is(".modal-content") ||
            $(event.target.parentNode).is(".modal")
        ) {
            modal.show();
        } else {
            modal.hide();
        }
    });
});


/////////////// Rotating  ////////////////

let isRoteted = false;

$(".image").click(function () {
    if (isRoteted) {
        $(this).css("transform", "rotate(0deg)");
        isRoteted = false;
    } else {
        $(this).css("transform", "rotate(20deg)");
        isRoteted = true;
    }
});

///////Or///////

// let teapot = $("img.teapot");
// teapot.click(() => teapot.toggleClass("teapot-rotate"));


//////////////////////////////////////////////




let teaDesc = $("section.selection__option .tea-desc").mouseover(function () {
    let phrases = [
        "It is time for some tea!",
        "Nice cup of tea on the breakfast!",
        "Great tea for a cold night!",
        "Rich in flavours",
        "Recommended for a cold day",
    
    ];

    function selectRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    $(this).text(selectRandom(phrases));
});







//////   just test for blink text   //////////////////

// window.addEventListener("load", function() {
//     var f = document.getElementById('Foo');
//     setInterval(function() {
//         f.style.display = (f.style.display == 'none' ? '' : 'none');
//     }, 1000);

// }, false);


/////////////////    OR jq    ////////////////////


// $(document).ready(function() {
//     var f = document.getElementById('Foo');
//     setInterval(function() {
//         f.style.display = (f.style.display == 'none' ? '' : 'none');
//     }, 1000);

// });