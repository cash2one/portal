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

	var zone = req.flash('zone')[0];

	res.render('front/Zone', {
		conf: conf,
		title: conf.corp.name,
		description: '',
		keywords: ',dolalive,html5'
	});
};

(function (exports){
	/**
	 * 查找默认开发站点（默认郑州）
	 *
	 * @params
	 * @return
	 */
	function func(cb){
		biz.zone.findDefOpenSite(function (err, doc){
			if(err) return cb(err);
			cb(null, !doc ? '/zz/' : '/'+ doc.SHORT_NAME +'/');
		});
	}

	/**
	 * 获取开放站点缓存
	 *
	 * @params
	 * @return
	 */
	exports.getDefOpenSite = function(cb){
		cache.get('DefOpenSite', 1000 * 5, func, function (err, data){
			if(err) return cb(err);
			cb(null, data);
		});
	};
})(exports);


(function (exports){
	/**
	 * 查找开发站点列表
	 *
	 * @param
	 * @return
	 */
	function func(cb){
		biz.zone.findOpenSiteList(function (err, docs){
			if(err) return cb(err);
			var arr = {};
			for(var i in docs){
				var doc = docs[i];
				arr[doc.SHORT_NAME] = doc;
			}
			cb(null, arr);
		});
	};

	/**
	 * 检测开放站点是否存在
	 *
	 * @param
	 * @return
	 */
	exports.checkExistOpenSite = function(req, res, next){
		var zone_name = req.params.zone;

		cache.get('OpenSiteList', 1000 * 3, func, function (err, data){
			if(err) return next(err);

			var zone = data[zone_name];
			// 检测开放站点是否存在
			if(!zone){
				return exports.getDefOpenSite(function (err, url){
					if(err) return next(err);
					res.redirect(url);
				});
			}

			req.flash('zone', zone);
			next();
		});
	};
})(exports);