$(function () {

	var $onlinePlayers = $('#onlinePlayers');
	var $playerInfo = $('#playerInfo');
	var $soldierDetails = $('#soldierDetails');
	var $search = $('#search');

    $.ajax({

        type: 'GET',
        url: 'http://api.bf4stats.com/api/onlinePlayers',
        success: function(onlinePlayers) {
        	
        	console.log("Players online:", onlinePlayers); //returns all online players
       		
       		$.each(onlinePlayers, function(i, onlinePlayers) {
       			$onlinePlayers.append('<li>' + onlinePlayers.label + ': ' + onlinePlayers.count + '</li>');
       		});
       	}

        //type: 'GET',
        //url: "http://api.bf4stats.com/api/playerInfo?plat=pc&name=$(soldier-name)",
        //success: function(playerInfo) {
        	       		
       	//	$.each(playerInfo, function(i, playerInfo) {
       	//		$playerInfo.append('<li>' + playerInfo.name + ': ' + playerInfo.country + '</li>');
       	//	});
       	//}

    });

    $(search).click(function() {
		$.ajax({
	    	type: 'GET',
	        url: "http://api.bf4stats.com/api/playerInfo",
	        data: { "plat": "pc","name": $soldierDetails.val()},
	        success: function(playerInfo) { 

	        	console.log("Player info:", playerInfo); //returns player info
	        	
	        	//$playerInfo.append('<li>' + 'Soldier Name: ' + playerInfo['name'] + '</li>');

	       		$.each(playerInfo, function(i, playerInfo) {
	       			$playerInfo.append('<li>' + 'Soldier Name: ' + playerInfo.name + 'Kills: ' + playerInfo.kills + ' Deaths: ' + playerInfo.deaths + '</li>');
	       		});
	       	}
	    });
    });
});