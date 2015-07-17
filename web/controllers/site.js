/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var conf = require('../settings');

var fs = require('fs'),
	path = require('path'),
	cwd = process.cwd(),
	qs = require('querystring'),
	velocity = require('velocityjs');

var virtualPath = '/';

exports.indexUI = function(req, res, next){
	res.render('Index', {
		title: conf.corp.name,
		description: '',
		keywords: ',Bootstrap3,nodejs,express,javascript,java,html5',
		virtualPath: virtualPath,
		cdn: conf.cdn
	});
};