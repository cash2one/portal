/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var conf = require('../settings'),
	mysqlUtil = require("../lib/mysqlUtil");

var virtualPath = '/';

exports.indexUI = function(req, res, next){
	var wifi_mac = req.params.wifi_mac;

	mysqlUtil.query('SELECT * FROM w_wifi WHERE WIFI_MAC=?', [wifi_mac], function (err, rows, fields){
		if(err) return next(err);

		if(!mysqlUtil.checkOnly(rows)) return res.redirect('/');

		console.log(rows[0]);

		res.render('wifi/Index', {
			title: conf.corp.name,
			description: '',
			keywords: ',Bootstrap,nodejs,express,javascript,java,html5',
			virtualPath: virtualPath,
			cdn: conf.cdn,
			data: {
				id: wifi_mac
			}
		});
	});
};
