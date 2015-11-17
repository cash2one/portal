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
	biz.menu.getByPId('0', function (err, docs){
		if(err) return next(err);
		// TODO
		res.render('manage/menu/Index', {
			conf: conf,
			title: req.query.name +' | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				title: req.query.name,
				tree: docs
			}
		});
	});
};

exports.children = function(req, res, next){
	var result = { success: false },
		pid = req.params.pid;
	// TODO
	biz.menu.getByPId(pid, function (err, docs){
		if(err) return next(err);
		// TODO
		result.data = docs;
		result.success = true;
		res.send(result);
	});
};

exports.indexUI_list = function(req, res, next){
	var result = { success: false },
		pid = req.params.pid;
	// TODO
	biz.menu.getByPId(pid, function (err, docs){
		if(err) return next(err);
		// TODO
		exports.getTemplate(function (err, template){
			if(err) return next(err);
			// TODO
			var html = velocity.render(template, {
				conf: conf,
				data: { tree: docs }
			}, macros);
			// TODO
			result.data = html;
			result.success = true;
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
		// if(temp) return cb(null, temp);
		fs.readFile(path.join(cwd, 'views', 'manage', 'menu', '_pagelet', 'Side.List.html'), 'utf8', function (err, template){
			if(err) return cb(err);
			temp = template;
			cb(null, template);
		});
	};
})(exports);