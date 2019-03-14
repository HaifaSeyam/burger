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