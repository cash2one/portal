/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var conf = require('../../settings');

var fs = require('fs'),
	path = require('path'),
	cwd = process.cwd(),
	qs = require('querystring'),
	velocity = require('velocityjs');

var biz = {
	zone: require('../../biz/zone')
};

var exports = module.exports;

/**
 *
 * @param
 * @return
 */
exports.zoneUI = function(req, res, next){
	var zone_name = req.params.zone;

	res.render('front/Zone', {
		conf: conf,
		title: conf.corp.name,
		description: '',
		keywords: ',dolalive,html5'
	});
};

(function (exports, global){
	var timeout = conf.html.cache_time;
	var cache_data = null;
	var last_time = new Date();
	last_time = new Date(last_time.valueOf() + timeout);

	/**
	 * 获取开放站点缓存
	 *
	 * @params
	 * @return
	 */
	exports.getDefOpenSite = function(cb){
		if(!!cache_data){
			if(new Date() < last_time)
				return cb(null, cache_data);
		}

		last_time = new Date();
		last_time = new Date(last_time.valueOf() + timeout);

		// 查找默认开发站点
		biz.zone.findDefOpenSite(function (err, doc){
			if(err) return cb(err);
			if(!doc) return cb(null, '/zz/');
			cache_data = '/'+ doc.SHORT_NAME +'/';
			cb(null, cache_data);
		});
	};
})(exports);

(function (exports){
	/**
	 * 检测开放站点是否存在
	 *
	 * @param
	 * @return
	 */
	exports.checkExistOpenSite = function(req, res, next){
		var zone_name = req.params.zone;

		checkExistOpenSite_Step_1(zone_name, function (err, bool){
			if(err) return next(err);
			// 不存在此站点，则跳转到默认开放站点
			if(!bool){
				exports.getDefOpenSite(function (err, url){
					if(err) return next(err);
					res.redirect(url);
				});
				return;
			}
			next();
		});
	};

	/**
	 * 检测开放站点是否存在（步骤1）
	 *
	 * @param
	 * @return
	 */
	function checkExistOpenSite_Step_1(zone_name, cb){
		exports.getCacheOpenSites(function (err, docs){
			if(err) return cb(err);
			cb(null, -1 !== docs.indexOf(zone_name));
		});
	}
})(exports);

(function (exports, global){
	var timeout = conf.html.cache_time;
	var cache_data = null;
	var last_time = new Date();
	last_time = new Date(last_time.valueOf() + timeout);

	/**
	 * 获取开放站点缓存
	 *
	 * @params
	 * @return
	 */
	exports.getCacheOpenSites = function(cb){
		if(!!cache_data){
			if(new Date() < last_time)
				return cb(null, cache_data);
		}

		last_time = new Date();
		last_time = new Date(last_time.valueOf() + timeout);

		biz.zone.findOpenSiteList(function (err, docs){
			if(err) return cb(err);
			var arr = [];
			for(var i in docs){
				var doc = docs[i];
				arr.push(doc.SHORT_NAME);
			}
			cache_data = arr;
			cb(null, cache_data);
		});
	};
})(exports);