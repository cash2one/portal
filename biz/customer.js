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
 * @params
 * @return
 */
exports.findAll = function(name, cb){
	name = !!name ? '%'+ name +'%' : '%%';
	mysql_util.find(null, 'g_customer', [['USER_NAME', 'like', name]], [['CREATE_TIME', 'DESC']], null, function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
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
	this.findByName(logInfo.Email, function (err, doc){
		if(err) return cb(err);
		if(!doc) return cb(null, 3, ['用户名或密码输入错误', 'Email']);
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
	mysql_util.find(null, 'g_customer', [['USER_NAME', '=', name]], null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, mysql.checkOnly(docs) ? docs[0]: null);
	});
};

/**
 *
 * @params
 * @return
 */
exports.saveNew = function(newInfo, cb){
	this.findByName(newInfo.USER_NAME, function (err, doc){
		if(err) return cb(err);
		if(doc) return cb(null, '用户已存在');
		// TODO
		var sql = 'INSERT INTO g_customer (id, USER_NAME, USER_PASS, AVATAR_URL, EMAIL, MOBILE, REAL_NAME, CREATE_TIME, STATUS) values (?, ?, ?, ?, ?, ?, ?, ?, ?)';
		var postData = [
			util.genObjectId(),
			newInfo.USER_NAME,
			md5.hex('123456'),
			newInfo.AVATAR_URL,
			newInfo.EMAIL,
			newInfo.MOBILE,
			newInfo.REAL_NAME,
			new Date(),
			newInfo.STATUS || 1
		];
		mysql.query(sql, postData, function (err, status){
			if(err) return cb(err);
			cb(null, status);
		});
	});
};