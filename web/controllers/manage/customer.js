/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils');

var conf = require('../../settings');

var biz = {
	customer: require('../../../biz/customer')
};

/**
 *
 * @params
 * @return
 */
exports.indexUI = function(req, res, next){
	biz.customer.findAll(null, function (err, docs){
		// TODO
		res.render('manage/customer/Index', {
			conf: conf,
			title: req.query.name +' | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				title: req.query.name,
				customers: docs
			}
		});
	});
};

/**
 *
 * @params
 * @return
 */
exports.addUI = function(req, res, next){
	// TODO
	res.render('manage/customer/Add', {
		conf: conf,
		title: '新增 | '+ req.query.name +' | '+ conf.corp.name,
		description: '',
		keywords: ',dolalive,html5',
		data: {
			title: req.query.name
		}
	});
};

/**
 *
 * @params
 * @return
 */
exports.add = function(req, res, next){
	var result = { success: false },
		data = req._data;
	// TODO
	biz.customer.saveNew(data, function (err, status){
		if(err) return next(err);
		if('string' === typeof status){
			result.msg = status;
			return res.send(result);
		}
		// TODO
		result.success = true;
		res.send(result);
	});
};