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
});