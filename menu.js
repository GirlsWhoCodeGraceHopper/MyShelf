console.log("whatup");

var main= function(){
console.log("did main work?");
alert("wow");
    $('.icon-menu').click(function(){
		
        $('.menu').animate({
            left:"0px"
            },200);
        
        $('body').animate({
            left:"285px"
            },200);
        });
   $('.icon-close').click(function(){
       $('.menu').animate({
           left:"-285px"
           },200);
           
		$('body').animate({
			left:"0px"
			},200); 
	});
};

$(document).ready(main);
    
    