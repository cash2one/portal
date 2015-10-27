/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils');

var conf = require('../../settings');

var biz = {
	role: require('../../../biz/role')
};

/**
 *
 * @params
 * @return
 */
exports.indexUI = function(req, res, next){
	biz.role.findAll(null, function (err, docs){
		// TODO
		res.render('manage/role/Index', {
			conf: conf,
			title: '角色管理 | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				roles: docs
			}
		});
	});
};