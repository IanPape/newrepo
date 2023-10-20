// 1.
$(function() {
    console.log('The DOM is finished loading.');
  });

//   2.
$("article img").addClass('image-center');

// 3.
$ ("article p:last-child").remove();

// 4.
$("#title").css("font-size", Math.random() * 100);

// 5.
$ ("ol").append($("<li>", {text: "enchiladas por nada!"}));

// 6.
$("aside").empty().append($('<p>', {text: "Actually come to think of it, building attention spans with paragraphs is the way to go!"}));

// 7.
$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });

//   8.
$("img").on("click", function (e) {
        $(e.target).remove()});

