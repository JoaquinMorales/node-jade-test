$(window).load(function() {
    $(document).on('click', "[data-widget='collapse']", function(){
            var box = $(this).parents(".panel").first();
        //Find the body and the footer
        var bf = box.find(".panel-body, .panel-footer, .table");
        if (!box.hasClass("collapsed-box")) {
            box.addClass("collapsed-box");
            //Convert minus into plus
            $(this).children(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
            bf.slideUp();
        } else {
            box.removeClass("collapsed-box");
            //Convert plus into minus
            $(this).children(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
            bf.slideDown();
        }
    });
    
    $(document).on("click","[data-widget='close']", function() {
        //Find the box parent        
        var box = $(this).parents(".panel").first();
        box.slideUp();
    });

//    $("[data-widget='collapse']").click(function() {
//        //Find the box parent        
//        var box = $(this).parents(".panel").first();
//        //Find the body and the footer
//        var bf = box.find(".panel-body, .panel-footer, .table");
//        if (!box.hasClass("collapsed-box")) {
//            box.addClass("collapsed-box");
//            //Convert minus into plus
//            $(this).children(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
//            bf.slideUp();
//        } else {
//            box.removeClass("collapsed-box");
//            //Convert plus into minus
//            $(this).children(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
//            bf.slideDown();
//        }
//    });
    
//    $("[data-widget='close']").click(function() {
//        //Find the box parent        
//        var box = $(this).parents(".panel").first();
//        box.slideUp();
//    });
    
    $(function() {
        
    });

});


