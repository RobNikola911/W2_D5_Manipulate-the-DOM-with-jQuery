let $names = ["Steve ", "Robert ", "William ", "Kenia "];

// $names.forEach("ul");

$("ul").append(
    "<li></li>" + $names
);



/* var $elements = [];
for (var i = 0; i < 10; i++) {
    $elements.push($('<div>', { text: 'Element ' + i}));
}

$('#some-element').append($elements); */

let $additionalBlock = {
    $title: "Added with javascript",
    $text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $("h1").append(
      $additionalBlock
  )