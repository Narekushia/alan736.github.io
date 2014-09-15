function CenterMe(){
	var left = ($(window).width() - $('.content').outerWidth())/2;
	var top = ($(window).height() - $('.content').outerHeight())/2;
    $('.content').css({
       	position:'absolute',
        	left: left,
        	top: top
   	});
}


$(window).resize(CenterMe);
$(document).ready(function() {
	setTimeout(CenterMe(),1);
	$("#TheClic").click(function() {
		GetGravateImage($('#email').val());
	});
	CenterMe();
});


function GetGravateImage(email){
	var emailMD5 = $.md5(email);
	$('#image').attr('src', 'http://www.gravatar.com/avatar/' + emailMD5 + "?s=200");
}

