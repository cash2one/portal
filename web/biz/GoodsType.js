/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	mysql = util.mysql;

/**
 * 获取商品类别
 *
 * @param {String} pid 父ID
 * @return
 */
exports.getByPId = function(pid, cb){
	mysql.query('SELECT * FROM w_goods_type WHERE PID=? ORDER BY SORT', [pid], function (err, rows, fields){
		if(err) return cb(err);
		cb(null, rows);
	});
};