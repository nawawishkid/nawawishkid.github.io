function isUndefined(data) {
	if (!(typeof data === 'undefined')) return data;

	console.error('data is undefined');
}

function dotNotation(text, obj) {
	if (!text.includes('.')) return isUndefined(obj[text]);

	let props = text.split('.'),
		result = obj;

	props.forEach(prop => {
		result = result[prop];
	});

	return isUndefined(result);
}

export function config(key) {
	const config = require('../../config.json');

	return dotNotation(key, config); //config[key];
}

export function theme(key, name) {
	return config(`theme.${name}.${key}`);
}

export function Locale() {
	//console.log('Locale()');

	this.locale = require('../../locale.json');

	this.getLang = function() {
		return document.documentElement.lang || config('app.language');
	}

	this.getLocales = function() {
		return this.locale;
	}

	this.get = function(keyword) {
		return dotNotation(keyword, this.locale[this.getLang()]);
	}
}