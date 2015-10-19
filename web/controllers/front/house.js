/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	cache = util.cache;

var conf = require('../../settings');

var fs = require('fs'),
	path = require('path'),
	cwd = process.cwd(),
	qs = require('querystring'),
	EventProxy = require('eventproxy'),
	velocity = require('velocityjs');

var biz = {
	page_position: require('../../biz/page_position'),
	zone: require('../../biz/zone'),
	ad: require('../../biz/ad')
};

var exports = module.exports;

/**
 *
 * @param
 * @return
 */
exports.indexUI = function(req, res, next){
	// TODO
	res.render('front/house/1.0.2/Index', {
		conf: conf,
		title: '房产 | 郑州 | '+ conf.corp.name,
		description: '',
		keywords: ',dolalive,html5'
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