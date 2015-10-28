/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils');

var conf = require('../../settings');

var biz = {
	comment: require('../../../biz/comment')
};

/**
 *
 * @params
 * @return
 */
exports.indexUI = function(req, res, next){
	biz.comment.findAll(null, function (err, docs){
		// TODO
		res.render('manage/comment/Index', {
			conf: conf,
			title: '评论信息维护 | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				comments: docs
			}
		});
	});
};