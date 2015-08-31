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
 * 获取该页所有广告
 *
 * @param
 * @return
 */
exports.findAds_zoneUI = function(req, res, next){
	// TODO
	var zone_id = req.flash('zone_id')[0];
	var page_id = req.flash('page_id')[0];

	var ep = EventProxy.create('ads', 'positions', function (ads, positions){
		console.log(arguments);
		next();
	});

	ep.fail(function (err){
		next(err);
	});

	biz.ad.findAdsByPage(page_id, zone_id, function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('ads', docs);
	});

	biz.page_position.findPositionsByPage(page_id, function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('positions', docs);
	});
};

/**
 *
 * @param
 * @return
 */
exports.zoneUI = function(req, res, next){
	var zone_name = req.params.zone;

	var openSites = req.flash('openSites')[0],
		zone = openSites[zone_name];

	res.render('front/Zone', {
		conf: conf,
		title: conf.corp.name,
		description: '',
		keywords: ',dolalive,html5',
		data: {
			zone: zone,
			openSites: openSites
		}
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
		cache.get('DefOpenSite', conf.html.cache_time, [func], function (err, data){
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

		cache.get('OpenSiteList', conf.html.cache_time, [func], function (err, data){
			if(err) return next(err);

			var zone = data[zone_name];
			// 检测开放站点是否存在
			if(!zone){
				return exports.getDefOpenSite(function (err, url){
					if(err) return next(err);
					res.redirect(url);
				});
			}

			req.flash('zone_id', zone.id);
			req.flash('openSites', data);
			next();
		});
	};
})(exports);