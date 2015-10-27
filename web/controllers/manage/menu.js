/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils');

var conf = require('../../settings');

var biz = {
	manager: require('../../../biz/manager')
};

/**
 *
 * @params
 * @return
 */
exports.indexUI = function(req, res, next){
	res.render('manage/menu/Index', {
		conf: conf,
		title: '菜单管理 | '+ conf.corp.name,
		description: '',
		keywords: ',dolalive,html5'
	});
};