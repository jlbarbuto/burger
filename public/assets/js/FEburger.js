$(function() {
    $(".eat-it").on("click", function(event){
        var id = $(this).data("id");
        var newStatus = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newStatus
        }).then(function(){
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".addBurger").on("click", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("New Burger Created");
            location.reload();
        });
    });
});