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
exports.findAll = function(project_id, cb){
	mysql_util.find(null, 'g_house_project_apply', [['PROJECT_ID', '=', project_id]], [['CREATE_TIME', 'DESC']], null, function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};

/**
 *
 * @params
 * @return
 */
exports.saveNew = function(newInfo, cb){
	// format
	newInfo.PROJECT_ID = newInfo.PROJECT_ID || '';
	newInfo.PROJECT_ID = newInfo.PROJECT_ID.trim();
	if('' === newInfo.PROJECT_ID) return cb(null, ['输入格式错误', 'PROJECT_ID']);
	// format
	newInfo.REAL_NAME = newInfo.REAL_NAME || '';
	newInfo.REAL_NAME = newInfo.REAL_NAME.trim();
	if('' === newInfo.REAL_NAME) return cb(null, ['姓名不能为空', 'REAL_NAME']);
	// format
	newInfo.MOBILE = newInfo.MOBILE || '';
	newInfo.MOBILE = newInfo.MOBILE.trim();
	if('' === newInfo.MOBILE) return cb(null, ['手机号不能为空', 'MOBILE']);
	// format
	var mobile = util.checkMobile(newInfo.MOBILE);
	if('' === mobile) return cb(null, ['请输入正确的手机号', 'MOBILE']);
	// TODO
	var sql = 'INSERT INTO g_house_project_apply (id, PROJECT_ID, MOBILE, REAL_NAME, CREATE_TIME) values (?, ?, ?, ?, ?)';
	var postData = [
		util.genObjectId(),
		newInfo.PROJECT_ID,
		newInfo.MOBILE,
		newInfo.REAL_NAME,
		new Date()
	];
	mysql.query(sql, postData, function (err, status){
		if(err) return cb(err);
		cb(null, null, status);
	});
};