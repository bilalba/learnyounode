


var filterdir = function(dir, ext, callback) {
	var fs = require('fs');
	var filterlist = function(err, list) {
		if (err)
			return callback(err);
		arr = [];
		for (i = 0; i < list.length; i++) {
			len = list[i].length
			if (len >= ext.length+1) {
				var res = list[i].substr(len-(ext.length+1), len);
				if (res == '.' + ext)
					arr.push(list[i]);
			}
		}
		return callback(null, arr);
	}
	var buf = fs.readdir(dir, filterlist);
}
module.exports = filterdir;