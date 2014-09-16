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
		if (validateEmail($('#email').val())) {
			GetGravateImage($('#email').val());
		}
		else {
			// alert("Invalide Email");
			$("#error").append("\"" + $('#email').val() + "\"" + " n'est pas un email valide");
			$("#error").css({
				display: 'block'
			});
		}
	});
	CenterMe();
});


function GetGravateImage(email){
	var emailMD5 = $.md5(email);
	$('#image').attr('src', 'http://www.gravatar.com/avatar/' + emailMD5 + "?s=200");
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 
