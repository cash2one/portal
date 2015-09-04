/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	express = util.express;

var front = {
	shop: require('../controllers/front/shop'),
	my: require('../controllers/front/my'),
	site: require('../controllers/front/site')
};
var back = {};
var manage = {};

console.log(util.uuid());

/**
 *
 * @param
 * @return
 */
module.exports = function(app){
	proc_front(app);
	proc_back(app);
	proc_manage(app);
};

/**
 *
 * @param
 * @return
 */
function proc_front(app){
	// app.get('/index.html$', site.indexUI);
	// app.get('/', site.indexUI);
	// app.get('/w/:wifi_mac/', wifi.indexUI);

	app.get('/', function (req, res, next){ res.redirect('/zz/'); });

	// 商铺的优惠券领取
	app.get('/shop/coupon/receive/', front.shop.coupon_receiveUI);
	// 商铺的优惠券
	app.get('/shop/coupon/', front.shop.couponUI);
	// 商铺
	app.get('/shop/:shop/', front.shop.indexUI);
	// 我的
	app.get('/i/', front.my.indexUI);
	// 首页
	app.get('/:zone/', front.site.checkExistOpenSite, function (req, res, next){ req.flash('page_id', 'dad9657792274e0e95a15c8901573c11'); next(); }, front.site.findAds_zoneUI, front.site.zoneUI);
}

/**
 *
 * @param
 * @return
 */
function proc_back(app){
	// TODO
}

/**
 *
 * @param
 * @return
 */
function proc_manage(app){
	// TODO
}