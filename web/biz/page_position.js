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

var exports = module.exports;

/**
 * 获取广告位（通过页ID查找）
 *
 * @param
 * @return
 */
exports.findPositionsByPage = function(page_id, cb){
	// ep
	var ep = EventProxy.create('positions', 'positions_ext', function (positions, positions_ext){
		for(var i in positions_ext){
			var ext = positions_ext[i];
			for(var j in positions){
				var position = positions[j];
				if(ext.PID === position.id){
					position[ext._KEY] = ext._VALUE;
					break;
				}
			}
		}
		cb(null, positions);
	});

	ep.fail(function (err){
		next(err);
	});

	mysql_util.find(null, 'w_page_position', [['PAGE_ID', '=', page_id]], null, null, function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('positions', docs);
	});

	this.findPositionExtsByPage(page_id, function (err, docs){
		if(err) return ep.emit('error', err);
		ep.emit('positions_ext', docs);
	});
};

/**
 * 获取扩展数据
 *
 * @param
 * @return
 */
exports.findPositionExtsByPage = function(page_id, cb){
	var sql = 'SELECT * FROM w_page_position_ext WHERE PID in (SELECT id FROM w_page_position WHERE PAGE_ID=?)';
	mysql.query(sql, [page_id], function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};