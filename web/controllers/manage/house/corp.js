/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils');

var conf = require('../../../settings');

var biz = {
	customer: require('../../../../biz/customer'),
	corp: require('../../../../biz/corp')
};

/**
 *
 * @params
 * @return
 */
exports.indexUI = function(req, res, next){
	biz.corp.findAll('564d33564e7d4a6005b371b0', function (err, docs){
		// TODO
		res.render('manage/house/corp/Index', {
			conf: conf,
			title: req.query.name +' | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				title: req.query.name,
				projects: docs
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
	biz.customer.findAll(null, function (err, docs){
		if(err) return next(err);

		res.render('manage/house/corp/Add', {
			conf: conf,
			title: '新增 | '+ req.query.name +' | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				customers: docs,
				title: req.query.name
			}
		});
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
	biz.corp.saveNew(data, function (err, status){
		if(err) return next(err);
		// TODO
		result.success = true;
		res.send(result);
	});
};