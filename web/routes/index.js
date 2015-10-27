/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	express = util.express;

var front = {
	house: require('../controllers/front/house'),
	shop: require('../controllers/front/shop'),
	my: require('../controllers/front/my'),
	site: require('../controllers/front/site')
};
var back = {
	customer: require('../controllers/back/customer')
};
var manage = {
	menu: require('../controllers/manage/menu'),
	site: require('../controllers/manage/site'),
	manager: require('../controllers/manage/manager')
};

/**
 *
 * @param
 * @return
 */
module.exports = function(app){
	proc_manage(app);
	proc_back(app);
	proc_front(app);
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

	// 房产
	app.get('/house/:house/', front.house.houseUI);
	// 房产
	app.get('/house/', front.house.indexUI);
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
	// 默认
	app.get('/', function (req, res, next){ res.redirect('/zz/'); });
}

/**
 *
 * @param
 * @return
 */
function proc_back(app){
	app.get('/user/login', back.customer.loginUI);
	app.post('/user/login$', express.valiPostData, back.customer.login);
}

/**
 *
 * @param
 * @return
 */
function proc_manage(app){
	app.get('/manager/login$', manage.manager.loginUI);
	app.post('/manager/login$', express.valiPostData, manage.manager.login);
	app.get('/manager/logout$', manage.manager.logoutUI);

	// 菜单
	app.get('/manage/menu/', manage.menu.indexUI);
	app.post('/manage/menu/:pid', manage.menu.children);
	app.post('/manage/menu/list/:pid', manage.menu.indexUI_list);

	app.get('/manage/welcome/', manage.site.welcomeUI);
	app.post('/manage/side/:pid', manage.site.indexUI_side);
	// manager login
	app.get('/manage/', manage.site.indexUI);
}