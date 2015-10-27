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
			title: '客户管理 | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				customers: docs
			}
		});
	});
};