/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var EventProxy = require('eventproxy');

var conf = require('../settings');

var GoodsType = require('../biz/GoodsType'),
	AdPosition = require('../biz/AdPosition'),
	Wifi = require('../biz/Wifi');

var virtualPath = '/',
	PAGE_ID = '1';

exports.indexUI = function(req, res, next){
	var wifi_mac = req.params.wifi_mac;

	/* 获取wifi设备信息 */
	Wifi.getByMac(wifi_mac, function (err, row){
		if(err) return next(err);
		if(null === row) return res.redirect('/');
		var wifi = row;

		var ep = EventProxy.create('topAllGoodsType', 'adPosition',
			function (topAllGoodsType, adPosition){

			console.log(adPosition);

			res.render('wifi/Index', {
				title: conf.corp.name,
				description: '',
				keywords: ',Bootstrap,nodejs,express,javascript,java,html5',
				virtualPath: virtualPath,
				cdn: conf.cdn,
				data: {
					id: wifi_mac,
					topAllGoodsType: topAllGoodsType
				}
			});
		});

		ep.fail(function (err){
			next(err);
		});

		/* 获取商品全部顶级分类 */
		GoodsType.getTopAll(function (err, rows){
			if(err) return ep.emit('error', err);
			ep.emit('topAllGoodsType', rows);
		});

		/* 获取该页全部的广告位 */
		AdPosition.getByZoneAndPage(wifi.ZONE_ID, PAGE_ID, function (err, rows){
			if(err) return ep.emit('error', err);
			ep.emit('adPosition', rows);
		});
	});
};
