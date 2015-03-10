$(document).ready(function() {

    $("#header a").hover(function() {
        var $icon_top = $(this).find(".icon-top");
        var $icon_bottom = $(this).find(".icon-bottom");
        $icon_top.css({
            "-webkit-transform": "scale(1.3)",
            "-moz-transform": "scale(1.3)",
            "-o-transform": "scale(1.3)",
            "transform": "scale(1.3)",
            "top": "-5px"
        });
        $icon_bottom.fadeIn(100);
        $icon_bottom.css("top", "15px");
    }, function() {
        var $icon_top = $(this).find(".icon-top");
        var $icon_bottom = $(this).find(".icon-bottom");
        $icon_top.css({
            "-webkit-transform": "scale(1)",
            "-moz-transform": "scale(1)",
            "-o-transform": "scale(1)",
            "transform": "scale(1)",
            "top": "17px"
        });
        $icon_bottom.fadeOut(100);
        $icon_bottom.css("top", "50px");
    });

    $("#footer a").hover(function() {
        var $icon_top = $(this).find(".icon-top");
        $icon_top.css({
            "-webkit-transform": "scale(1.5) rotate(45deg)",
            "-moz-transform": "scale(1.5) rotate(45deg)",
            "-o-transform": "scale(1.5) rotate(45deg)",
            "transform": "scale(1.5) rotate(45deg)"
        });
    }, function() {
        var $icon_top = $(this).find(".icon-top");
        $icon_top.css({
            "-webkit-transform": "scale(1) rotate(0deg)",
            "-moz-transform": "scale(1) rotate(0deg)",
            "-o-transform": "scale(1) rotate(0deg)",
            "transform": "scale(1) rotate(0deg)"
        });
    });

    var $header = $("#header");
    var $hexagon_clicked;
    $("#header a").click(function() {
        var $li_clicked = $(this).parents(".hexagon")[0];
        var $className = $li_clicked.className.substring(8);
        if ($className !== $hexagon_clicked) {
            var $progress = $("#skills .progress");
            var expandHeight = $("#content-" + $className).height() - 4;

            $(".content").fadeOut(500);
            var timeout = setTimeout(function() {

                $("#content-" + $className).fadeIn(500);
                if ($className == 'technique') {
                    $progress.css("width", "100%");
                } else {
                    $progress.css("width", "150px");
                }
            }, 500);

            if ($header.height() > 404) {
                $header.height(404);
                setTimeout(function() {
                    $header.height(expandHeight);
                }, 500);
            } else {
                $header.height(expandHeight);
            }

            $hexagon_clicked = $className;
        }
    });

    $("#main-skills .progress").hover(function() {
        var $detail = $(this).find(".detail");
        $detail.fadeIn(500);
    }, function() {
        var $detail = $(this).find(".detail");
        setTimeout(function() {
            $detail.fadeOut(500);
        }, 200);
    });
    $("#other-skills").hover(function() {
        var $detail = $(this).find(".detail");
        $detail.fadeIn(500);
    }, function() {
        var $detail = $(this).find(".detail");
        setTimeout(function() {
            $detail.fadeOut(500);
        }, 200);
    });

    $("#gallery .icon").hover(function() {
        $(this).css({
            "-webkit-transform": "scale(1.2) rotate(0deg)",
            "-moz-transform": "scale(1.2) rotate(0deg)",
            "-o-transform": "scale(1.2) rotate(0deg)",
            "transform": "scale(1.2) rotate(0deg)"
        });
    }, function() {
        $(this).css({
            "-webkit-transform": "scale(1) rotate(0deg)",
            "-moz-transform": "scale(1) rotate(0deg)",
            "-o-transform": "scale(1) rotate(0deg)",
            "transform": "scale(1) rotate(0deg)"
        });
    });

    var pic_index = 0;
    var pic_num = $("#gallery .pic li").length;
    $("#gallery .icon").click(function() {
        var $dot_li = $("#gallery .dot li");
        var $remark_li = $("#remark li");
        var $className = $(this).attr("class").substring(10);
        var end = $("#gallery .pic").css("left").indexOf("p");
        var $left = $("#gallery .pic").css("left").substring(0, end) - 0;
        if ($className == "left") {
        	if (pic_index > 0) {
    			$("#gallery .pic").css("left", ($left + 495) + "px");
    			pic_index--;
    			$dot_li.css("background-color", "transparent");
    			$remark_li.fadeOut(250);
    			$("#gallery .dot li:eq(" + pic_index + ")").css("background-color", "#545A62");
    			$("#remark li:eq(" + pic_index + ")").fadeIn(250);
        	}
        } else {
        	if(pic_index < pic_num - 1){
        		$("#gallery .pic").css("left", ($left - 495) + "px");
        		pic_index++;
        		$dot_li.css("background-color", "transparent");
        		$remark_li.fadeOut(250);
        		$("#gallery .dot li:eq(" + pic_index + ")").css("background-color", "#545A62");
        		$("#remark li:eq(" + pic_index + ")").fadeIn(250);
        	}
        }

    });
});
