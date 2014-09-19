$(function () {

	var $onlinePlayers = $('#players_online');
	var $soldierBasicInfo = $('#soldier_basic_info p');
	var $soldierName = $('#soldier_name');
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
    });

    $(search).click(function() {
		$.ajax({
	    	type: 'GET',
	        url: "http://api.bf4stats.com/api/playerInfo",
	        data: { "plat": "pc","name": $soldierName.val()}, // WABBAJ4CK for testing
	        success: function(playerInfo) { 

	        	console.log("Player info:", playerInfo); //returns player info

	        	var kdr =  playerInfo.stats.kills / playerInfo.stats.deaths
	        	
	       		$soldierBasicInfo.text("Soldier Name: " + playerInfo.player.name)
	       		.append("<br />Rank: " + playerInfo.stats.rank)
	       		.append("<br />Kills: " + playerInfo.stats.kills)
	       		.append("<br />Deaths: " + playerInfo.stats.deaths)
	       		.append("<br />K/D Ratio: " + kdr .toFixed(2));

	       		//$.each(playerInfo, function(i, playerInfo) {
	       		//	$playerInfo.append('<li>' + 'Soldier Name: ' + playerInfo.name + 'Kills: ' + playerInfo.kills + ' Deaths: ' + playerInfo.deaths + '</li>');
	       		//});
	       	}
	    });
    });
});