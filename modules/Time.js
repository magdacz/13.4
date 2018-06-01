var os = require('os');

function convertTime() {
	var uptime = os.uptime();
    var hours = Math.floor(uptime / 3600);
    var minutes = Math.floor((uptime - (hours * 3600)) / 60);
    var seconds = Math.floor(uptime - (hours * 3600) - (minutes * 60));
  
    return 'Uptime: ', + hours + " h " + minutes + " min " + seconds + " sec";

}

exports.print = convertTime;