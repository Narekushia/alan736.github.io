function CenterMe(){
	var left = ($(window).width() - $('.content').outerWidth())/2;
	var top = ($(window).height() - $('.content').outerHeight())/2;
	var topheader = top/8;
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
		var ValideEmail = validateEmail($('#email').val())
		console.log(ValideEmail);

		if (ValideEmail) {
			GetGravateImage($('#email').val());
		}
		else {
			var Error = "Ce n'est pas un email valide";
			ErrorMessage();
		if (validateEmail($('#email').val())) {
			GetGravateImage($('#email').val());
		}
			// alert("Invalide Email");
		}
	});
	$('#email').focus(function() {
		$('#TheClic').popup('remove');
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


function ErrorMessage() {
			if ($('#TheClic').popup('exists') == "0") {
			$('#TheClic').popup({
				on : 'focus',
          		position : 'bottom center', 
          		content : "Ce n'est pas un email valide",
          		target : '#email'
  				}).popup('show');
			}
}

