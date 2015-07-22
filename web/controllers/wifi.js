/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var conf = require('../settings'),
	Wifi = require("../biz/Wifi");

var virtualPath = '/';

exports.indexUI = function(req, res, next){
	var wifi_mac = req.params.wifi_mac;

	Wifi.getByMac(wifi_mac, function (err, row){
		if(err) return next(err);

		if(null === row) return res.redirect('/');

		console.log(row)

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
