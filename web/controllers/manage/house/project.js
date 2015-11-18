/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils');

var conf = require('../../../settings');

var biz = {
	project: require('../../../../biz/house/project')
};

/**
 *
 * @params
 * @return
 */
exports.indexUI = function(req, res, next){
	biz.project.findAll(null, function (err, docs){
		// TODO
		res.render('manage/house/project/Index', {
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
	res.render('manage/house/project/Add', {
		conf: conf,
		title: '新增 | '+ req.query.name +' | '+ conf.corp.name,
		description: '',
		keywords: ',dolalive,html5',
		data: {
			title: req.query.name
		}
	});
};