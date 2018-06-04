$(function() {
    $(".eat-it").on("click", function(event){
        console.log("hi!");
        var id = $(this).data("id");
        console.log(id);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {devoured: true}
        }).then(function(){
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".addBurger").on("click", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val().trim(),
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