let names = ["Steve ", "Robert ", "William ", "Kenia "];
names.forEach(element => {
    if (element === "Robert ") {
        $("ul").append('<li><strong>' + element + '</strong></li>');
    }
    else {
        $("ul").append('<li>' + element + '</li>');
    }
});


let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };
  console.log(additionalBlock.text)


    $("body").append("<header>" + additionalBlock.title + "</header>" + "<p>" + additionalBlock.text + "</p>")
