$("#createburger").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newBurger = {
      burger: $("#createburger [name=burger]").val().trim()
  };
  console.log(newBurger);
  // Send the POST request.
  $.ajax("/burgers", {
      type: "POST",
      data: newBurger
  }).then(
      function () {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
      }
  );
});

$(".updateburger").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var id = $(this).data("burgerid");
  console.log(id);
  //var updatedBurger = {
  //  burger: $("#updateburger [name=id]").val().trim()
  //};

  // Send the PUT request.
  $.ajax("/burgers/" + id, {
      type: "PUT"
  }).then(
      function () {
          console.log("updated id ", id);
          // Reload the page to get the updated list
          location.reload();
      }
  );
});