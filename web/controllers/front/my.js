/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	cache = util.cache;

var conf = require('../../settings');

var fs = require('fs'),
	path = require('path'),
	cwd = process.cwd(),
	qs = require('querystring'),
	EventProxy = require('eventproxy'),
	velocity = require('velocityjs');

var biz = {
	customer: require('../../biz/customer'),
	page_position: require('../../biz/page_position'),
	zone: require('../../biz/zone'),
	ad: require('../../biz/ad')
};

var exports = module.exports;

/**
 *
 * @param
 * @return
 */
exports.indexUI = function(req, res, next){
	// TODO
	biz.customer.findById('1', function (err, doc){
		if(err) return next(err);
		if(!doc) return res.redirect('/');

		// TODO
		res.render('front/my/Index', {
			conf: conf,
			title: '我的 | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				customer: doc
			}
		});		
	});
};