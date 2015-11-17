/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils');

var conf = require('../../settings');

var biz = {
	manager: require('../../../biz/mUser')
};

/**
 *
 * @params
 * @return
 */
exports.changePwdUI = function(req, res, next){
	res.render('manage/manager/ChangePwd', {
		conf: conf,
		title: '修改密码 | '+ conf.corp.name,
		description: '',
		keywords: ',dolalive,html5'
	});
};

/**
 *
 * @params
 * @return
 */
exports.indexUI = function(req, res, next){
	biz.manager.findAll(null, function (err, docs){
		// TODO
		res.render('manage/manager/Index', {
			conf: conf,
			title: '用户管理 | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				managers: docs
			}
		});
	});
};

/**
 *
 * @params
 * @return
 */
exports.loginUI = function(req, res, next){
	res.render('manage/manager/Login', {
		conf: conf,
		title: '后台登陆 | '+ conf.corp.name,
		description: '',
		keywords: ',dolalive,html5'
	});
};

/**
 *
 * @params
 * @return
 */
exports.login = function(req, res, next){
	var result = { success: false },
		data = req._data;

	biz.manager.login(data, function (err, status, msg, doc){
		if(err) return next(err);
		if(!!status){
			result.msg = msg;
			return res.send(result);
		}
		/* session */
		req.session.lv = 1;
		req.session.userId = doc.id;
		req.session.role = 'admin';
		req.session.user = doc;
		/* result */
		result.success = true;
		res.send(result);
	});
};

/**
 * 用户退出
 *
 * @params
 * @return
 */
exports.logoutUI = function(req, res, next){
	req.session.destroy();
	res.redirect('/manager/login');
};

/**
 * 用户会话验证
 *
 * @params
 * @return
 */
exports.login_validate = function(req, res, next){
	if(1 === req.session.lv) return next();
	if(req.xhr) return res.send({ success: false, msg: '无权访问' });
	res.redirect('/manager/login');
};