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
 *
 * @param
 * @return
 */
exports.getById = function(id, cb){
	mysql_util.getById(null, 's_manager', id, function (err, doc){
		if(err) return cb(err);
		cb(null, doc);
	});
};

/**
 * 用户登陆
 *
 * @params {Object} logInfo 用户登陆信息
 * @params {Function} cb 回调函数
 * @return
 */
exports.login = function(logInfo, cb){
	this.findByName(logInfo.UserName, function (err, doc){
		if(err) return cb(err);
		if(!doc) return cb(null, 3, ['用户名或密码输入错误', 'UserName']);
		if(md5.hex(logInfo.UserPass) !== doc.USER_PASS)
			return cb(null, 6, ['用户名或密码输入错误', 'UserPass'], doc);
		cb(null, null, null, doc);
	});
};

/**
 * 查找用户通过用户名
 *
 * @params
 * @return
 */
exports.findByName = function(name, cb){
	mysql_util.find(null, 's_manager', [['USER_NAME', '=', name]], null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, mysql.checkOnly(docs) ? docs[0]: null);
	});
};

/**
 *
 * @params
 * @return
 */
exports.findAll = function(name, cb){
	name = !!name ? '%'+ name +'%' : '%%';
	mysql_util.find(null, 's_manager', [['USER_NAME', 'like', name]], [['CREATE_TIME', 'DESC']], null, function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};