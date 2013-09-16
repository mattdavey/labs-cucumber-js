var BrowserSteps = function() {
	this.World = require("../support/world.js").World;
	
	this.When(/^I navigate to "([^"]*)"$/, function(url, callback) {
      this.browser.visit(url, callback);
	});

	this.When(/^I type "([^"]*)" into the search field$/, function(text, callback) {
	  this.browser.fill("input[type=text]", text);
	  callback();
    });

    this.When(/^I submit my search$/, function(callback) {
    	this.browser.pressButton('Search');
    	this.browser.wait(callback);
    });

    this.Then(/^"([^"]*)" is at the top of the search results$/, function(site, callback) {
      // this.browser.visit('http://sqlapi.com', callback);
      var self = this;
      console.log(this.browser.html('div.web_result a'));
      callback();
    });
};

module.exports = BrowserSteps;
