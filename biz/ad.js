/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	mysql_util = util.mysql_util,
	mysql = util.mysql;

var EventProxy = require('eventproxy');

var biz = {
	page_position: require('./page_position')
};

var exports = module.exports;

var _sql = 'SELECT a.*, b.CORP_NAME_EN '+
			'FROM w_ad a, g_customer_corp b '+
			'WHERE '+
			'a.CORP_ID=b.id AND '+
			'a.STATUS=1 AND '+
			'(NOW() BETWEEN a.START_TIME and a.END_TIME) AND '+
			'a.ZONE_ID=? AND '+
			'a.PAGE_POSITION_ID in (SELECT id FROM w_page_position WHERE PAGE_ID=?) '+
			'ORDER BY a.SORT ASC';

/**
 * 通过页面id获取该页面的全部广告信息
 *
 * @param
 * @return
 */
exports.findAdsByPage = function(page_id, zone_id, cb){
	// ep
	var ep = EventProxy.create('ads', 'positions', 'positions_ext', function (ads, positions, positions_ext){
		// 添加扩展字段
		for(var i in positions_ext){
			var ext = positions_ext[i];
			// for
			for(var j in positions){
				var position = positions[j];
				if(ext.PID === position.id){
					position[ext._KEY] = ext._VALUE;
					break;
				}
			}
		}

		// 添加广告
		for(var i in ads){
			var ad = ads[i];
			// for
			for(var j in positions){
				var position = positions[j];
				if(ad.PAGE_POSITION_ID === position.id){
					if(!position.ads) position.ads = [];
					position.ads.push(ad);
					break;
				}
			}
		}

		var newArr = {};
		// for
		for(var i in positions){
			var position = positions[i];
			newArr[position.id] = position;
		}
		cb(null, newArr);
	});

	ep.fail(function (err){
		cb(err);
	});

	mysql.query(_sql, [zone_id, page_id], function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('ads', docs);
	});

	biz.page_position.findPositionsByPage(page_id, function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('positions', docs);
	});

	biz.page_position.findPositionExtsByPage(page_id, function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('positions_ext', docs);
	});
};