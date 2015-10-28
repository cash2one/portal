/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils');

var conf = require('../../settings');

var biz = {
	house_project: require('../../../biz/house_project')
};

/**
 *
 * @params
 * @return
 */
exports.indexUI = function(req, res, next){
	biz.house_project.findAll(null, function (err, docs){
		// TODO
		res.render('manage/house/project/Index', {
			conf: conf,
			title: '项目管理 | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				projects: docs
			}
		});
	});
};