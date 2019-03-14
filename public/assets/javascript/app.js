//When submit button clicked we add new burger to the DB
$("#submitBtn").on("click", function(event){
    event.preventDefault();

    var burgerName = $("#burgerName").val().trim();

    if (burgerName === "") {
      return;
    } else {
      $.ajax({
        url: "/add",
        method: "POST",
        data: {name: burgerName}
    }).then(function(){
        location.reload();
    });
    }
});

//When Devour button clicked we move the burger to the devoured list (update the DB)
$("#burgerDiv #devBtn").on("click", function(){
    var id = $(this).data("burgerid");
    var devoured = $(this).data("state");

    if (devoured === 0) {
        value = true;
    } else return;

    // Send the PUT request.
    $.ajax("/update/" + id, {
        type: "PUT",
        data: {devoured: value}
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
});