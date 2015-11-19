/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	md5 = util.md5,
	mysql_util = util.mysql_util,
	mysql = util.mysql;

var exports = module.exports;

/**
 * 获取子的下一级
 *
 * @param
 * @return
 */
exports.getByPId = function(pid, cb){
	mysql_util.find(null, 'g_menu', [['PID', '=', pid], ['TYPE', '=', 1]], [['SORT', 'ASC']], null, function (err, docs){
		if(err) return cb(err);
		cb(null, docs)
	});
};

/**
 * 获取所有子集
 *
 * @param
 * @return
 */
exports.getChildrenByPId = function(pid, cb){
	var sql = 'SELECT t.* FROM g_menu t WHERE CONCAT(t.PATH, ",", t.PID, ",") LIKE CONCAT((SELECT CONCAT(PATH, ",", PID) FROM g_menu WHERE id=?), ",", ?, ",%") ORDER BY SORT ASC';
	mysql.query(sql, [pid, pid], function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};