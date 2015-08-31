/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	mysql_util = util.mysql_util,
	mysql = util.mysql;

var exports = module.exports;

/**
 * 获取全部开放站点列表
 *
 * @param
 * @return
 */
exports.findOpenSiteList = function(cb){
	mysql_util.find(null, 'w_zone', [['IS_OPEN', '=', '1']], null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};

/**
 * 获取默认开放站点
 *
 * @param
 * @return
 */
exports.findDefOpenSite = function(cb){
	mysql_util.find(null, 'w_zone', [['IS_DEF_SITE', '=', '1']], null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, mysql.checkOnly(docs) ? docs[0] : null);
	});
};

(function (exports){
	// TODO
})(exports);