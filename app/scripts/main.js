$(function () {

	var $onlinePlayers = $('#onlinePlayers');

    $.ajax({
        type: 'GET',
        url: 'http://api.bf4stats.com/api/onlinePlayers',
        success: function(onlinePlayers) {
        	
        	console.log("Players online:", onlinePlayers); //returns all online players
       		
       		$.each(onlinePlayers, function(i, onlinePlayers) {
       			$onlinePlayers.append('<li>' + onlinePlayers.label + ': ' + onlinePlayers.count + '</li>');
       		});
       }
    });



});