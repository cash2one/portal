/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var EventProxy = require('eventproxy');

var mysqlUtil = require("../lib/mysqlUtil");

var GoodsType = require('../biz/GoodsType');

/**
 * （广告）获取推荐的商家分类前N条
 *
 * @param {String} zone_id 区域ID
 * @param {Integer} size 前N条
 * @return
 */
exports.getShopCate_2 = function(zone_id, size, cb){
	var ad_position_id = '4';

	var ep = EventProxy.create('shopAd', 'topGoodsType', function (shopAd, topGoodsType){
		/* 循环商品分类 */
		for(var i in topGoodsType){
			var row1 = topGoodsType[i];
			row1.children = [];

			/* 循环商家广告 */
			for(var j in shopAd){
				var row2 = shopAd[j];

				if(row1.id === row2.GOODS_TYPE_ID){
					row1.children.push(row2);
				}
			}
		}
		/* 以上部分待优化 */

		cb(null, topGoodsType);
	});

	ep.fail(function (err){
		cb(err);
	});

	/* 获取商品全部顶级分类 */
	GoodsType.getByPId('0', function (err, rows){
		if(err) return ep.emit('error', err);
		ep.emit('topGoodsType', rows);
	});

	this.getShopAdByZoneAndPosition(zone_id, ad_position_id, size, function (err, rows){
		if(err) return ep.emit('error', err);
		ep.emit('shopAd', rows);
	});
};

/**
 * （广告）获取商家广告前N条
 *
 * @param {String} zone_id 地区ID
 * @param {String} ad_position_id 广告区ID
 * @param {Integer} size 前N条
 * @return
 */
exports.getShopAdByZoneAndPosition = function(zone_id, ad_position_id, size, cb){
	size = size || 12;
	mysqlUtil.query('SELECT a.*, b.SHOP_NAME, b.SHOP_LOGO, b.GOODS_TYPE_ID FROM w_ad a, w_shop b WHERE a.ZONE_ID=? AND a.AD_POSITION_ID=? AND a.ANY_ID=b.id ORDER BY a.SORT LIMIT 0, ?',
		[zone_id, ad_position_id, size],
		function (err, rows, fields){
		if(err) return cb(err);
		cb(null, rows);
	});
};

/**
 * （广告）获取页面顶部广告前N条
 *
 * @param {String} zone_id 地区ID
 * @param {Integer} size 前N条
 * @return
 */
exports.getTopOfPage_1 = function(zone_id, size, cb){
	var ad_position_id = '2';
	size = size || 5;
	mysqlUtil.query('SELECT a.*, b.SHOP_ID, b.GOODS_TYPE_ID, b.GOODS_NAME, b.GOODS_PIC FROM w_ad a, w_goods b WHERE a.ZONE_ID=? AND a.AD_POSITION_ID=? AND a.ANY_ID=b.id ORDER BY a.SORT LIMIT 0, ?',
		[zone_id, ad_position_id, size],
		function (err, rows, fields){
		if(err) return cb(err);
		cb(null, rows);
	});
};