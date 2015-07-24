/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var EventProxy = require('eventproxy');

var conf = require('../settings');

var GoodsType = require('../biz/GoodsType'),
	AdShow = require('../biz/AdShow'),
	Wifi = require('../biz/Wifi');

exports.indexUI = function(req, res, next){
	var wifi_mac = req.params.wifi_mac;

	/* 获取wifi设备信息 */
	Wifi.getByMac(wifi_mac, function (err, row){
		if(err) return next(err);
		if(null === row) return res.redirect('/');
		var wifi = row;

		var ep = EventProxy.create('topGoodsType', 'shopCateAd', 'topOfPageAd', 'goodsCateAd', function (topGoodsType, shopCateAd, topOfPageAd, goodsCateAd){
			res.render('wifi/Index', {
				conf: conf,
				title: conf.corp.name,
				description: '',
				keywords: ',Bootstrap,nodejs,express,javascript,java,html5',
				data: {
					id: wifi_mac,
					topGoodsType: topGoodsType,
					adShow: {
						shopCateAd: shopCateAd,
						goodsCateAd: goodsCateAd,
						topOfPageAd: topOfPageAd
					}
				}
			});
		});

		ep.fail(function (err){
			next(err);
		});

		/* 获取商品全部顶级分类 */
		GoodsType.getByPId('0', function (err, rows){
			if(err) return ep.emit('error', err);
			ep.emit('topGoodsType', rows);
		});

		/* （广告）获取推荐的商家分类前N条 */
		AdShow.getShopCate_2(wifi.ZONE_ID, 12, function (err, rows){
			if(err) return ep.emit('error', err);
			ep.emit('shopCateAd', rows);
		});

		/* （广告）获取页面顶部广告前N条 */
		AdShow.getTopOfPage_1(wifi.ZONE_ID, 5, function (err, rows){
			if(err) return ep.emit('error', err);
			ep.emit('topOfPageAd', rows);
		});

		/* （广告）获取推荐的商品分类前N条 */
		AdShow.getGoodsCate_1(wifi.ZONE_ID, 12, function (err, rows){
			if(err) return ep.emit('error', err);
			ep.emit('goodsCateAd', rows);
		});
	});
};
