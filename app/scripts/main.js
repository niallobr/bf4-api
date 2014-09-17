console.log('\'Allo \'Allo!');

$(function () {
    $.ajax({
        type: 'GET',
        url: 'http://api.bf4stats.com/api/onlinePlayers',
        success: function(data) {
          console.log("Players currently online:", data); //returns all online players
       }
    });
});