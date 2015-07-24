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

exports.indexUI = function(req, res, next){
	res.render('Index', {
		conf: conf,
		title: conf.corp.name,
		description: '',
		keywords: ',Bootstrap,nodejs,express,javascript,java,html5'
	});
};