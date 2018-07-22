
$( document ).ready(function() {

	$('#toggleRarity').click(function(){
	  if ( $('#pvp').css('opacity') == '0' ){
	    $('#pvp').addClass('active');
			$('#pve').removeClass('active');
			$('.modal-body').css('background-color','#ffe9ca');
			$('#status-pvp').css('opacity','1');
		}
	  else {
	    $('#pvp').removeClass('active');
			$('#pve').addClass('active');
			$('.modal-body').css('background-color','#fffaef');
		}
	});

	$('#toggleRarity').click(function(){
	    $('#toggleRarity').toggleClass('toggle-pvp');
	});
});
