/**
 * Created by Tan Xiaoyuan on 2017/3/28.
 */
$(function() {
    $('#dg-container').gallery({
        autoplay	:	true
    });
    setInterval(function(){
        var left = Math.random()*window.innerWidth;
        var height = Math.random()*window.innerHeight;
        var src = "./icons/snow"+Math.floor(Math.random()*2+1)+".png";
        snow(left,height,src);
    },400);
});

function snow(left,height,src){

    var $snowDiv = $("<div><img src='"+src+"' /></div>")
    $snowDiv.css("margin-left",left+"px");
    $snowDiv.css("margin-top",height+"px" );
    $snowDiv.addClass("roll");
    $("body").append($snowDiv);
    setTimeout(function(){
        $("body").remove($snowDiv);
    },400);
}
