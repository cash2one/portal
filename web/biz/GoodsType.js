/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var mysqlUtil = require("../lib/mysqlUtil");

/**
 * 获取顶级商品类别（大类）
 *
 * @param
 * @return
 */
exports.getTopAll = function(cb){
	mysqlUtil.query('SELECT * FROM w_goods_type where PID="0" ORDER BY SORT', null, function (err, rows, fields){
		if(err) return next(err);
		cb(err, rows);
	});
};