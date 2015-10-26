/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	EventProxy = require('eventproxy'),
	path = require('path'),
	fs = require('fs'),
	velocity = require('velocityjs'),
	cwd = process.cwd();

var conf = require('../../settings'),
	macros = require('../../lib/macro');

var biz = {
	menu: require('../../../biz/menu')
};

/**
 *
 * @params
 * @return
 */
exports.indexUI = function(req, res, next){
	// TODO
	var ep = EventProxy.create('topMenu', 'childMenu', function (topMenu, childMenu){
		res.render('manage/Index', {
			conf: conf,
			title: '后台管理 | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				topMenu: topMenu,
				childMenu: childMenu
			}
		});
	});

	ep.fail(function (err){
		next(err);
	});

	biz.menu.getByPId('0', function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('topMenu', docs);
	});

	biz.menu.getChildrenByPId('4', function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('childMenu', docs);
	});
};

/**
 *
 * @params
 * @return
 */
exports.indexUI_sideNav = function(req, res, next){
	var result = { success: false };
	var pid = req.params.pid;

	biz.menu.getChildrenByPId(pid, function (err, docs){
		if(err) return next(err);

		exports.getTemplate(function (err, template){
			if(err){
				result.msg = err;
				return res.send(result);
			}

			var html = velocity.render(template, {
				conf: conf,
				data: { childMenu: docs }
			}, macros);

			result.success = true;
			result.data = html;
			res.send(result);
		});
	});
};

(function (exports){
	var temp = null;

	/**
	 * 获取模板
	 *
	 * @params
	 * @return
	 */
	exports.getTemplate = function(cb){
		if(temp) return cb(null, temp);

		fs.readFile(path.join(cwd, 'views', 'manage', '_pagelet', 'Side.Nav.html'), 'utf8', function (err, template){
			if(err) return cb(err);
			temp = template;
			cb(null, temp);
		});
	};
})(exports);

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