//Check off specific tasks by click on them.
$("ul").on("click", "li", function(){
    /**Colors task black and removes line-through. 
     * Colors task gray and puts a line through it. */ 
    $(this).toggleClass("completed");
});

//When fades out and removes a specific task when the trashbin is clicked.
$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //Precautionary measure to contain any event propagation;
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //13 is the key code the for "enter" key on the keyboard
    if(event.which === 13){
        //Stores the value in the textbox into newTask.
        var newTask = $(this).val();
        //Resets the textbox.
        $(this).val("");
        //Appends a new task into the ul element.
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTask + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})