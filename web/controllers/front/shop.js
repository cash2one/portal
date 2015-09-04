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
	var shop_name = req.params.shop;
	console.log(shop_name);
	// TODO
	res.render('front/shop/Index', {
		conf: conf,
		title: '商铺 | '+ conf.corp.name,
		description: '',
		keywords: ',dolalive,html5'
	});
};