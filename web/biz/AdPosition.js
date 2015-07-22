/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var mysqlUtil = require("../lib/mysqlUtil");

/**
 * 获取该页全部的广告位
 *
 * @param
 * @return
 */
exports.getByPageURL = function(page_url, cb){
	mysqlUtil.query('SELECT b.* FROM w_page a, w_ad_position b WHERE a.id=b.PAGE_ID AND a.PAGE_URL=?', [page_url], function (err, rows, fields){
		if(err) return next(err);
		cb(err, rows);
	});
};