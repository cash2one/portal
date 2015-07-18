/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var db = require('../settings').db,
	pool = null;

var mysql = require('mysql');

function initPool(){
	pool  = mysql.createPool({
		connectionLimit: db.connectionLimit,
		host: db.host,
		user: db.user,
		password: db.pass,
		database: db.database,
		port: db.port
	});
}

exports.query = function(sql, params, cb){
	if(!pool) initPool();

	pool.getConnection(function (err, conn){
		if(err) throw err;
		conn.query(sql, params, function (err, rows, fields){
			conn.release();
			cb(err, rows, fields);
		});
	});
};