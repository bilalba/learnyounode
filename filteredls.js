var fs = require('fs');
var ext = process.argv[3]
var buf = fs.readdir(process.argv[2], function callback(err, list) {
	for (i = 0; i < list.length; i++) {
		len = list[i].length
		if (len >= 3) {
			var res = list[i].substr(len-(ext.length+1), len);
			if (res == '.' + process.argv[3])
				console.log(list[i]);
		}

		
	}
})