$(function () {

	var $onlinePlayers = $('#players_online');
	var $soldierBasicInfo = $('#soldier_basic_info p');
	var $soldierName = $('#soldier_name');
	var $search = $('#search');

    $.ajax({

        type: 'GET',
        url: 'http://api.bf4stats.com/api/onlinePlayers',
        success: function(onlinePlayers) {
        	
        	console.log("Players online:", onlinePlayers); //returns online players to console
       		
       		$.each(onlinePlayers, function(i, onlinePlayers) {
       			$onlinePlayers.append('<li>' + onlinePlayers.label + ': ' + onlinePlayers.count + '</li>'); // appends online players to ul
       		});
       	}
    });

    $(search).click(function() {
		$.ajax({
	    	type: 'GET',
	        url: "http://api.bf4stats.com/api/playerInfo",
	        data: { "plat": "pc","name": $soldierName.val()}, // grabs soldier name from form
	        success: function(playerInfo) { 

	        	console.log("Player info:", playerInfo); // returns player info to console

	        	var kdr =  playerInfo.stats.kills / playerInfo.stats.deaths
	        	
	       		$soldierBasicInfo.text("Soldier Name: " + playerInfo.player.name) // basic info printed to div
	       		.append("<br />Rank: " + playerInfo.stats.rank)
	       		.append("<br />Kills: " + playerInfo.stats.kills)
	       		.append("<br />Deaths: " + playerInfo.stats.deaths)
	       		.append("<br />K/D Ratio: " + kdr .toFixed(2));

	       	}
	    });
    });
});