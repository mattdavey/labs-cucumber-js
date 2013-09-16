var Browser = require('zombie');

var World = function(callback) {

	this.browser = new Browser();
	callback();
};

exports.World = World;
