$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input").keypress(function(event){
    if(event.which === 13){
        var todo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>  " + todo + "</li>");
    }
});

$(".fa-plus").on("click", function(){
    $("input").fadeToggle();
});