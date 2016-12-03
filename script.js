$(document).ready(function(){
    $(".about").hover(function(){
        $("#matter").css("color", "mediumorchid");
    });
});

$(document).ready(function(){
    $(".intro").hover(function(){
        $("#Intro-Blog").css("color", "mediumorchid");
    });
    
});

$(document).ready(function(){
    $("#matter").mouseenter(function(){
        $("#panel").fadeToggle("medium");
    });
});

$(document).ready(function(){
    $("#Intro-Blog").mouseenter(function(){
        $("#panel1").fadeToggle("medium");
    });
});