/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils');

var conf = require('../../settings'),
	EventProxy = require('eventproxy');

var biz = {
	corp_type: require('../../../biz/corp_type'),
	customer: require('../../../biz/customer'),
	corp: require('../../../biz/corp')
};

/**
 *
 * @params
 * @return
 */
exports.indexUI = function(req, res, next){
	biz.corp.findAll(function (err, docs){
		// TODO
		res.render('manage/corp/Index', {
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
	var ep = EventProxy.create('customers', 'corp_types', function (customers, corp_types){
		// TODO
		res.render('manage/corp/Add', {
			conf: conf,
			title: '新增 | '+ req.query.name +' | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				corp_types: corp_types,
				customers: customers,
				title: req.query.name
			}
		});
	});

	ep.fail(function (err){
		next(err);
	});

	biz.customer.findByNotHaveCorp(function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('customers', docs);
	});

	biz.corp_type.findAll(function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('corp_types', docs);
	});
};

/**
 *
 * @params
 * @return
 */
exports.editUI = function(req, res, next){
	var ep = EventProxy.create('corp', 'corp_types', function (corp, corp_types){
		// TODO
		res.render('manage/corp/Edit', {
			conf: conf,
			title: '编辑 | '+ req.query.name +' | '+ conf.corp.name,
			description: '',
			keywords: ',dolalive,html5',
			data: {
				corp_types: corp_types,
				corp: corp,
				title: req.query.name
			}
		});
	});

	ep.fail(function (err){
		next(err);
	});

	biz.corp.getById(req.query.id, function (err, doc){
		if(err) return ep.emit('error', err);
		ep.emit('corp', doc);
	});

	biz.corp_type.findAll(function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('corp_types', docs);
	});
};

/**
 *
 * @params
 * @return
 */
exports.add = function(req, res, next){
	var result = { success: false },
		data = req._data;
	// TODO
	biz.corp.saveNew(data, function (err, status){
		if(err) return next(err);
		// TODO
		result.success = true;
		res.send(result);
	});
};

/**
 *
 * @params
 * @return
 */
exports.edit = function(req, res, next){
	var result = { success: false },
		data = req._data;
	// TODO
	biz.corp.editInfo(data, function (err, status){
		if(err) return next(err);
		if('string' === typeof status){
			result.msg = status;
			return res.send(result);
		}
		// TODO
		result.success = true;
		res.send(result);
	});
};