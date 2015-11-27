/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	cache = util.cache;

var conf = require('../../settings'),
	macros = require('../../lib/macro');

var fs = require('fs'),
	path = require('path'),
	cwd = process.cwd(),
	qs = require('querystring'),
	EventProxy = require('eventproxy'),
	velocity = require('velocityjs');

var biz = {
	comment: require('../../../biz/comment'),
	house: {
		project_apply: require('../../../biz/house/project_apply'),
		project: require('../../../biz/house/project')
	},
	zone: require('../../../biz/zone'),
	ad: require('../../../biz/ad')
};

var exports = module.exports;

/**
 *
 * @param
 * @return
 */
exports.indexUI = function(req, res, next){
	// TODO
	var ads = req.flash('ads')[0];

	var ep = EventProxy.create('house_projects', function (house_projects){
		// TODO
		res.render('front/house/1.0.3/Index', {
			conf: conf,
			title: '房产 | 郑州 | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				ads: ads,
				house_projects: house_projects
			}
		});
	});

	ep.fail(function (err){
		next(err);
	});

	biz.house.project.findAll(null, function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('house_projects', docs);
	});
};

var houses = {
	'kqyd': '康桥悦岛',
	'zylt': '紫域澜庭',
	'xmgct': '新芒果春天',
	'eqjywt': '二七金运外滩',
	'hdfcht': '恒大翡翠华庭'
};

/**
 *
 * @param
 * @return
 */
exports.houseUI = function(req, res, next){
	var house = req.params.house;
	// TODO
	res.render('front/house/1.0.1/House', {
		conf: conf,
		title: houses[house] +' | 房产 | 郑州 | '+ conf.corp.name,
		description: '',
		keywords: ',dolalive,html5',
		data: {
			house: house
		}
	});
};

/**
 *
 * @param
 * @return
 */
exports.caculateUI = function(req, res, next){
	// TODO
	res.render('front/house/Caculate', {
		conf: conf,
		title: '房贷计算 | '+ conf.corp.name,
		description: '',
		keywords: ',dolalive,html5'
	});
};

/**
 *
 * @param
 * @return
 */
exports.applyUI = function(req, res, next){
	var id = req.params.id;
	// TODO
	res.render('front/house/Apply', {
		conf: conf,
		title: '获取优惠 | '+ conf.corp.name,
		description: '',
		keywords: ',dolalive,html5',
		data: {
			id: id
		}
	});
};

/**
 *
 * @params
 * @return
 */
exports.apply = function(req, res, next){
	var result = { success: false },
		data = req._data;
	// TODO
	data.PROJECT_ID = req.params.id;
	// TODO
	biz.house.project_apply.saveNew(data, function (err, msg, status){
		if(err) return next(err);
		// TODO
		if(!!msg){
			result.msg = msg;
			return res.send(result);
		}
		// TODO
		result.success = true;
		res.send(result);
	});
};

/**
 *
 * @param
 * @return
 */
exports.projectUI = function(req, res, next){
	var id = req.params.id;
	// TODO
	var ep = EventProxy.create('house_project', 'comments', function (house_project, comments){
		// TODO
		res.render('front/house/project/1.0.2/Index', {
			conf: conf,
			title: '房产项目 | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				comments: comments,
				house_project: house_project
			}
		});
	});

	ep.fail(function (err){
		next(err);
	});

	biz.house.project.getById(id, function (err, doc){
		if(err) return ep.emit('error', err);
		ep.emit('house_project', doc);
	});

	biz.comment.findBySource(id, function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('comments', docs);
	});
};

/**
 *
 * @param
 * @return
 */
exports.commentUI = function(req, res, next){
	var id = req.params.id;
	// TODO
	var ep = EventProxy.create('house_projects', 'comments', function (house_projects, comments){
		// TODO
		res.render('front/house/Comment', {
			conf: conf,
			title: '评论 | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				comments: comments,
				house_projects: house_projects
			}
		});
	});

	ep.fail(function (err){
		next(err);
	});

	biz.house.project.getById(id, function (err, doc){
		if(err) return ep.emit('error', err);
		ep.emit('house_projects', doc);
	});

	biz.comment.findBySource(id, function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('comments', docs);
	});
};