/*!
 * zswhcm-portal
 * Copyright(c) 2015 zswhcm-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var mysql = require('mysql');

var dbconf = require('../settings').db,
	pool = null;

function initPool(){
	pool = mysql.createPool({
		connectionLimit: dbconf.connectionLimit,
		host: dbconf.host,
		user: dbconf.user,
		password: dbconf.pass,
		database: dbconf.database,
		port: dbconf.port
	});
}

exports.query = function(sql, params, cb){
	if(!pool) initPool();

	pool.getConnection(function (err, conn){
		if(err) return cb(err);
		conn.query(sql, params, function (err, docs, fields){
			conn.release();
			cb(err, docs, fields);
		});
	});
};

/**
 * 检测唯一性
 *
 * @param {Array} docs
 * @return {Boolean}
 */
exports.checkOnly = function(docs){
	return !!docs && 1 === docs.length;
}