/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var mysqlUtil = require("../lib/mysqlUtil");

/**
 * 获取商品类别
 *
 * @param {String} pid 父ID
 * @return
 */
exports.getByPId = function(pid, cb){
	mysqlUtil.query('SELECT * FROM w_goods_type WHERE PID=? ORDER BY SORT', [pid], function (err, rows, fields){
		if(err) return next(err);
		cb(err, rows);
	});
};