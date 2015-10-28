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
	customer: require('../../../biz/customer')
};

var exports = module.exports;

/**
 *
 * @param
 * @return
 */
exports.loginUI = function(req, res, next){
	// TODO
	res.render('back/customer/login/1.0.1/Index', {
		conf: conf,
		title: '用户登陆 | '+ conf.corp.name,
		description: '',
		keywords: ',dolalive,html5',
		refererUrl: escape(req.url)
	});
};

/**
 * 用户登陆
 *
 * @params
 * @return
 */
exports.login = function(req, res, next){
	var result = { success: false },
		data = req._data;

	biz.customer.login(data, function (err, status, msg, doc){
		if(err) return next(err);
		if(!!status){
			result.msg = msg;
			return res.send(result);
		}
		/* session */
		req.session.lv = 2;
		req.session.customerId = doc._id;
		req.session.role = 'customer';
		req.session.customer = doc;
		/* result */
		result.success = true;
		res.send(result);
	});
};

/**
 * 用户登陆成功
 *
 * @params
 * @return
 */
exports.login_success = function(req, res, next){
	var user = req.session.user;
	res.redirect('/i/');
};