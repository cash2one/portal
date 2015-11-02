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
	house_project: require('../../../biz/house_project'),
	page_position: require('../../../biz/page_position'),
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
	var ep = EventProxy.create('house_project', function (house_project){
		// TODO
		res.render('front/house/1.0.3/Index', {
			conf: conf,
			title: '房产 | 郑州 | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				house_project: house_project
			}
		});
	});

	ep.fail(function (err){
		next(err);
	});

	biz.house_project.findAll(null, function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('house_project', docs);
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
exports.signUI = function(req, res, next){
	// TODO
	res.render('front/house/Sign', {
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
exports.projectUI = function(req, res, next){
	var id = req.params.id;
	// TODO
	var ep = EventProxy.create('house_project', 'comments', function (house_project, comments){
		// TODO
		res.render('front/house/Project', {
			conf: conf,
			title: '房贷计算 | '+ conf.corp.name,
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

	biz.house_project.getById(id, function (err, doc){
		if(err) return ep.emit('error', err);
		ep.emit('house_project', doc);
	});

	biz.comment.findBySource(id, function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('comments', docs);
	});
};