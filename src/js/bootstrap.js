console.log('BOOTSTRAP!');

try {
	window.$ = window.jQuery = require('jquery');
	window.Popper = require('popper.js');

	require('bootstrap');
} catch (e) {}

document.querySelector('html').lang = 'en_US';