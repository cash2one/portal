/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils');

var conf = require('../../settings');

var biz = {
	menu: require('../../../biz/menu')
};

/**
 *
 * @params
 * @return
 */
exports.indexUI = function(req, res, next){
	biz.menu.getByPId('0', function (err, docs){

		res.render('manage/Index', {
			conf: conf,
			title: '后台管理 | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				menu: docs
			}
		});
	});
};

/**
 *
 * @params
 * @return
 */
exports.welcomeUI = function(req, res, next){
	res.render('manage/Welcome', {
		conf: conf,
		title: '欢迎页 | 后台管理 | '+ conf.corp.name,
		description: '',
		keywords: ',dolalive,html5'
	});
};