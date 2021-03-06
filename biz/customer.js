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
 * 获取未拥有公司的帐号
 *
 * @params
 * @return
 */
exports.findByNotHaveCorp = function(cb){
	var sql = 'SELECT a.* FROM g_customer a WHERE a.id NOT IN (SELECT CUSTOMER_ID FROM g_customer_corp)';
	mysql.query(sql, null, function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};

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
	this.findByName(logInfo.USER_NAME, function (err, doc){
		if(err) return cb(err);
		if(!doc) return cb(null, ['用户名或密码输入错误', 'USER_NAME']);
		if(md5.hex(logInfo.USER_PASS) !== doc.USER_PASS)
			return cb(null, ['用户名或密码输入错误', 'USER_PASS'], doc);
		cb(null, null, doc);
	});
};

/**
 *
 * @params
 * @return
 */
exports.getById = function(id, cb){
	mysql_util.find(null, 'g_customer', [['id', '=', id]], null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, mysql.checkOnly(docs) ? docs[0]: null);
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
	// format
	newInfo.USER_NAME = newInfo.USER_NAME || '';
	newInfo.USER_NAME = newInfo.USER_NAME.trim();
	if('' === newInfo.USER_NAME) return cb(null, ['用户名不能为空', 'USER_NAME']);
	// TODO
	this.findByName(newInfo.USER_NAME, function (err, doc){
		if(err) return cb(err);
		if(doc) return cb(null, ['用户名已经存在', 'USER_NAME']);
		// TODO
		var sql = 'INSERT INTO g_customer (id, USER_NAME, USER_PASS, AVATAR_URL, EMAIL, MOBILE, REAL_NAME, CREATE_TIME, STATUS) values (?, ?, ?, ?, ?, ?, ?, ?, ?)';
		var postData = [
			util.genObjectId(),
			newInfo.USER_NAME.toLowerCase(),
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
			cb(null, null, status);
		});
	});
};

/**
 *
 * @params
 * @return
 */
exports.editInfo = function(newInfo, cb){
	var sql = 'UPDATE g_customer set AVATAR_URL=?, EMAIL=?, MOBILE=?, REAL_NAME=?, STATUS=? WHERE id=?';
	var postData = [
		newInfo.AVATAR_URL,
		newInfo.EMAIL,
		newInfo.MOBILE,
		newInfo.REAL_NAME,
		newInfo.STATUS || 1,
		newInfo.id
	];
	mysql.query(sql, postData, function (err, status){
		if(err) return cb(err);
		cb(null, null, status);
	});
};